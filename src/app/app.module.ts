import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitComponent } from './produit/produit.component';
import { ProduitsComponent } from './produits/produits.component';
import { ShopService } from './services/shop.service';
import { CategorieComponent } from './categorie/categorie.component';
import { CategoriesComponent } from './categories/categories.component';
import { FavorisComponent } from './favoris/favoris.component';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { FavorisProduitsComponent } from './favoris-produits/favoris-produits.component';
import { AuthModule } from './auth/auth/auth.module';
import { RegisterComponent } from './auth/components/register/register.component';
import { TodoComponent } from './todo/todo.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    ProduitsComponent,
    CategorieComponent,
    CategoriesComponent,
    FavorisComponent,
    FavorisProduitsComponent,
    TodoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    AuthModule,
    HttpClientModule
  ],
  providers: [
    ShopService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
