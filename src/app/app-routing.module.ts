import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GooglelikeComponent } from './googlelike/googlelike.component';
import { MainpageComponent } from './mainpage/mainpage.component';

const routes: Routes = [
  { path: '', component: MainpageComponent },
  { path: 'search/:title', component: GooglelikeComponent },
  { path: 'search', component: GooglelikeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
