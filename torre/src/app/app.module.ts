import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { SpaceComponent } from './pages/space/space.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Globals } from "./globals";
import { TenantComponent } from './pages/tenant/tenant.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home',      component: HomeComponent },
  { path: 'space',      component: SpaceComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SpaceComponent,
    NavbarComponent,
    TenantComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [Globals ],
  bootstrap: [AppComponent]
})
export class AppModule { }
