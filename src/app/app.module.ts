import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ProduitsComponent } from './produits/produits.component';
import { AjoutProduitComponent } from './ajout-produit/ajout-produit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FactureService } from './services/facture.service';
import { FactureFormComponent } from './facture/facture-form/facture-form.component';
import { FactureListComponent } from './facture/facture-list/facture-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { DetailsFactureComponent } from './details-facture/details-facture/details-facture.component';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ProduitsComponent,
    AjoutProduitComponent,
    FactureListComponent,
    FactureFormComponent,
    DetailsFactureComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    HttpClientModule,
    BsDatepickerModule.forRoot(),

      BrowserAnimationsModule

  ],
  providers: [FactureService],
  bootstrap: [AppComponent]
})
export class AppModule { }
