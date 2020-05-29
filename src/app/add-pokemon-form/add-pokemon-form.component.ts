import { PokemonItem } from './../../shared/models/pokemon-item.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-pokemon-form',
  templateUrl: './add-pokemon-form.component.html',
  styleUrls: ['./add-pokemon-form.component.scss']
})
export class AddPokemonFormComponent implements OnInit {

  @Input() item: PokemonItem;
  @Output() formSubmit: EventEmitter<PokemonItem> = new EventEmitter<PokemonItem>();
 
  isNewItem: boolean;

  constructor() { }

  ngOnInit(): void { 
  if(this.item) {
    this.isNewItem = false;
  } else {
    this.isNewItem = true;
    this.item = new PokemonItem('', null, null, null);
    }
  }

  onSubmit(form: NgForm) {
    this.formSubmit.emit(form.value);
    form.reset();
  }; 


}
