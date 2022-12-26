import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

//mio--
import { NavComponent } from './component/nav/nav.component';
import { BodyComponent } from './component/cards/cards.component';

@NgModule({
  declarations: [AppComponent, NavComponent, BodyComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
