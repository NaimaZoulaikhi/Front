import {Component, OnInit} from '@angular/core';
import {ReceptionService} from "../../../controler/service/reception.service";
import {Reception} from "../../../controler/model/reception.model";
import {AppelAchat} from "../../../controler/model/appel-achat";
import {Fournisseur} from "../../../controler/model/fournisseur.model";

@Component({
  selector: 'app-reception-list',
  templateUrl: './reception-list.component.html',
  styleUrls: ['./reception-list.component.css']
})
export class ReceptionListComponent implements OnInit {

  searchText = '';

  ngOnInit(): void {
    this.findAll();
  }

  constructor(private receptionService: ReceptionService) {
  }

  public findAll(): void {
    this.receptionService.findAll().subscribe(
      data => this.receptions = data
    );
  }

  public deleteByRef(reception: Reception, index: number): void {
    console.log('haaaa cne : ' + reception.ref);
    this.receptionService.deleteByRef(reception.ref).subscribe(
      data => {
        if (data > 0) {
          this.receptions.splice(index, 1);

        } else {
          alert("Suppression échoué!")
        }
      }
    )


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
