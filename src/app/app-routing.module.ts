import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent  } from './dashboard/dashboard.component';
import { LoginComponent  } from './login/login.component';
import { RegisterComponent  } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { AccountComponent } from './profile/account/account.component';
import { ChildrenComponent } from './profile/children/children.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent, children: [
    {path: 'account', component: AccountComponent},
    {path: 'children', component: ChildrenComponent}  
  ],canActivate: [AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
