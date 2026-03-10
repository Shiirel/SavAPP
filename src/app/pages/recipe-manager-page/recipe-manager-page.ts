import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Recette } from '../../models/recette.model';
import { RecetteService } from '../../services/recette.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-recipe-manager-page',
  imports: [CommonModule, FormsModule],
  templateUrl: './recipe-manager-page.html',
  styleUrl: './recipe-manager-page.css',
})
export class RecipeManagerPage {
  public recettes: Recette[] = [];
// Objet temporaire pour l'ajout ou la modification
  public recetteSelectionne: Recette | null = null;
  constructor(private recetteService: RecetteService) {}
  ngOnInit(): void {
    this.getRecette();
  }
  getRecette(): void {
    this.recetteService.getRecettes().subscribe({
      next: (data) => this.recettes = data,
      error: (err) => console.error("Erreur API : ", err)
    });
  }
//   /** Préparer l'ajout d'un nouvel ingrédient (ligne vide) */
//   creerNouvelleRecette(): void {
//     this.recetteSelectionne = {
//       id: 0, titre: '', description: '', surgraissage: 0, apportEnEau: 0,
//       avecSoude: true, concentrationAlcali: 0, qteAlcali: 0,
//     };
//   }
//   /** Lancer l'édition d'une ligne existante */
//   editerRecette(item: Recette): void {
// // On crée une copie pour éviter de modifier le tableau original avant validation
//     this.recetteSelectionne = { ...item };
//   }
//   /** Enregistrer (Ajout ou Update) */
//   saveRecette(): void {
//     if (!this.recetteSelectionne) return;
//     const action = this.recetteSelectionne.id === 0
//       ? this.recetteSelectionne.addRecette(this.recetteSelectionne)
//       : this.recetteService.updateRecette(this.recetteSelectionne);
//     action.subscribe({
//       next: () => {
//         this.recetteSelectionne = null;
//         this.getRecette(); // Rafraîchir la liste
//       }
//     });
//   }
//   /** Supprimer un ingrédient */
//   deleteRecette(id: number): void {
//     if (confirm("Supprimer cet ingrédient ?")) {
//       this.recetteService.deleteIngredient(id).subscribe(() =>
//         this.getRecettes());
//     }
//   }


}
