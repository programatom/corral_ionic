import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ToroDataPage } from './toro-data.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { DataEntryModalPageModule } from '../data-entry-modal/data-entry-modal.module';

const routes: Routes = [
  {
    path: '',
    component: ToroDataPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    DataEntryModalPageModule
  ],
  declarations: [ToroDataPage]
})
export class ToroDataPageModule {}
