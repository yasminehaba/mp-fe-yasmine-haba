import { Facture } from "./facture";
import { Produit } from "./produit";

export class DetailsFacture {
  id: number | undefined;
  quantite: number| undefined;
  produit: Produit| undefined;
  facture: Facture| undefined; // Make it optional

  constructor(id?: number, quantite?: number, produit?: Produit, facture?: Facture) {
    this.id = id || undefined;
    this.quantite = quantite;
    this.produit = new Produit();
    this.facture = new Facture(); // No need to initialize it here
  }
}
