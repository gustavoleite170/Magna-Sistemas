import { HomepageCarrousselModule } from './components/views/homepage-carroussel/homepage-carroussel.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { HomepageComponent } from './components/views/homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    HomepageCarrousselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
