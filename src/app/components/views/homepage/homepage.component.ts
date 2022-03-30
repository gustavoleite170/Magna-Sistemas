import { ArrayType } from '@angular/compiler';
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
    text: `Baixe o e-book e saiba os benefícios da Indústria 4.0 e como ela impulsiona os processos da sua empresa.`,
    button: "BAIXE AQUI"
  }, {
    link: "https://www.magnasistemas.com.br/wps/portal/internet/novidades/detalhes/59d7973a-db66-4afd-9295-9a70337926c9",
    image: "https://www.magnasistemas.com.br/wps/wcm/connect/f04f457d-c43b-44ac-b892-0202d97874b4/2021-IBM-Geography-Excellence-Award-Top-Brazil-Sell-Business-Partner-of-the-Year.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE-f04f457d-c43b-44ac-b892-0202d97874b4-leAWnzx",
    title: "“Top Brazil Sell Business Partner of the Year”",
    text: `MAGNA SISTEMAS é a vencedora da premiação "2021 IBM Geography Excellence Award"`,
    button: "SAIBA MAIS"
  }, {
    link: "https://www.magnasistemas.com.br/wps/portal/internet/parceiros/detalhes/1a064e67-f5ba-42db-9ad3-47336b7dd7eb",
    image: "https://www.magnasistemas.com.br/wps/wcm/connect/7cf4c867-e74e-40f9-832d-3299da2333c7/Instagram+2.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE-7cf4c867-e74e-40f9-832d-3299da2333c7-leAWnzx",
    title: `Somos "Google Cloud Partner"!`,
    text: `A MAGNA SISTEMAS tem o prazer de anunciar sua mais nova parceria de
    sucesso!`,
    button: "VEJA MAIS"
  }, {
    link: "https://www.magnasistemas.com.br/wps/portal/internet/novidades/detalhes/a718f11a-e3a0-49ea-88c9-84706f71eee5",
    image: "https://www.magnasistemas.com.br/wps/wcm/connect/7d2b1bda-5255-48db-a9d5-788e5518e057/Beige+and+Green+Abstract+Illustration+Join+Our+Team+Announcement+LinkedIn+Post+%283%29.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE-7d2b1bda-5255-48db-a9d5-788e5518e057-leAWnzx",
    title: "Destaque do Ano do Anuário Informática",
    text: `MAGNA SISTEMAS escolhida no segmento de mercado Integradores - Médio Porte.`,
    button: "VEJA MAIS"
  }]

  sec2: Array<any> = [{
    link: "https://www.magnasistemas.com.br/wps/portal/internet/parceiros",
    image: "https://www.magnasistemas.com.br/wps/wcm/connect/c17dc140-cae4-4475-9981-4e45a97bb71a/home06.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE-c17dc140-cae4-4475-9981-4e45a97bb71a-leAWnzx",
    title: "Parceiros",
    text: `A MAGNASISTEMAS mantém parcerias estratégicas com as principais
    empresas mundiais de tecnologia para o desenvolvimento de suas
    soluções.`,
    button: "CONHEÇA"
  }, {
    link: "https://jobs.kenoby.com/magnasistemas",
    image: "https://www.magnasistemas.com.br/wps/wcm/connect/9983867d-e0ce-4784-b3d3-d36b8157a397/home05.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE-9983867d-e0ce-4784-b3d3-d36b8157a397-leAWnzx",
    title: "Carreira",
    text: `Mais que colaboradores, pessoas! Conheça mais sobre a MAGNASISTEMAS
    e nossas vagas! Venha fazer parte do nosso time!`,
    button: "CONHEÇA"
  }]

  sec3: Array<any> = [{
      link: "https://www.magnasistemas.com.br/wps/portal/internet/solucoes/detalhe/0bd2e0c4-2f99-426a-8194-901e2c1910e5",
      image: "https://www.magnasistemas.com.br/wps/wcm/connect/2eaa2971-6de7-4e19-b79e-117268d440d6/Zeladoria.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE-2eaa2971-6de7-4e19-b79e-117268d440d6-leAWnzx",
      title: "Zeladoria Urbana Inteligente",
      text: `Pessoas mais engajadas, cidades mais acolhedoras.`,
      button: "CONHEÇA"
    }, {
      link: "https://www.magnasistemas.com.br/wps/portal/internet/solucoes/detalhe/fbfa4b95-c51f-4188-9e5a-f3c56f437806",
      image: "https://www.magnasistemas.com.br/wps/wcm/connect/5ec56934-3472-49e4-8a09-e52252f14d15/CCI1b-MSWebsite.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE-5ec56934-3472-49e4-8a09-e52252f14d15-leAWnzx",
      title: "Centro de Controle Inteligente",
      text: `Solução de Smarter Cities para controle, monitoramento e operação
      da situação.`,
      button: "CONHEÇA"
    }, {
      link: "https://www.magnasistemas.com.br/wps/portal/internet/solucoes/detalhe/5110b7c3-a52e-4431-95c6-6d3910dd6461",
      image: "https://www.magnasistemas.com.br/wps/wcm/connect/38400a0d-e8d0-4d23-9d50-441668d25534/IoT+MSWebsite.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE-38400a0d-e8d0-4d23-9d50-441668d25534-leAWnzx",
      title: "Internet of Things",
      text: `Soluções inteligentes para gestão integrada de ativos corporativos.`,
      button: "CONHEÇA"
    }, {
      link: "https://www.magnasistemas.com.br/wps/portal/internet/solucoes/detalhe/c1e2af06-8f53-488c-9492-b4be4e1d4bdc",
      image: "https://www.magnasistemas.com.br/wps/wcm/connect/3c6387f4-8cfa-4693-a3f0-cf66479ee601/BPMRPA-MSWebsite.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE-3c6387f4-8cfa-4693-a3f0-cf66479ee601-leAWnzx",
      title: "Automação de Processos",
      text: `Modelagem, integração, otimização e gestão de processos de
      negócio.`,
      button: "CONHEÇA"
  }]

  ngOnInit(): void {
  }

}
