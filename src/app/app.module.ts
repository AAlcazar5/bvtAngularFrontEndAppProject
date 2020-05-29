import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CentralPageComponent } from './central-page/central-page.component';
import { AddPokemonFormComponent } from './add-pokemon-form/add-pokemon-form.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonItemCardComponent } from './pokemon-list/pokemon-item-card/pokemon-item-card.component';

import { MatDialogModule } from '@angular/material/dialog';
import { EditItemModalComponent } from './edit-item-modal/edit-item-modal.component';
import { TeamTwoComponent } from './team-two/team-two.component';
import { TeamThreeComponent } from './team-three/team-three.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CentralPageComponent,
    AddPokemonFormComponent,
    PokemonListComponent,
    PokemonItemCardComponent,
    EditItemModalComponent,
    TeamTwoComponent,
    TeamThreeComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule
  ],
  providers: [],
  entryComponents: [EditItemModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }