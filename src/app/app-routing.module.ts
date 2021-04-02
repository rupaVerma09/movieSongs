import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { HeaderComponent } from './header/header.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },

  {
    path:"register-user",
    component:RegisterUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
