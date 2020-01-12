import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MembersComponent } from './members/members.component';
import { AddMembersComponent } from './members/add-members/add-members.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path:'', component:LoginComponent },
  { path:'home', component:MembersComponent },
  { path:'addmembers',component:AddMembersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
