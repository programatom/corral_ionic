import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'remates',
        children: [
          {
            path: '',
            loadChildren: '../remates/remates.module#RematesPageModule'
          }
        ]
      },
      {
        path: 'centro-genetico',
        children: [
          {
            path: '',
            loadChildren: '../centro-genetico/centro-genetico.module#CentroGeneticoPageModule'
          },
          {
            path: 'select',
            loadChildren: '../centro-genetico/braford-brangus/braford-brangus.module#BrafordBrangusPageModule'
          }
        ]
      },
      {
        path: 'contacto',
        children: [
          {
            path: '',
            loadChildren: '../contacto/contacto.module#ContactoPageModule'
          }
        ]
      },
      {
        path: 'nosotros',
        children: [
          {
            path: '',
            loadChildren: '../nosotros/nosotros.module#NosotrosPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/remates',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/remates',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
