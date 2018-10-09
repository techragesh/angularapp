import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './components/overview/overview.component';
import { CompanyComponent } from './components/company/company.component';
import { LoginComponent } from './components/login/login.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LoginLayoutComponent } from './layout/login-layout/login-layout.component';
import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';
import { CompanyListComponent } from './components/company-list/company-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', data: { title: 'Login' }, pathMatch: 'full' },
  {
    path: 'login', component: LoginLayoutComponent, data: {title: 'Login'},
    children: [
      {path: '', component: LoginComponent}
    ]
  },
  { path: 'main', component: HomeLayoutComponent,
    children: [
      { path: 'overview', component: OverviewComponent },
      { path: 'company', component: CompanyComponent },
      { path: 'companylist', component: CompanyListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
