import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './componets/app-header/app-header.component';
import { AppFooterComponent } from './componets/app-footer/app-footer.component';
import { MainComponent } from './componets/main-layout/main/main.component';
import { AboutUsComponent } from './componets/main-layout/about-us/about-us.component';
import { ContactComponent } from './componets/main-layout/contact/contact.component';

import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    MainComponent,
    AboutUsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
