import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

  items: string[] = [];

  constructor() { }

  ngOnInit(): void {
    for(let i = 1; i<= 10; i++){
      this.items.push(`Element #${i}`);
    }
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
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
  }

  moveItemDown(currentIndex: number) {
    if(currentIndex === this.items.length - 1) {
      return;
    }
    debugger;
    let targetIndex = currentIndex + 1;
    let selectedItem = this.items[currentIndex];
    let itemPositionedInTargetPosition = this.items[targetIndex];
    this.items.fill(itemPositionedInTargetPosition, currentIndex, targetIndex);
    this.items[targetIndex] = selectedItem;
  }

}
