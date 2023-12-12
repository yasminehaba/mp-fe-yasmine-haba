import { Client } from "./client";

export class Facture {
  id: number | undefined;
  dateF: Date | undefined;
  totale : number | undefined;
  client: Client | undefined;


  constructor(id?: number, dateF?: Date) {
    this.id = id;
    this.dateF = dateF;
    this.totale = 0; // Ajoutez cette ligne pour initialiser totale
    this.client = new Client();  // Ajoutez cette ligne pour initialiser client
  }
}
