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

}
