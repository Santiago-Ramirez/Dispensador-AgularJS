import { TemplateRef, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import  Ws from "@adonisjs/websocket-client"
import { timeMessage, successDialog } from 'src/app/functions/alerts';
import { entrada2PrestasAnimation } from 'src/app/animation';
import { parseJsonText } from 'typescript';

@Component({
  selector: 'app-agua',
  templateUrl: './agua.component.html',
  styleUrls: ['./agua.component.css'],
  animations: [
    entrada2PrestasAnimation
  ]
})

export class AguaComponent implements OnInit {

  @ViewChild("myModalInfo", { static: false }) myModalInfo: TemplateRef<any>;
  @ViewChild("myModalInfo2", { static: false }) myModalInfo2: TemplateRef<any>;
  socket: any;
  constructor(private modalService: NgbModal) { 
  }
  _ws:any;
  chat:any;
  mensaje:string[] = [];
   msg:string;
  uri = "ws://3.18.112.81/";

  public distance:number = null;
  public agualvl:number = null;

  ngOnInit(): void {
    this._ws = Ws(this.uri, {
      path: "ws"
    });

    this._ws.connect();
    this.chat = this._ws.subscribe("temperaturalvl");
    this.chat.on("message", (data:any) => {
      // console.log("SI ENTRA")
      JSON.stringify(data)
      this.mensaje.push(data.dato)
      // console.log(data);
      // console.log(this.distance)
      this.distance = data.dato;
      JSON.stringify(this.distance)
      // const distance:number = parseInt(data.distance);
      // console.log("Esta es la temperatura",this.distance)
         // if(distance>=13)
    //     {
      //   this.distance  = 'Vacio';
      // }
      // this.distance  = 'Lleno';
    })
    this.chat = this._ws.subscribe("agualvl");
    this.chat.on("message", (data:any) => {
      // console.log("SI ENTRA")
      JSON.stringify(data)
      this.mensaje.push(data)
      // console.log(data);
      // console.log(this.agualvl)
      this.agualvl = data.dato;
      JSON.stringify(this.agualvl)
      // const distance:number = parseInt(data.distance);
      // console.log("Esta es la distancia",this.distance)
    })  
  }

  mostrarModalInfo(content) {
    this.modalService.open(content, { size: 'xl' });
  
  }


  

  mostrarModalInfo2(content) 
  {
    //PENDIENTE DE TERMINAR   
      this.modalService.open(content, { size: 'xl' });
  }


  

}
