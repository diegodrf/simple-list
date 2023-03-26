import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Item } from 'src/app/models/item';
import { LocalStorageRepositoryService } from 'src/app/services/local-storage-repository.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {

  private _urlRegex = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;
  get urlRegex(): RegExp {
    return this._urlRegex;
  }

  @ViewChild('f') form!: NgForm;
  readonly: boolean;
  item?: Item;

  constructor(
    private localStorageRepository: LocalStorageRepositoryService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { 
    this.readonly = true;
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data: Data) => {
      this.readonly = data['readonly'];
      if(this.readonly) {
        this.getItem();
      }
    });
  }

  getItem() {
    this.activatedRoute.params.subscribe((value: Params) => {
      let id = Number.parseInt(value['id']);
      this.item = this.localStorageRepository.getItemById(id);
      console.log(this.item);
    });
  }

  save() {
    console.log(this.form.value);
    let item = new Item(this.form.value.title, this.form.value.url);
    this.localStorageRepository.save(item);
    this.router.navigate(['/']);
    this.readonly = true;
  }

  populateFields() {
    // TODO Insert logic to get website data using chrome API and populate the fields.
    this.form.form.patchValue({});
    throw new Error('Not implemented.');
  }

  enableEditMode() {
    this.readonly = false;
  }
}
