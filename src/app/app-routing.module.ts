import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CoursesComponent} from "./courses/courses.component";
import {CoursesTableComponent} from "./courses-table/courses-table.component";

const routes: Routes = [
  {path: "courses", component: CoursesComponent},
  {path: "list", component: CoursesTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
