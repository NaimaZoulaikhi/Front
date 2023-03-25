import {CategorieAppelAchat} from "./categorie-appel-achat";

class AppelAchatProduit {
}


export class AppelAchat {

  public id: number;

  public dateAppelAchat: Date;

  public ref: string;

  public total: number;

  public categorieAppelAchat: CategorieAppelAchat;

  public appelAchatProduits: Array<AppelAchatProduit>;


}
