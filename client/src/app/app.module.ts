import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProdDetailsComponent } from './pages/prod-details/prod-details.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { CategoryDiscountsComponent } from './components/category-discounts/category-discounts.component';
import { BestProductsComponent } from './components/best-products/best-products.component';
import { BestProductDetailsComponent } from './pages/best-product-details/best-product-details.component';
import { ModalComponent } from './components/modal/modal.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProdDetailsComponent,
    SearchResultsComponent,
    ClickOutsideDirective,
    CategoryDiscountsComponent,
    BestProductsComponent,
    BestProductDetailsComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }