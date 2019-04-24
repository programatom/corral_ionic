import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DataEntryModalPage } from './data-entry-modal.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [DataEntryModalPage],
  entryComponents:[DataEntryModalPage]
})
export class DataEntryModalPageModule {}
