// facture-form.component.ts

import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Client } from "src/app/model/client";
import { Facture } from "src/app/model/facture";
import { FactureService } from "src/app/services/facture.service";
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-facture-form',
  templateUrl: './facture-form.component.html',
  styleUrls: ['./facture-form.component.css']
})

export class FactureFormComponent implements OnInit {
  factureForm: FormGroup;
  clients: Client[] = [];
  bsConfig: Partial<BsDatepickerConfig>; // Configuration pour le datepicker

  constructor(private factureService: FactureService, private router: Router, private fb: FormBuilder) {
    this.bsConfig = {
      dateInputFormat: 'YYYY-MM-DD', // Format de date que votre backend peut comprendre
      containerClass: 'theme-default',
    };

    this.factureForm = this.fb.group({
      dateF: [new Date(), Validators.required],
      client: [null, Validators.required],
      // Ajoutez d'autres contrôles si nécessaire
    });
  }

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients() {
    this.factureService.getAllClients().subscribe(
      (data) => {
        this.clients = data;
      },
      (error) => {
        console.error('Error fetching clients:', error);
      }
    );
  }

  saveFacture() {
    if (this.factureForm.valid) {
      const selectedClientId = this.factureForm.value.client;

      if (selectedClientId) {
        const factureData: Facture = {
          id: undefined,
          dateF: this.factureForm.value.dateF,
          client: { id: selectedClientId } as Client,
          totale: 0,
        };

        this.factureService.saveFacture(factureData).subscribe(
          savedFacture => {
            console.log('Facture enregistrée avec succès:', savedFacture);

          },
          (error: HttpErrorResponse) => {
            console.error('Erreur lors de l\'enregistrement de la facture:', error);
          }
        );
      } else {
        console.error('Sélectionnez un client valide.');
      }
    } else {
      console.error('Formulaire invalide. Veuillez remplir tous les champs.');
    }
  }
}
