import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FournisseurCreateComponent } from './view/fournisseur/fournisseur-create/fournisseur-create.component';
import { FournisseurListComponent } from './view/fournisseurs/fournisseur-list/fournisseur-list.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import { ReceptionCreateComponent } from './view/reception/reception-create/reception-create.component';
import { ReceptionListComponent } from './view/receptions/reception-list/reception-list.component';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FournisseurCreateComponent,
    FournisseurListComponent,
    ReceptionCreateComponent,
    ReceptionListComponent,
    SearchPipe,

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        RouterModule.forRoot([
            {path: 'CreateFournisseur' , component:FournisseurCreateComponent},
            {path: 'ListFournisseur' , component:FournisseurListComponent},
            {path: 'CreateReception' , component:ReceptionCreateComponent},
            {path: 'ListReception' , component:ReceptionListComponent},
        ])
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
