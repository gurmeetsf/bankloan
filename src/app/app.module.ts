import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';

import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

// Material Module
import {MaterialModule} from './material/material.module';

import { AppComponent } from './app.component';
import {LoanComponent} from './loan/loan.component';
import {LoanListComponent} from './loan/loan-list/loan-list.component';
import {LoanFormComponent} from './loan/loan-form/loan-form.component';
import {reducers} from './loan/state/reducers/reducers';
import {LoansEffects} from './loan/state/effects/LoanEffects';

import {LoanServiceService} from './loan/services/loan-service.service';

@NgModule({
  declarations: [
    AppComponent,
    LoanComponent,
    LoanListComponent,
    LoanFormComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MaterialModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([LoansEffects])
  ],
  providers: [LoanServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
