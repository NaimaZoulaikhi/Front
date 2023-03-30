import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FournisseurCreateComponent } from './view/fournisseur/fournisseur-create/fournisseur-create.component';
import { FournisseurListComponent } from './view/fournisseurs/fournisseur-list/fournisseur-list.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import { ReceptionCreateComponent } from './view/reception/reception-create/reception-create.component';
import { ReceptionListComponent } from './view/receptions/reception-list/reception-list.component';
import { SearchPipe } from './search.pipe';
import { FournisseurEditComponent } from './view/fournisseur/fournisseur-edit/fournisseur-edit.component';
import { ReceptionEditComponent } from './view/reception/reception-edit/reception-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    FournisseurCreateComponent,
    FournisseurListComponent,
    ReceptionCreateComponent,
    ReceptionListComponent,
    SearchPipe,
    FournisseurEditComponent,
    ReceptionEditComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'CreateFournisseur', component: FournisseurCreateComponent},
      {path: 'ListFournisseur', component: FournisseurListComponent},
      {path: 'CreateReception', component: ReceptionCreateComponent},
      {path: 'ListReception', component: ReceptionListComponent},
      {path: 'update/:id', component: FournisseurEditComponent},
      {
        component:ReceptionEditComponent,
        path:'updateR/:id'
      },
    ]),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
