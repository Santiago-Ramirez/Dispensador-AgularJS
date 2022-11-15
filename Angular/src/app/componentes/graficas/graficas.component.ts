import { mostrarPrestasAnimation } from 'src/app/animation';
import { TemplateRef, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import  Ws from "@adonisjs/websocket-client"

@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.css'],
  animations:[
    mostrarPrestasAnimation
  ]
})
export class GraficasComponent implements OnInit 
{

  _ws:any;
  chat:any;
  mensaje:string[] = [];
  msg:string;
  uri = "ws://3.18.112.81/";
  public value:number = null;
  constructor() { }

  ngOnInit(): void {
    this.loadData()

    this._ws = Ws(this.uri, {
      path: "ws"
    });

    this._ws.connect();
    this.chat = this._ws.subscribe("agualvl");

      
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

  //////////////////////////////////////////////////////////////

  loadData(){
  
    this.single =  [
      {
        "name": "26/04/21",
        "value": this.value
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
    this.single = [...this.single,...[{name:"humedad","value":parseInt(data)}]]
    
  }



   
  onSelect(event) 
  {
    console.log(event); 
  }

  refrescar()
  {
    // console.log("refrescar")
    this.chat.on("message", (data:any) => {
      // console.log("SI ENTRA")
      parseInt(data)
      this.mensaje.push(data)
      // console.log(data);
      // console.log(this.distance)
      this.value = data;
      // const distance:number = parseInt(data.distance);
      // console.log("Esta es la temperatura",this.distance)
         // if(distance>=13){
      //   this.distance  = 'Vacio';
      // }
      // this.distance  = 'Lleno';
    })
  } 
}
