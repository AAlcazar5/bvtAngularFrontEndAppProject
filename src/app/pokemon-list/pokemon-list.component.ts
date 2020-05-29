import { EditItemModalComponent } from './../edit-item-modal/edit-item-modal.component';
import { PokemonItem } from './../../shared/models/pokemon-item.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit { 

  pokemonChanged = new Subject<PokemonItem[]>();
 
  @Input() pokemonItems: PokemonItem[];
  @Output() delete: EventEmitter<PokemonItem> = new EventEmitter<PokemonItem>();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onDelete(item: PokemonItem) {
    this.delete.emit();
  }

  onCardClicked(item: PokemonItem) {
    // shows the edit pop up
    const dialogRef = this.dialog.open(EditItemModalComponent, {
      width: '580px',
      data: item
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // result is the updated pokemon item
        this.pokemonItems[this.pokemonItems.indexOf(item)] = result;
      }
    });
  }

  setPokemon(pokemonItems: PokemonItem[]) {
    this.pokemonItems = pokemonItems; 
    this.pokemonChanged.next(this.pokemonItems.slice());
  }

  getPokemon() {
    return this.pokemonItems.slice();
  }

} 
