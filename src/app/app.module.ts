import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SetmessageComponent } from './components/setmessage/setmessage.component';
import { ShowmessageComponent } from './components/showmessage/showmessage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SetmessageComponent,
    ShowmessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
