import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Table
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
//Conection with Routes
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { InventoryComponent } from './components/inventory/inventory.component';

// Servicios
import { ProductsService } from './components/products.service';

// APIS
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'sign-in', component: SigninComponent },
  { path: 'log-in', component: LogInComponent },
  { path: 'inventory', component: InventoryComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    MatTableModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,

    // AngularFireModule.initializeApp(environment.firebase, 'final-projects'), // imports firebase/app needed for everything
    // AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    // AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    // AngularFireStorageModule, // imports firebase/storage only needed for storage features
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SigninComponent,
    LogInComponent,
    InventoryComponent,
  ],

  providers: [ProductsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
