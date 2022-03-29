import { Component, OnInit} from '@angular/core';
import { ChangeDetectorRef, NgZone, ViewChild } from "@angular/core";
import { SwiperComponent } from "swiper/angular";

// import Swiper core and required components
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller, 
  Keyboard
} from "swiper";
import { BehaviorSubject } from "rxjs";

// install Swiper components
SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller,
  Keyboard

]);

@Component({
  selector: 'app-homepage-carroussel',
  template: `
    <div class="testimonials__carroussel">
      <swiper
        [slidesPerView]="1"
        [spaceBetween]="30"
        [pagination]="{ clickable: true }"
        [loop]="true"
        [keyboard]="true"
      >
        <ng-template swiperSlide>
          <div class="testimonials__carroussel__slides">
            <div class="testimonials__carroussel__slides__testimony">
              <div class="testimonials__carroussel__slides__testimony-text">
                Depois de muitas frustrações com propostas limitadas e complexas
                nos deparamos com a solução do Google for Education por meio da
                Inicie Transformação Digital.
              </div>
              <div class="testimonials__carroussel__slides__author">
                <img
                  src="https://inicie.digital/wp-content/uploads/2021/05/Captura-de-Tela-2021-05-26-às-19.48.58-150x150.png"
                  alt="Admir Moreli"
                  class="testimonials__carroussel__slides__author-photo"
                />
                <div class="testimonials__carroussel__slides__author-info">
                  <div class="testimonials__carroussel__slides__author-name">
                    Admir Moreli
                  </div>
                  <div
                    class="testimonials__carroussel__slides__author-location"
                  >
                    Colégio Rio Branco Campinas - SP
                  </div>
                </div>
              </div>
              <div class="testimonials__carroussel__slides__quotes">
                <img
                  src="../../../../assets/quote.png"
                  alt="Quotes"
                  class="testimonials__carroussel__slides__quotes-mark"
                />
              </div>
            </div>
          </div>
        </ng-template>

        <ng-template swiperSlide>
          <div class="testimonials__carroussel__slides">
            <div class="testimonials__carroussel__slides__testimony">
              <div class="testimonials__carroussel__slides__testimony-text">
                Vejo que a Inicie está fazendo um ótimo trabalho em capacitar
                todos nas instituições que atuam. Administrativo, educadores e
                até mesmo pais e estudantes estão envolvidos.
              </div>
              <div class="testimonials__carroussel__slides__author">
                <img
                  src="https://inicie.digital/wp-content/uploads/2021/02/Esther_Wojcicki_cropped-e1622068870716-150x150.jpeg"
                  alt="Esther Wojcicki"
                  class="testimonials__carroussel__slides__author-photo"
                />
                <div class="testimonials__carroussel__slides__author-info">
                  <div class="testimonials__carroussel__slides__author-name">
                    Esther Wojcicki
                  </div>
                  <div
                    class="testimonials__carroussel__slides__author-location"
                  >
                    Escola Secundária de Palo Alto - EUA
                  </div>
                </div>
              </div>
              <div class="testimonials__carroussel__slides__quotes">
                <img
                  src="../../../../assets/quote.png"
                  alt="Quotes"
                  class="testimonials__carroussel__slides__quotes-mark"
                />
              </div>
            </div>
          </div>
        </ng-template>
  `,
  styles: [
  ]
})

export class HomepageCarrousselComponent implements OnInit {

  @ViewChild("swiperRef", { static: false }) swiperRef?: SwiperComponent;

  thumbs: any;
  slides$ = new BehaviorSubject<string[]>([""]);
  constructor(private cd: ChangeDetectorRef, private ngZone: NgZone) {}
  ngOnInit() {}

  navigation = false;
  toggleNavigation() {
    this.navigation = !this.navigation;
  }

  indexNumber = 1;
  slidesPerView: number = 1;
  pagination: any = false;

  keyboard= {
    enabled: true,
    onlyInViewport: false,
  }
  slidesPerGroup = 0;

}
