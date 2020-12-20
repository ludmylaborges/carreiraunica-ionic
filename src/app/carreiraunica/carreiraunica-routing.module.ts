import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarreiraunicaPage } from './carreiraunica.page';

const routes: Routes = [
  {
    path: '',
    component: CarreiraunicaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarreiraunicaPageRoutingModule {}
