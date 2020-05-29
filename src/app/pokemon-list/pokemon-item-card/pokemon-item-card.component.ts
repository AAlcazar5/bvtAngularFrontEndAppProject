import { PokemonItem } from './../../../shared/models/pokemon-item.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-pokemon-item-card',
  templateUrl: './pokemon-item-card.component.html',
  styleUrls: ['./pokemon-item-card.component.scss']
})
export class PokemonItemCardComponent implements OnInit {

  @Input() item: PokemonItem;
  @Output() xButtonClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() cardClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onXButtonClick() {
    this.xButtonClick.emit();
  }

  onCardClick() {
    this.cardClick.emit();
  }




}
