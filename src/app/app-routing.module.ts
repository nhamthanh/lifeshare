import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebComponent } from './web/web.component';
import { DatabaseComponent } from './web/database/database.component';
import { JavaComponent } from './web/java/java.component';

const routes: Routes = [
  { path: '', component: WebComponent },
  { path: 'database', component: DatabaseComponent },
  { path: 'java', component: JavaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
