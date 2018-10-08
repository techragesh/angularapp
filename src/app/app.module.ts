import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './components/navigation/navigation.component';
import { OverviewComponent } from './components/overview/overview.component';
import { CompanyComponent } from './components/company/company.component';
import { CustomMaterialModule } from './core/material.module';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginLayoutComponent } from './layout/login-layout/login-layout.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';
import { NgtUniversalModule } from '@ng-toolkit/universal';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    OverviewComponent,
    CompanyComponent,
    LoginComponent,
    LoginLayoutComponent,
    ToolbarComponent,
    HomeLayoutComponent
  ],
  imports: [
    NgtUniversalModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
