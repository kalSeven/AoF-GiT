import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AofserviceService {

  private urlApis = "https://aofapp-a08ec-default-rtdb.firebaseio.com/"

  constructor(private http: HttpClient) { }

  getGames() {
    return this.http.get(this.urlApis + '.json')
  }

  getEvents() {
    return this.http.get(this.urlApis + '.json')
  }

  postGiocate(giocata: any) {
    return this.http.post(this.urlApis + '.json', giocata)
  }

  postEvento(evento: any) {
    return this.http.post(this.urlApis + '.json', evento)
  }

  removeGiocata(key:any): Observable<any> {
    return this.http.delete(this.urlApis + '.json');
  }


  getInfoEvento(){
    return this.http.get(this.urlApis + '.json')
  }
  getInfoGiocata(){
    return this.http.get(this.urlApis + '.json')
  }
  postPresenza(presenza: any) {
    return this.http.post(this.urlApis + '.json', presenza)
  }

}

