import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarsPhotosComponent } from './mars-photos/mars-photos.component';

@NgModule({
  declarations: [
    AppComponent,
    MarsPhotosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [MarsPhotosComponent]
})
export class AppModule { }
