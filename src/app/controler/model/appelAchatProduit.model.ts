import {AppelAchat} from "./appel-achat";
import {ProduitModel} from "./produit.model";

export class AppelAchatProduitModel {
  public id: number;
  public ref: string;
  public quantite: string;
  public quantiteReception: string;
  public quantiteLivraison: string;

  public appelAchat: AppelAchat;

  public produit: ProduitModel;


}
