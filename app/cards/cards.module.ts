import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { CardListComponent } from './card-list/card-list.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [CardListComponent, CardComponent],
  imports: [NativeScriptCommonModule],
  exports: [CardListComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class CardsModule {}
