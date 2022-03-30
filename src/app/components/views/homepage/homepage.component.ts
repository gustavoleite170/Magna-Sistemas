import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  sec1: Array<any> = [{
    link: "https://www.magnasistemas.com.br/wps/wcm/connect/41b7b902-e96b-444b-9297-76040ec9de65/E-Book_Industria+4-0_MS.pdf?MOD=AJPERES&CVID=nVfJnFw",
    image: "https://www.magnasistemas.com.br/wps/wcm/connect/e2218fd9-5ea5-43a2-8cca-15ec84411aac/Captura+de+tela+2022-01-07+112354.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE-e2218fd9-5ea5-43a2-8cca-15ec84411aac-leAWnzx",
    title: "Industria 4.0",
    text: `Baixe o e-book e saiba os benefícios da Indústria 4.0 e como ela
    impulsiona os processos da sua empresa.`,
  }]

  ngOnInit(): void {
  }

}
