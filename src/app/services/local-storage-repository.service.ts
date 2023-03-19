import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageRepositoryService {

  private _key = 'afa845b1-080d-4563-a097-e803a9b690a2';
  private _items: Item[] = [];
  
  constructor() { 
    this.load();
  }

  get items(): Item[] {
    return this._items;
  }

  load() {
    let itemsFromLocalStorage = localStorage.getItem(this._key);
    
    if(itemsFromLocalStorage) {
      this._items = JSON.parse(itemsFromLocalStorage!);
    }
  }

  save(items: Item[]) {
    localStorage.setItem(this._key, JSON.stringify(items));
  }

  getItemById(id: number) {
    return this._items[id];
  }
}
