import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsListComponent } from './pages/items-list/items-list.component';
import { ItemDetailComponent } from './pages/item-detail/item-detail.component';
import { NewItemComponent } from './pages/new-item/new-item.component';

const routes: Routes = [
  {
    'path': '',
    'component': ItemsListComponent
  },
  {
    'path': 'items',
    'children': [
      {
        'path': 'new',
        'component': NewItemComponent
      },
      {
        'path': ':id',
        'component': ItemDetailComponent
      },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
