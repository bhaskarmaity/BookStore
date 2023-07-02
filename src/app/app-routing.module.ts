import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponentComponent } from './book-list-component/book-list-component.component';
import { BookDetailComponentComponent } from './book-detail-component/book-detail-component.component';

const routes: Routes = [
  { path: '', component:  BookListComponentComponent},
  { path: 'details/:id', component: BookDetailComponentComponent },
  { path: '*', component:  BookListComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
