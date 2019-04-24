import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { DescripcionComponent } from './descripcion/descripcion.component';
import { FichaComponent } from './ficha/ficha.component';
import { DatoTecnicoSquareComponent } from './dato-tecnico-square/dato-tecnico-square.component';
import { ColumnaDepComponent } from './columna-dep/columna-dep.component';
import { FotosComponent } from './fotos/fotos.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [
    DescripcionComponent,
    FichaComponent,
    DatoTecnicoSquareComponent,
    ColumnaDepComponent,
    FotosComponent
  ],
  exports: [
    DescripcionComponent,
    FichaComponent,
    DatoTecnicoSquareComponent,
    ColumnaDepComponent,
    FotosComponent
  ]
})
export class ComponentsModule {}
