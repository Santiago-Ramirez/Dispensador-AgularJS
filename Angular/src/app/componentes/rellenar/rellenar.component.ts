import { Component, OnInit } from '@angular/core';
import { successDialog, timeMessage } from 'src/app/functions/alerts';
import  Ws from "@adonisjs/websocket-client"

@Component({
  selector: 'app-rellenar',
  templateUrl: './rellenar.component.html',
  styleUrls: ['./rellenar.component.css']
})
export class RellenarComponent implements OnInit {
  _ws:any;
  chat:any;
  mensaje:string[] = [];
   msg:string;
  uri = "ws://3.18.112.81/";
  constructor() { }

  ngOnInit(): void {
    this._ws = Ws("ws://3.18.112.81/", {
      path: "ws"
    });

    this._ws.connect();
    this.chat = this._ws.subscribe("auga");
  }


  valueOne()
  {
    
    this.msg = "1";
    this.chat.emit("message", this.msg);
    this.mensaje.push(this.msg)
    timeMessage('Rellenando agua espere...', 3500).then(() => {
      successDialog('Completado').then(() => {
      });
    });

  }

  valueTwo()
  {
    
    this.msg = "2";
    this.chat.emit("message", this.msg);
    this.mensaje.push(this.msg)
    timeMessage('Rellenando agua  espere...', 4500).then(() => {
      successDialog('Completado').then(() => {
      });
    });
  }

  valueThree()
  {
   
    this.msg = "3";
    this.chat.emit("message", this.msg);
    this.mensaje.push(this.msg)
    timeMessage('Rellenando agua  espere...', 5500).then(() => {
      successDialog('Completado').then(() => {
      });
    });
  }


  valueFour()
  {
    
    this.msg = "4";
    this.chat.emit("message", this.msg);
    this.mensaje.push(this.msg)
    timeMessage('Rellenando agua  espere...', 6500).then(() => {
      successDialog('Completado').then(() => {
      });
    });
  }

  valueFive()
  {
   
    this.msg = "4";
    this.chat.emit("message", this.msg);
    this.mensaje.push(this.msg)
    timeMessage('Controlando temperatura espere...', 5500).then(() => {
      successDialog('Completado').then(() => {
      });
    });
  }



}
