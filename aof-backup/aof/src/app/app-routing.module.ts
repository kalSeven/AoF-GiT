import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApicallsComponent } from './apicalls/apicalls.component';
import { DownloadComponent } from './download/download.component';
import { EventiComponent } from './eventi/eventi.component';
import { HomeComponent } from './home/home.component';
import { IscrivitiComponent } from './iscriviti/iscriviti.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path:'home', component: HomeComponent},
  {path: 'eventi', component:EventiComponent},
  {path: 'apicalls', component:ApicallsComponent},
  {path: 'iscriviti', component:IscrivitiComponent},
  {path: 'download', component:DownloadComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
