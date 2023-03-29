import {Component, OnInit} from '@angular/core';
import {FournisseurService} from "../../../controler/service/fournisseur.service";
import {Fournisseur} from "../../../controler/model/fournisseur.model";
import {debounceTime, Subject} from "rxjs";
import {Reception} from "../../../controler/model/reception.model";

@Component({
  selector: 'app-fournisseur-list',
  templateUrl: './fournisseur-list.component.html',
  styleUrls: ['./fournisseur-list.component.css']
})
export class FournisseurListComponent implements OnInit {



  showFournisseur: boolean;

  constructor(private fournisseurService: FournisseurService) {
  }

  ngOnInit(): void {
    this.findAll();

  }


  public deleteByCne(fournisseur: Fournisseur,index: number): void {
    console.log('haaaa cne : ' + fournisseur.cne);
    this.fournisseurService.deleteByCne(fournisseur.cne).subscribe(
      data => {
        if (data > 0) {
          this.fournisseurs.splice(index, 1);
        } else {
          alert("Suppression échoué!")
        }
      }
    )


  }

  searchText = '';




  public findAll(): void {
    this.fournisseurService.findAll().subscribe(
      data => this.fournisseurs = data
    );
  }

  /*public findByCne(): void {
    this.fournisseurService.findByCne(this.fournisseur.cne).subscribe(
    )
  }*/

  get fournisseur(): Fournisseur {
    return this.fournisseurService.fournisseur;
  }

  set fournisseur(value: Fournisseur) {
    this.fournisseurService.fournisseur = value;
  }

  get fournisseurs(): Array<Fournisseur> {
    return this.fournisseurService.fournisseurs;
  }

  set fournisseurs(value: Array<Fournisseur>) {
    this.fournisseurService.fournisseurs = value;
  }

}
