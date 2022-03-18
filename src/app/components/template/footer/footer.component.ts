import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  selectTab ($event: any, $selector: any, $selectorTab: any, $city1: any, $city1Tab: any, $city2: any, $city2Tab: any): void {

    $event.stopPropagation();

    $selector.classList.add('selected');
    $selectorTab.classList.add('selected');
    
    if($city1.className.indexOf('selected') !== -1) $city1.classList.remove('selected');
    if($city1Tab.className.indexOf('selected') !== -1) $city1Tab.classList.remove('selected');

    if($city2.className.indexOf('selected') !== -1) $city2.classList.remove('selected');
    if($city2Tab.className.indexOf('selected') !== -1) $city2Tab.classList.remove('selected');

    

    /* switch($selector){
      case(saoPaulo)
    } */
  }

}
