import { PokemonItem } from './../../shared/models/pokemon-item.model';
import { Component, OnInit } from '@angular/core';
import { DataStorageService } from './../../shared/services/data-storage.service';

@Component({
  selector: 'app-team-two',
  templateUrl: './team-two.component.html',
  styleUrls: ['./team-two.component.scss']
})
export class TeamTwoComponent implements OnInit {

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
