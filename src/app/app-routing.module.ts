import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MembersComponent } from './members/members.component';
import { AddMembersComponent } from './members/add-members/add-members.component';


const routes: Routes = [
  { path:'', component:MembersComponent },
  { path:'addmembers',component:AddMembersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
