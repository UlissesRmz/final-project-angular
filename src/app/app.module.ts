import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
//Conection with Routes
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { InventoryComponent } from './components/inventory/inventory.component';

//Servicios

import { ProductsService } from './components/products.service';

const routes: Routes = [
  // { path: '**', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'sign-in', component: SigninComponent },
  { path: 'log-in', component: LogInComponent },
  { path: 'inventory', component: InventoryComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SigninComponent,
    LogInComponent,
    InventoryComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [ProductsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
