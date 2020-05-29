import { DataStorageService } from './../../shared/services/data-storage.service';
import { PokemonItem } from './../../shared/models/pokemon-item.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-three',
  templateUrl: './team-three.component.html',
  styleUrls: ['./team-three.component.scss']
})
export class TeamThreeComponent implements OnInit {

  pokemonItems: PokemonItem[] = new Array<PokemonItem>();

  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit(): void {
  }

  addItem(newItem: PokemonItem) {
    this.pokemonItems.push(newItem);
  }

  deleteItem(item: PokemonItem) {
    let index = this.pokemonItems.indexOf(item);
    this.pokemonItems.splice(index, 1);
  }

  onSaveData() {
    this.dataStorageService.storePokemon(this.pokemonItems);
  }

  onFetchData() {
    this.dataStorageService.fetchPokemon(this.pokemonItems);
  }


}
