import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FournisseurService} from "../../../controler/service/fournisseur.service";
import {Fournisseur} from "../../../controler/model/fournisseur.model";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-fournisseur-edit',
  templateUrl: './fournisseur-edit.component.html',
  styleUrls: ['./fournisseur-edit.component.css']
})
export class FournisseurEditComponent implements OnInit {


  id: any;

  editFournisseur = new FormGroup({
    cne: new FormControl(''),
    nomPrenom: new FormControl(''),
    siege: new FormControl(''),
  })

  result: Fournisseur;
  ngOnInit(): void {


    this.router.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.warn('id: ', this.id);
    });

    this.fournisseurService.findById(this.id).subscribe(( data =>{
      this.result=data;
      console.log(this.result);

      this.editFournisseur = new FormGroup({
        cne: new FormControl(this.result.cne),
        nomPrenom: new FormControl(this.result.nomPrenom),
        siege: new FormControl(this.result.siege),
      })
    }))
  }
  public collection(){
    console.warn(this.editFournisseur.value);
  }

  constructor(private fournisseurService: FournisseurService, private router: ActivatedRoute) {

  }

  public updateFournisseur(){
    this.fournisseurService.updateFournisseur(this.fournisseur,this.id).subscribe(
      data =>{
          if (data == 1) {
            alert('Fournisseur updated successfully');
            this.fournisseurService.fournisseur.cne = '';
            this.fournisseurService.fournisseur.nomPrenom = '';
            this.fournisseurService.fournisseur.siege = '';

          } else if(data == -1) {
            alert("update échoué!");


      }
      }
    )
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
