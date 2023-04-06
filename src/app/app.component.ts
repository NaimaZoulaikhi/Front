import { Component } from '@angular/core';
import {FournisseurService} from "./controler/service/fournisseur.service";
import {ReceptionService} from "./controler/service/reception.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projet';

  constructor(private fournisseurService: FournisseurService, private receptionService:ReceptionService) {
  }

  public vider1(): void{
    this.fournisseurService.fournisseur.nomPrenom='';
    this.fournisseurService.fournisseur.cne='';
    this.fournisseurService.fournisseur.siege='';
  }

  public vider2(): void{
    this.receptionService.reception.ref='';
    this.receptionService.reception.dateReception=null;
    this.receptionService.reception.appelAchat.ref='';
  }
}
