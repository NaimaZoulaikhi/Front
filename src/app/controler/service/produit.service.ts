import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Produit} from "../model/produit.model";
import {Observable} from "rxjs";
import {Reception} from "../model/reception.model";

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  get http(): HttpClient {
    return this._http;
  }

  set http(value: HttpClient) {
    this._http = value;
  }

  private _produit: Produit;
  private _produits: Array<Produit>;

  private _url="http://localhost:8080/gestionBudget/v1/produit"

  constructor(private _http:HttpClient) { }

  public findAll(): Observable<Array<Produit>> {
    return this._http.get<Array<Produit>>(this.url);
  }

  get produit(): Produit {
    if(this._produit == null){
      this._produit = new Produit();
    }
    return this._produit;
  }

  set produit(value: Produit) {
    this._produit = value;
  }

  get produits(): Array<Produit> {
    if(this._produits == null){
      this._produits = new Array<Produit>();
    }
    return this._produits;
  }

  set produits(value: Array<Produit>) {
    this._produits = value;
  }

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }
}
