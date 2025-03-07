import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts'

import { StateIncidentsRoutingModule } from "./state-incidents-routing.module"
import { StateIncidentsComponent } from "./state-incidents.component"

@NgModule({
  declarations: [StateIncidentsComponent],
  imports: [
    CommonModule,
    StateIncidentsRoutingModule,
    ChartsModule
  ]
})
export class StateIncidentsModule { }

