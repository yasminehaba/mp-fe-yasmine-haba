import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DetailsFacture } from 'src/app/model/detailsFacture';
import { DetailsFactureRequest } from 'src/app/model/detailsFactureRequest';
import { Facture } from 'src/app/model/facture';
import { Produit } from 'src/app/model/produit';

import { DetailsFactureService } from 'src/app/services/details-facture.service';
import { FactureService } from 'src/app/services/facture.service';
import { ProduitsService } from 'src/app/services/produits.service';

@Component({
  selector: 'app-details-facture',
  templateUrl: './details-facture.component.html',
  styleUrls: ['./details-facture.component.css']
})
export class DetailsFactureComponent implements OnInit {
  produits: Produit[] = [];
  factures: Facture[] = [];
  quantite: number | null = null;
  selectedFactureId: number | null = null;
  selectedProduitId: number | null = null;
  detailsFacture: FormGroup;
  detailsFactures: DetailsFacture[]= [];
  constructor(private formBuilder: FormBuilder, private dfactureService: DetailsFactureService,private factureService: FactureService, private produitService:ProduitsService) {
    this.detailsFacture = this.formBuilder.group({
      factureId: [null, Validators.required],
      quantite: [null, Validators.required],
      produitId: [null, Validators.required],
    });
  }
  ngOnInit(): void {
    this.consulterProduits();
    this.loadFactures();
    this.getAllDetailsFactures();  // Chargez également les détails de la facture
  }
  onSubmit() {
    if (this.selectedFactureId !== null && this.selectedProduitId !== null && this.quantite !== null) {
      const detailsFactureRequest: DetailsFactureRequest = {
        factureId: this.selectedFactureId,
        quantite: this.quantite,
        produitId: this.selectedProduitId
      };

      this.dfactureService.addDetailsFacture(detailsFactureRequest).subscribe(
        response => {
          console.log('Détails de facture ajoutés avec succès', response);
          this.selectedFactureId = null;
          this.selectedProduitId = null;
          this.quantite = null;
        },
        error => {
          console.error('Erreur lors de l\'ajout des détails de facture', error);
        }
      );
    } else {
      console.warn('Sélection de facture, de produit ou quantité manquante. Impossible d\'ajouter les détails de facture.');
    }
  }




  getAllDetailsFactures() {
    this.dfactureService.getAllDetailsFactures().subscribe(
      data => {
        this.detailsFactures = data;
        console.log('Détails de factures récupérés avec succès', this.detailsFactures);
      },
      error => {
        console.error('Erreur lors de la récupération des détails de factures', error);
      }
    );
  }
  deleteDetailsFacture(id: number | undefined) {
    if (id) {
      this.dfactureService.deleteDetailsFacture(id).subscribe(
        () => {
          console.log('Détails de facture supprimés avec succès.');
          // Recharger la liste après la suppression
          this.getAllDetailsFactures();
        },
        error => {
          console.error('Erreur lors de la suppression des détails de facture:', error);
        }
      );
    }
  }


   consulterProduits() {
    console.log("Récupérer la liste des produits");
    //Appeler la méthode 'getProduits' du service pour récupérer les données du JSON
    this.produitService.getProduits()
    .subscribe(
      {
        //En cas de succès
        next: data=> {
          console.log("Succès GET");
          this.produits=data;
        },

        //En cas d'erreur
        error: err=> {
          console.log("Erreur GET");
        }
      }
    )
  }

  loadFactures() {
    this.factureService.getAllFactures().subscribe(
      data => {
        this.factures = data;
      },
      error => {
        console.error('Error fetching clients:', error);
      }
    );
  }



}

 // updateDetailsFacture() {
  //   if (this.detailsFacture && this.detailsFacture.id !== undefined) {
  //     this.dfactureService.updateDetailsFacture(this.detailsFacture.id, this.updatedDetailsFacture).subscribe(
  //       data => {
  //         console.log('Détails de facture mis à jour avec succès:', data);
  //         // Rechargez la liste après la mise à jour
  //         this.getAllDetailsFactures();
  //       },
  //       error => {
  //         console.error('Erreur lors de la mise à jour des détails de facture:', error);
  //       }
  //     );
  //   } else {
  //     console.error('detailsFacture ou detailsFacture.id est undefined ou null.');
  //   }
  // }
