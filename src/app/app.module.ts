import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsListComponent } from './pages/items-list/items-list.component';
import { NavBarComponent } from './components/shared/nav-bar/nav-bar.component';
import { ItemDetailComponent } from './pages/item-detail/item-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsListComponent,
    NavBarComponent,
    ItemDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
