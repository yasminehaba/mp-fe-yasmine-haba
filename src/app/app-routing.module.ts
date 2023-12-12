import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ProduitsComponent } from './produits/produits.component';
import { AjoutProduitComponent } from './ajout-produit/ajout-produit.component';
import { FactureListComponent } from './facture/facture-list/facture-list.component';
import { FactureFormComponent } from './facture/facture-form/facture-form.component';
import { DetailsFactureComponent } from './details-facture/details-facture/details-facture.component';

const routes: Routes = [
  {  path:"accueil", component: AccueilComponent },
  {  path:"produits", component: ProduitsComponent },
  {  path:"ajouterProduit", component: AjoutProduitComponent },
  {path:"facture-list", component: FactureListComponent},
  {path:"facture-form", component: FactureFormComponent},
  {path:"details-facture",component: DetailsFactureComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
