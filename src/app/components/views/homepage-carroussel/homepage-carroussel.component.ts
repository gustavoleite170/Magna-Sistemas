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
    <div class="homepage-carroussel">
      <swiper
        [slidesPerView]="1"
        [loop]="true"
        [keyboard]="true"
      >
        <ng-template swiperSlide>
          <div class="homepage__slide" data-thumb-alt="">
	          <img src="https://www.magnasistemas.com.br/wps/wcm/connect/f2f0df0d-a1ec-4fdf-abeb-b9aa4ade3641/home2019MS.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE-f2f0df0d-a1ec-4fdf-abeb-b9aa4ade3641-leAWnzx" class="homepage__slide-img">
		        <div class="homepage__slide-text">
			        <div class="homepage__slide-text-container">
					      <h1>NA JORNADA DA TRANSFORMAÇÃO DIGITAL</h1>
					      <h2>É PRECISO IR ALÉM DA INOVAÇÃO</h2>
					      <a href="\internet\empresa">CONHEÇA</a>
			        </div>
		        </div>
	        </div>
        </ng-template>
        <ng-template swiperSlide>
          <div class="homepage__slide" data-thumb-alt="">
	          <img src="https://www.magnasistemas.com.br/wps/wcm/connect/b534261d-6501-435e-b950-5c3cdfbf372e/Solution+%287%29.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE-b534261d-6501-435e-b950-5c3cdfbf372e-leAWnzx">
		        <div class="homepage__slide-text">
			        <div class="homepage__slide-text-container">
					      <h1>Soluções</h1>
					      <h2>A tecnologia da informação à serviço do seu negócio!</h2>
					      <a href="\internet\empresa">CONHEÇA</a>
			        </div>
		        </div>
	        </div>
        </ng-template>
      </swiper>
  `,
  styles: [`
  img{
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  h1, h2, a{
    font-family: 'Montserrat', sans-serif;
    text-decoration: none;
  }

  a{
    position: relative;
    top: 12px;
    padding: 3px 8px;
    color: #fff;
    border: 1px solid #fff;
    border-radius: 2px;
    font-size: 8.6px;

    transition: all 0.5s ease;
  }

  a:hover{
    background: #ffffff;
    color: #193a68;
  }

  h1{
    font-size: 18px;
    line-height: 1.1;
    font-weight: 700;
    color: #ffffff;
  }

  h2{
    font-size: 10.6px;
    font-weight: 500;
    color: #ffffff;
  }

  .homepage-carroussel{
    overflow-x: hidden;
  }

  .homepage-slide{
    position: relative;
    width: 100vw;
    margin-right: 0px; 
    float: left; 
    display: block;
    overflow-y: hidden;
  }

  .homepage__slide-text{
    position: absolute;
    z-index: 2;
    top: 40%;
    left: calc(50% - 130px);
    max-width: 280px;
  }

  @media only screen and (min-width: 768px) {
    img{
      height: 300px;
    }
    
    h1{
      font-size: 28px;
    }

    h2{
      font-size: 12px;
    }

    a{
      top: 21px;
      padding: 5.6px 14px;
      border-radius: 3px;
      font-size: 11px;
    }

    .homepage__slide-text{
      max-width: 456px;
      left: calc(50% - 228px);
    }
  }

  @media only screen and (min-width: 992px) {
    img{
      height: 400px;
    }

    h1{
      font-size: 48px;
    }

    h2{
      font-size: 16px;
    }

    a{
      top: 42px;
      font-size: 12px;
      padding: 7.466667px 18.6666667px;
      border-radius: 4px;
    }

    .homepage__slide-text{
      max-width: 782px;
      left: calc(50% - 391px);
    }
  }

  @media only screen and (min-width: 1200px) {
    img{
      height: 500px;
    }

    h1{
      font-size: 56px;
    }

    h2{
      font-size: 20px;
    }

    a{
      top: 42px;
      font-size: 13px;
      padding: 9.3333333px 23.333333px;
      border-radius: 4px;
    }

    .homepage__slide-text{
      max-width: 912px;
      left: calc(50% - 456px);
    }
  }

  @media only screen and (min-width: 1600px) {
    h1{
      font-size: 70px;
    }

    h2{
      font-size: 25px;
    }

    a{
      top: 42px;
      font-size: 14px;
      padding: 11.2px 28px;
      border-radius: 4px;
    }

    .homepage__slide-text{
      max-width: 1140px;
      left: calc(50% - 570px);
      top: 35%;
    }
  }
  `
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
  slidesPerView: number = 6;
  pagination: any = false;

  keyboard= {
    enabled: true,
    onlyInViewport: false,
  }

}
