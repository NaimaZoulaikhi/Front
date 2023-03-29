import {AppelAchat} from "./appel-achat";
import {ReceptionProduit} from "./reception-produit.model";


export class Reception{

  public id: number;
  public ref: string;
  public dateReception: Date | null;
  public appelAchat: AppelAchat ;

  public receptionProduits= new Array<ReceptionProduit>();

}
