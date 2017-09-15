import {NgModule} from '@angular/core';

import {
  MdButtonModule,
  MdMenuModule,
  MdToolbarModule,
  MdIconModule,
  MdCardModule, MdGridListModule, MdSidenavModule, MdTabsModule
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
    MdTabsModule


  ],
  exports: [
    MdButtonModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MdCardModule,
    MdGridListModule,
    MdSidenavModule,
    MdTabsModule
  ]
})
export class MaterialModule {
}
