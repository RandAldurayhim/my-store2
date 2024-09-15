
import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { HeaderComponent } from './header/header.component';
import { ProductItemDetailComponent } from './product-item-detail/product-item-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ConfirmationComponent,
    HeaderComponent,
    ProductItemDetailComponent,
    ProductListComponent,
    ProductItemComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient( withFetch(),withInterceptorsFromDi())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
