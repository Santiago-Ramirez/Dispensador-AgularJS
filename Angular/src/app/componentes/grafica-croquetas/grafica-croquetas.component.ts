import { mostrarPrestasAnimation } from 'src/app/animation';
import { Component, OnInit } from '@angular/core';
import  Ws from "@adonisjs/websocket-client"

@Component({
  selector: 'app-grafica-croquetas',
  templateUrl: './grafica-croquetas.component.html',
  styleUrls: ['./grafica-croquetas.component.css'],
  animations:[
    mostrarPrestasAnimation
  ]
})
export class GraficaCroquetasComponent implements OnInit {

  _ws:any;
  chat:any;
  mensaje:string[] = [];
  msg:string;
  uri = "ws://3.18.112.81/";

  constructor() { }

  ngOnInit(): void {
    this.loadData()

    this._ws = Ws(this.uri, {
      path: "ws"
    });

    this._ws.connect();
    this.chat = this._ws.subscribe("croquetaslvl");

    this.chat.on("message", (data:any) => {
      // console.log(data)
      // this.mensaje.push(data)
      this.loadData()
      this.test(data)
      // console.log("Este es eldato qe llega:",data)
    })
  }


  single: any[];
  multi: any[];
  
  view: any[] = [700, 400];
  
  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Datos';
  showYAxisLabel = true;
  yAxisLabel = 'Datos';
  
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  ///////////////////////////////////////////////////////////////




  loadData(){
    this.single =  [
      {
        "name": "26/04/21",
        "value": 10
      },
      {
        "name": "27/04/21",
        "value": 55
      },
      {
        "name": "28/04/21",
        "value": 59
      },
      {
        "name": "29/04/21",
        "value": 12
      },
      {
        "name": "30/04/21",
        "value": 78
      }
    ]

  }


  test(data)
  {
    // console.log(data)
    // console.log("ESTE ES CROQUETAS",data)
    this.single = [...this.single,...[{name:"humedad","value":parseInt(data)}]]
  }



   
  onSelect(event) 
  {
    // console.log(event); 
  }


}
