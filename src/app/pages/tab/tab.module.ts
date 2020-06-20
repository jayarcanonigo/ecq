import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabPageRoutingModule } from './tab-routing.module';

import { TabPage } from './tab.page';
import { MaterialModule } from '../../material.module';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabPageRoutingModule,
    MaterialModule,
    ComponentsModule
  ],
  declarations: [TabPage]
})
export class TabPageModule {}
