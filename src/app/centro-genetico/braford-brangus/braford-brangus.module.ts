import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BrafordBrangusPage } from './braford-brangus.page';

const routes: Routes = [
  {
    path: '',
    component: BrafordBrangusPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BrafordBrangusPage]
})
export class BrafordBrangusPageModule {}
