import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsListComponent } from './pages/items-list/items-list.component';
import { EditItemComponent } from './pages/edit-item/edit-item.component';

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
        'component': EditItemComponent,
        'data': { 'readonly': false }
      },
      {
        'path': ':id',
        'component': EditItemComponent,
        'data': { 'readonly': true }
      },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
