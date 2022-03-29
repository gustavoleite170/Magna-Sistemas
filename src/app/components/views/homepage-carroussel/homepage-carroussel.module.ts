import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import { HomepageCarrousselComponent } from './homepage-carroussel.component';



@NgModule({
  declarations: [HomepageCarrousselComponent],
  imports: [
    CommonModule,
    SwiperModule
  ],
  exports: [HomepageCarrousselComponent]
})
export class HomepageCarrousselModule { }
