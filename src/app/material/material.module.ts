import {NgModule} from '@angular/core';

import {
  MdButtonModule,
  MdMenuModule,
  MdToolbarModule,
  MdIconModule,
  MdCardModule,
  MdGridListModule,
  MdSidenavModule,
  MdTabsModule,
  MdTableModule
} from '@angular/material';

@NgModule({
  imports: [
    MdButtonModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MdCardModule,
    MdGridListModule,
    MdSidenavModule,
    MdTabsModule,
    MdTableModule


  ],
  exports: [
    MdButtonModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MdCardModule,
    MdGridListModule,
    MdSidenavModule,
    MdTabsModule,
    MdTableModule
  ]
})
export class MaterialModule {
}
