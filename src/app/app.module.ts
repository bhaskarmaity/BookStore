import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponentComponent } from './book-list-component/book-list-component.component';
import { BookDetailComponentComponent } from './book-detail-component/book-detail-component.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponentComponent,
    BookDetailComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
