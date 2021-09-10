import { Component, OnInit, PipeTransform } from '@angular/core';
import { Router } from '@angular/router';
import { AofserviceService } from '../servizio/aofservice.service';



@Component({
  selector: 'app-iscriviti',
  templateUrl: './iscriviti.component.html',
  styleUrls: ['./iscriviti.component.css']
})


export class IscrivitiComponent implements OnInit {

  filterTerm!: string;


  membro:any={
    nome:"",
    presenza:"",
    datapresenza:"",
    tipologia:""
  }


  membri:any = []


  constructor(private router: Router, private aofservice:AofserviceService) { }

  ngOnInit(): void {
    this.aofservice.getInfoEvento().subscribe(resp => this.membri=resp),
    console.log(this.membri)
  }

    savePresenza(){
      this.aofservice.postPresenza(this.membro).subscribe(resp => console.log(resp))
      alert('La tua partecipazione è stata registrata correttamente!')
        }
  }


