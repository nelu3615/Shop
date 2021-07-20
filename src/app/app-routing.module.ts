import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { CategoriesComponent } from './categories/categories.component';
import { FavorisProduitsComponent } from './favoris-produits/favoris-produits.component';
import { FavorisComponent } from './favoris/favoris.component';
import { ProduitsComponent } from './produits/produits.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  { path: 'shop', component: ProduitsComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'favoris', component: FavorisProduitsComponent },
  { path: '', component: ProduitsComponent },
  {path: 'login', component: LoginComponent},
{path: 'register', component: RegisterComponent},
{path: 'todos', component: TodoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
