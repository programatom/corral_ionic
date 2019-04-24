import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'toro-data', loadChildren: './centro-genetico/toro-data/toro-data.module#ToroDataPageModule' },
  { path: 'toro-select', loadChildren: './centro-genetico/toro-select/toro-select.module#ToroSelectPageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
