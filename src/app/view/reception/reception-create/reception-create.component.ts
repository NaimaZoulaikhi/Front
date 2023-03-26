import {Component, OnInit} from '@angular/core';
import {Reception} from "../../../controler/model/reception.model";
import {ReceptionService} from "../../../controler/service/reception.service";
import {AppelAchat} from "../../../controler/model/appel-achat";


@Component({
  selector: 'app-reception-create',
  templateUrl: './reception-create.component.html',
  styleUrls: ['./reception-create.component.css']
})
export class ReceptionCreateComponent implements OnInit{
  ngOnInit(): void {
    this.receptionService.reception.appelAchat = new AppelAchat();
  }

  public save(): void {

    this.receptionService.save().subscribe(
      data => {
        if (data == -1){
          alert('faild : reception exist!');
        }else if(data == -2){
          alert('faild :  Appel achat MRIDA')
        }
        else {
          /* this.receptions.push({...this.reception});

         this.fournisseurService.fournisseur.nomPrenom='';
          this.fournisseurService.fournisseur.cne='';
          this.fournisseurService.fournisseur.siege='';*/
          alert('succès : reception ajouté ');
        }
      }
    )
  }

  constructor(private receptionService: ReceptionService) {
    this.receptionService.reception.appelAchat = new AppelAchat();
  }
  get reception(): Reception {
    return this.receptionService.reception;
  }

  set reception(value: Reception) {
    this.receptionService.reception = value;
  }

  get receptions(): Array<Reception> {
    return this.receptionService.receptions;
  }

  set receptions(value: Array<Reception>) {
     this.receptionService.receptions = value;
  }

  get appelAchat(): AppelAchat {
    return this.receptionService.appelAchat;
  }

  set appelAchat(value: AppelAchat) {
    this.receptionService.appelAchat = value;
  }

}
