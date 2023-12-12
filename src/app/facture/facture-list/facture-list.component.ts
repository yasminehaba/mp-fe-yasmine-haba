import { Component, OnInit } from '@angular/core';
import { Facture } from 'src/app/model/facture';
import { FactureService } from 'src/app/services/facture.service';

@Component({
  selector: 'app-facture-list',
  templateUrl: './facture-list.component.html',
  styleUrls: ['./facture-list.component.css']
})
export class FactureListComponent implements OnInit {
  factures: Facture[] = [];

  constructor(private factureService: FactureService) {
    console.log('FactureListComponent constructor');
  }

  ngOnInit(): void {
    console.log('FactureListComponent ngOnInit');
    this.loadFactures();
  }

  loadFactures() {
    console.log('FactureListComponent loadFactures');
    this.factureService.getAllFactures().subscribe(
      (data) => {
        this.factures = data;
      },
      (error) => {
        console.error('Error fetching factures:', error);
      }
    );
  }

  deleteFacture(id: number) {
    console.log(`Trying to delete facture with ID: ${id}`);
    this.factureService.deleteFacture(id).subscribe(
      () => {
        console.log('Facture deleted successfully');
        // Mettez à jour la liste des factures après la suppression
        this.loadFactures();
      },
      (error) => {
        console.error('Error deleting facture:', error);
      }
    );
  }
}
