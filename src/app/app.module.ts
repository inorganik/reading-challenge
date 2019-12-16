import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LevelOneComponent } from './level-one/level-one.component';
import { CreateYourOwnComponent } from './create-your-own/create-your-own.component';

@NgModule({
  declarations: [
    AppComponent,
    LevelOneComponent,
    CreateYourOwnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
