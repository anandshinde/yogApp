import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Component/login/login.component';
import { PagenotfoundComponent } from './Component/pagenotfound/pagenotfound.component';


const routes: Routes = [
  { path:"", redirectTo:'',pathMatch:'full'},
  { path:"login",component:LoginComponent},
  { path:"**", component:PagenotfoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
