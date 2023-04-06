import {Component, OnInit} from '@angular/core';
import {FournisseurService} from "../../../controler/service/fournisseur.service";
import {Fournisseur} from "../../../controler/model/fournisseur.model";
import {debounceTime, Subject} from "rxjs";
import {Reception} from "../../../controler/model/reception.model";
import {FormControl, FormGroup} from "@angular/forms";

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


  public updateFournisseur(){
    this.fournisseurService.updateFournisseur(this.fournisseur).subscribe(
      (data) =>{
          if (data == 1) {
            alert('Fournisseur updated successfully');
            this.fournisseurService.fournisseur.cne = '';
            this.fournisseurService.fournisseur.nomPrenom = '';
            this.fournisseurService.fournisseur.siege = '';
            this.findAll();

          } else if(data == -1) {
            alert("update échoué!");


      }
      }
    )
  }

  public callFournisseur(c: Fournisseur): void {
    this.fournisseur = { ...c };
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

  searchText='';




  public findAll(): void {
    this.fournisseurService.findAll().subscribe(
      data => this.fournisseurs = data
    );
  }



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
