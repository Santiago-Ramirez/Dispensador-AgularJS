import { TemplateRef, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import  Ws from "@adonisjs/websocket-client"
import { timeMessage, successDialog } from 'src/app/functions/alerts';
import { entradaPrestasAnimation } from 'src/app/animation';

@Component({
  selector: 'app-croquetas',
  templateUrl: './croquetas.component.html',
  styleUrls: ['./croquetas.component.css'],

  animations:[
    entradaPrestasAnimation
  ]

})
export class CroquetasComponent implements OnInit {

  _ws:any;
  chat:any;
  mensaje:string[] = [];
  msg:string;
  public CroquetasLeveeel:number = null;

  @ViewChild("myModalInfo", { static: false }) myModalInfo: TemplateRef<any>;
  @ViewChild("myModalInfo2", { static: false }) myModalInfo2: TemplateRef<any>;


  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    this._ws = Ws("ws://3.18.112.81/", {
      path: "ws"
    });

    this._ws.connect();
    this.chat = this._ws.subscribe("croquetaslvl");
    this.chat = this._ws.subscribe("croquetas");
    this.chat.on("message", (data:any) => {
      // console.log("SI ENTRA")
      JSON.stringify(data)
      this.mensaje.push(data.dato)
      // console.log(data);
      // console.log(this.distance)
      this.CroquetasLeveeel = data.dato;
      JSON.stringify(this.CroquetasLeveeel)
      console.log(this.CroquetasLeveeel)
      // const distance:number = parseInt(data.distance);
      // console.log("Esta es la temperatura",this.distance)
         // if(distance>=13)
    //     {
      //   this.distance  = 'Vacio';
      // }
      // this.distance  = 'Lleno';
    })
    
  }

  valueOne()
  {
    this.msg = "1";
    this.chat.emit("message", parseInt(this.msg));
    this.mensaje.push(this.msg)
    timeMessage('Rellenando croquetas espere...', 3500).then(() => {
      successDialog('Completado').then(() => {

      });
    });
  }

  valueTwo()
  {
    this.msg = "2";
    this.chat.emit("message", parseInt(this.msg));
    this.mensaje.push(this.msg)
    timeMessage('Rellenando croquetas recipiente espere...', 4500).then(() => {
      successDialog('Completado').then(() => {

      });
    });
  }

  valueThree()
  {
    this.msg = "3";
    this.chat.emit("message", parseInt(this.msg));
    this.mensaje.push(this.msg)
    timeMessage('Rellenando croquetas recipiente espere...', 5500).then(() => {
      successDialog('Completado').then(() => {

      });
    });
  }


  valueFour()
  {
    this.msg = "4";
    this.chat.emit("message", parseInt(this.msg));
    this.mensaje.push(this.msg)
    timeMessage('Rellenando croquetas espere...', 6500).then(() => {
      successDialog('Completado').then(() => {

      });
    });
  }

  mostrarModalInfo() {
    this.modalService.open(this.myModalInfo);
  }

  mostrarModalInfo2(content) {
    this.modalService.open(content, { size: 'xl' });
  }


}
