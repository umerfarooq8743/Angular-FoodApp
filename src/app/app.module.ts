import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RatingModule } from 'ng-starrating';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import {FormsModule} from '@angular/forms';
import { TagComponent } from './tag/tag.component';
import { CartpageComponent } from './cartpage/cartpage.component';
import { FoodpageComponent } from './foodpage/foodpage.component';
import { AppNotFoundComponent } from './app-not-found/app-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    TagComponent,
    CartpageComponent,
    FoodpageComponent,
    AppNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RatingModule ,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
