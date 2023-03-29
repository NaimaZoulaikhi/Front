import { Injectable } from '@angular/core';
import {Fournisseur} from "../model/fournisseur.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {

  private _fournisseur: Fournisseur;
  private _fournisseurs: Array<Fournisseur>;

  private _url = "http://localhost:8080/gestionBudget/v1/fournisseur/";
  constructor(private _http:HttpClient) { }



  getFournisseur(id: number): Observable<Fournisseur> {
    return this.http.get<Fournisseur>(this.url+'id/'+id);
  }



  public findAll():Observable<Array<Fournisseur>>{
    return this.http.get<Array<Fournisseur>>(this.url);
  }



  public save(fournisseur: Fournisseur):Observable<number>{
    return this.http.post<number>(this.url , fournisseur);
  }

  public deleteByCne(cne: string): Observable<number> {
    return this.http.delete<number>(this.url+'cne/'+cne);
  }

  public findByCne(cne: string):Observable<Fournisseur>{
    return this.http.get<Fournisseur>(this.url+'cne/'+cne);

  }

  get fournisseur(): Fournisseur {
    if(this._fournisseur == null){
      this._fournisseur = new Fournisseur();
    }
    return this._fournisseur;
  }

  set fournisseur(value: Fournisseur) {
    this._fournisseur = value;
  }

  get fournisseurs(): Array<Fournisseur> {
    if(this._fournisseurs == null){
      this._fournisseurs = new Array<Fournisseur>();
    }
    return this._fournisseurs;
  }

  set fournisseurs(value: Array<Fournisseur>) {
    this._fournisseurs = value;
  }

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }

  get http(): HttpClient {
    return this._http;
  }

  set http(value: HttpClient) {
    this._http = value;
  }
}
