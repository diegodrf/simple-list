import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { LocalStorageRepositoryService } from 'src/app/services/local-storage-repository.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

  items: Item[] = [];

  constructor(
    private _localStorageRepository: LocalStorageRepositoryService
    ) { 
      
    }

  ngOnInit(): void {
    this._localStorageRepository.load();
    this.items = this._localStorageRepository.items;
    
    if(this.items.length === 0) {
      for(let i = 1; i<= 10; i++) {
        let _ = new Item(`Item #${i}`, 'http://localhost:4200');
        this.items.push(_);
      }
    }
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
    this._localStorageRepository.save(this.items);
  }

  moveItemUp(currentIndex: number) {
    if(currentIndex === 0) {
      return;
    }

    let targetIndex = currentIndex - 1;
    let selectedItem = this.items[currentIndex];
    let itemPositionedInTargetPosition = this.items[targetIndex];
    this.items.fill(selectedItem, targetIndex, currentIndex);
    this.items[currentIndex] = itemPositionedInTargetPosition;
    
    this._localStorageRepository.save(this.items);
  }

  moveItemDown(currentIndex: number) {
    if(currentIndex === this.items.length - 1) {
      return;
    }

    let targetIndex = currentIndex + 1;
    let selectedItem = this.items[currentIndex];
    let itemPositionedInTargetPosition = this.items[targetIndex];
    this.items.fill(itemPositionedInTargetPosition, currentIndex, targetIndex);
    this.items[targetIndex] = selectedItem;
    
    this._localStorageRepository.save(this.items);
  }

}
