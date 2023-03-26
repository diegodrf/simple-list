import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { Item } from 'src/app/models/item';
import { LocalStorageRepositoryService } from 'src/app/services/local-storage-repository.service';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {

  private _urlRegex = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;
  get urlRegex(): RegExp {
    return this._urlRegex;
  }

  @ViewChild('f') form!: NgForm;

  constructor(
    private localStorageRepository: LocalStorageRepositoryService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  save() {
    console.log(this.form.value);
    let item = new Item(this.form.value.title, this.form.value.url);
    this.localStorageRepository.save(item);
    this.router.navigate(['/']);
  }
}
