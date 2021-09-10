import { KeyValue } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AofserviceService } from '../servizio/aofservice.service';






@Component({
  selector: 'app-eventi',
  templateUrl: './eventi.component.html',
  styleUrls: ['./eventi.component.css']
})



export class EventiComponent implements OnInit {


  event:any = {
    dataevento:"",
    tipoevento:"",
    typeevento:"",
    descriptionevento:""
  }

  events:any= []


  reverseKeyOrder = (a: KeyValue<number,string>, b: KeyValue<number,string>): number => {
    return a.key > b.key ? -1 : (b.key > a.key ? 1 : 0);
  }

  constructor(private router: Router, private aofservice:AofserviceService) { }

  ngOnInit(): void {
    this.aofservice.getEvents().subscribe(resp => this.events = resp),
    console.log(this.events)

    }

  }
