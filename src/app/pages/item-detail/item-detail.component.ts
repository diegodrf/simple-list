import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/models/item';
import { LocalStorageRepositoryService } from 'src/app/services/local-storage-repository.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  item!: Item;
  constructor(
    private _localStorageRepository: LocalStorageRepositoryService,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this._activatedRoute.snapshot.params['id']
    this.item = this._localStorageRepository.getItemById(id);
  }

}
