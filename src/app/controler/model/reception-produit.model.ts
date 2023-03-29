import {Reception} from "./reception.model";
import {Produit} from "./produit.model";
import {Magasin} from "./magasin.model";

export class ReceptionProduit {

  public id: number;
  public qteReceptionee: number;
  public qteLivree: number;
  public qteAvoir: number;
  public reception: Reception;
  public produit: Produit;
  public magasin: Magasin;
}
