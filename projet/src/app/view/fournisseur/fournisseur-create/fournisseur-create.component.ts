import {Component, OnInit} from '@angular/core';
import {FournisseurService} from "../../../controler/service/fournisseur.service";
import {Fournisseur} from "../../../controler/model/fournisseur.model";

@Component({
  selector: 'app-fournisseur-create',
  templateUrl: './fournisseur-create.component.html',
  styleUrls: ['./fournisseur-create.component.css']
})
export class FournisseurCreateComponent implements OnInit{
  ngOnInit(): void {
  }

  public save(): void {
    this.fournisseurService.save(this.fournisseur).subscribe(
      data => {
        if (data != 1){
          alert('faild : fournisseur déjà exist!')
        }else{
          this.fournisseurs.push({...this.fournisseur});

          this.fournisseurService.fournisseur.nomPrenom='';
          this.fournisseurService.fournisseur.cne='';
          this.fournisseurService.fournisseur.siege='';
          alert('succès : fournisseur ajouté ');
          }
      }
    )
  }
  constructor(private fournisseurService: FournisseurService) {
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
