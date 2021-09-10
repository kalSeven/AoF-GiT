import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AofserviceService } from '../servizio/aofservice.service';


@Component({
  selector: 'app-apicalls',
  templateUrl: './apicalls.component.html',
  styleUrls: ['./apicalls.component.css']
})
export class ApicallsComponent implements OnInit {
  event:any = {
    dataevento:"",
    tipoevento:"",
    typeevento:"",
    descriptionevento:""
  }

  events:any= []


  constructor(private router: Router, private aofservice:AofserviceService) { }

  ngOnInit(): void {
  this.aofservice.getGames().subscribe(resp => this.events = resp),
  console.log(this.events)
  }

  saveEvento(){
    this.aofservice.postEvento(this.event).subscribe(resp => console.log(resp))
    alert('Un Evento è stato aggiunto correttamente!')
      }

      rimuoviGioco(item:any){
        this.aofservice.removeGiocata(item.key).subscribe((resp: any) => {
          // success, "resp" has the returned data
        })
        alert('Il Database è stato pulito correttamente!')
      }

}
