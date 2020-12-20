import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarreiraunicaPageRoutingModule } from './carreiraunica-routing.module';

import { CarreiraunicaPage } from './carreiraunica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarreiraunicaPageRoutingModule
  ],
  declarations: [CarreiraunicaPage]
})
export class CarreiraunicaPageModule {}
