import {Injectable} from "@angular/core";
import {AppelAchat} from "../model/appel-achat";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Fournisseur} from "../model/fournisseur.model";

@Injectable({
  providedIn: 'root'
})

export class AppelAchatService{

  private _appelAchat: AppelAchat;
  private _appelAchats: Array<AppelAchat>;
  private url = "http://localhost:8080/gestionBudget/v1/appel-achat/"

  constructor(private _http:HttpClient) {
  }

  public findByRef(ref: string):Observable<AppelAchat>{
    return this.http.get<AppelAchat>(this.url+'ref/'+ref);

  }


  get appelAchat(): AppelAchat {
    if(this._appelAchat == null){
      this._appelAchat = new AppelAchat();
    }
    return this._appelAchat;
  }

  set appelAchat(value: AppelAchat) {
    this._appelAchat = value;
  }

  get appelAchats(): Array<AppelAchat> {
    if(this.appelAchats == null){
      this._appelAchats = new Array<AppelAchat>();
    }
    return this._appelAchats;
  }

  set appelAchats(value: Array<AppelAchat>) {
    this._appelAchats = value;
  }

  get http(): HttpClient {
    return this._http;
  }

  set http(value: HttpClient) {
    this._http = value;
  }
}
