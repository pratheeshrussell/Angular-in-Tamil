import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FruitsComponent } from './components/fruits/fruits.component';
import { FruitComponent } from './components/fruits/fruit/fruit.component';
import { FormsModule } from '@angular/forms';
import { AddFruitComponent } from './components/fruits/add-fruit/add-fruit.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    FruitsComponent,
    FruitComponent,
    AddFruitComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
