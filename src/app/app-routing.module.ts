import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FournisseurEditComponent} from "./view/fournisseur/fournisseur-edit/fournisseur-edit.component";
import {FournisseurCreateComponent} from "./view/fournisseur/fournisseur-create/fournisseur-create.component";
import {FournisseurListComponent} from "./view/fournisseurs/fournisseur-list/fournisseur-list.component";
import {ReceptionCreateComponent} from "./view/reception/reception-create/reception-create.component";
import {ReceptionListComponent} from "./view/receptions/reception-list/reception-list.component";
import {ReceptionEditComponent} from "./view/reception/reception-edit/reception-edit.component";

const routes: Routes = [
  {
    component:FournisseurEditComponent,
    path:'update/:id'
  },
  {
    component:ReceptionEditComponent,
    path:'updateR/:id'
  },

  {path: 'CreateFournisseur' , component:FournisseurCreateComponent},
  {path: 'ListFournisseur' , component:FournisseurListComponent},
  {path: 'CreateReception' , component:ReceptionCreateComponent},
  {path: 'ListReception' , component:ReceptionListComponent},

]

@NgModule({
  imports: [RouterModule.forRoot([])],
  exports: [RouterModule]
})
export class AppRoutingModule { }


