import {Component, OnInit} from '@angular/core';
import {ReceptionService} from "../../../controler/service/reception.service";
import {ActivatedRoute} from "@angular/router";
import {Reception} from "../../../controler/model/reception.model";
import {FormControl, FormControlState, FormGroup} from "@angular/forms";
import {AppelAchat} from "../../../controler/model/appel-achat";



@Component({
  selector: 'app-reception-edit',
  templateUrl: './reception-edit.component.html',
  styleUrls: ['./reception-edit.component.css']
})
export class ReceptionEditComponent implements OnInit {

  id: any;

  result: Reception;
  dateReception: Date | FormControlState<any> | null=null ;

  editReception= new FormGroup({
    ref: new FormControl<string | null>(''),
    dateReception: new FormControl<Date | null >(this.dateReception),
    refAppelAchat: new FormControl<string | null>('')
  });

  ngOnInit(): void {
    this.router.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.warn('id: ', this.id);
    });

    this.receptionService.findById(this.id).subscribe(( data =>{
      this.result=data;
      console.log(this.result);

       this.editReception= new FormGroup({
        ref: new FormControl(this.result.ref),
        dateReception: new FormControl(this.result.dateReception),
        refAppelAchat: new FormControl(this.result.appelAchat.ref),
      })
    }))

  }

  public collection(){
    console.warn(this.editReception.value);
  }

  constructor(private receptionService: ReceptionService, private router: ActivatedRoute) {
  }

  public updateReception(){
    this.receptionService.updateReception(this.reception,this.id).subscribe(
      data =>{
        if (data == 1) {
          alert('Reception updated successfully');
          this.receptionService.reception.ref = '';
          this.receptionService.reception.dateReception = null;
          this.receptionService.reception.appelAchat.ref = '';

        } else if(data == -1) {
          alert("update échoué!");


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
