import { NgForm } from '@angular/forms';
import { PokemonItem } from './../models/pokemon-item.model';
import { Injectable, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
    constructor(private http: HttpClient) { }

    @Input() pokemonItems: PokemonItem[];
    @Output() formSubmit: EventEmitter<PokemonItem> = new EventEmitter<PokemonItem>();


    storePokemon(pokemonItems: PokemonItem[]) {
        return this.http.put(
            'https://pokemongoteam-f7ff7.firebaseio.com/pokemonItems.json',
            pokemonItems)
            .subscribe(response => {
                console.log(response);
            });
    }

    fetchPokemon(pokemonItems: PokemonItem[]) {
        this.http.get<PokemonItem>(
            'https://pokemongoteam-f7ff7.firebaseio.com/pokemonItems.json',
        ).subscribe(pokemonItems => {
            console.log(pokemonItems);
        })
    }

    onSubmit(form: NgForm) {
        this.formSubmit.emit(form.value);
        form.reset();
    }

}