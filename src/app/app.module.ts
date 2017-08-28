import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { RoutingModule } from './routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdButtonModule,
  MdSidenavModule,
  MdToolbarModule,
  MdIconModule,
  MdMenuModule,
  MdListModule,
  MdCardModule,
  MdInputModule,
  MdDialogModule,
  MdCheckboxModule
 } from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { HeroesComponent, SelectedHeroDialog } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AllHeroesComponent } from './all-heroes/all-heroes.component';
import { HeroService } from './services/hero.service';
import { InMemoryDataService } from './services/in-memory-data.service';
import { MultiTermPipe } from './pipe/multi-term.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent,
    HeroSearchComponent,
    AllHeroesComponent,
    MultiTermPipe,
    SelectedHeroDialog
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    MdButtonModule,
    MdSidenavModule,
    MdToolbarModule,
    MdIconModule,
    MdMenuModule,
    MdListModule,
    MdCardModule,
    MdInputModule,
    MdDialogModule,
    MdCheckboxModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent],
  entryComponents: [SelectedHeroDialog]
})
export class AppModule { }
