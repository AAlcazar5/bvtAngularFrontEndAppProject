import { DataStorageService } from './../../shared/services/data-storage.service';
import { PokemonItem } from './../../shared/models/pokemon-item.model';
import { Component, NgModule, Injectable } from '@angular/core';


@Component({
  selector: 'app-central-page',
  templateUrl: './central-page.component.html',
  styleUrls: ['./central-page.component.scss']
})

@Injectable()
export class CentralPageComponent {

  pokemonItems: PokemonItem[] = new Array<PokemonItem>();

  constructor(private dataStorageService: DataStorageService) { }

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
  };


}