import { Component, ElementRef, OnInit } from '@angular/core';
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

  constructor(
    private localStorageRepository: LocalStorageRepositoryService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  save(form: NgForm) {
    console.log(form.value);
    let item = new Item(form.value.title, form.value.url);
    this.localStorageRepository.save(item);
    this.router.navigate(['/']);
  }
}
