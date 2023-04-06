import {Component, OnInit} from '@angular/core';
import {Reception} from "../../../controler/model/reception.model";
import {ReceptionService} from "../../../controler/service/reception.service";
import {AppelAchat} from "../../../controler/model/appel-achat";
import {ReceptionProduit} from "../../../controler/model/reception-produit.model";
import {ProduitService} from "../../../controler/service/produit.service";
import {Produit} from "../../../controler/model/produit.model";
import {DatePipe} from "@angular/common";


@Component({
  selector: 'app-reception-create',
  templateUrl: './reception-create.component.html',
  styleUrls: ['./reception-create.component.css']
})
export class ReceptionCreateComponent implements OnInit {
  ngOnInit(): void {
    this.receptionService.reception.appelAchat = new AppelAchat();
  }


  public save(): void {

    this.receptionService.save(this.reception).subscribe(
      data => {
        if (data == -1) {
          alert('faild : reception exist!');
        } else if (data == -2) {
          alert('faild :  Appel achat n exit pas')
        } else {
          this.receptions.push({...this.reception});

          this.receptionService.reception.ref = '';
          this.receptionService.reception.dateReception = null;
          this.receptionService.reception.appelAchat.ref = '';
          alert('succès : reception ajouté ');
        }
      }
    )
  }

  constructor(private receptionService: ReceptionService, private produitService: ProduitService) {
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

  get receptionProduit(): ReceptionProduit {
    if (this.receptionProduit == null) {
      return this.receptionService.receptionProduit = new ReceptionProduit();
    }
    return this.receptionService.receptionProduit;
  }

  set receptionProduit(value: ReceptionProduit) {
    this.receptionService.receptionProduit = value;
  }

  get produit(): Produit {

    return this.produitService.produit;
  }

  set produit(value: Produit) {
    this.produitService.produit = value;
  }

  get produits(): Array<Produit> {

    return this.produitService.produits;
  }

  set produits(value: Array<Produit>) {
    this.produitService.produits = value;
  }

}
