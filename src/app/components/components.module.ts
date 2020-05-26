import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlidesComponent } from './slides/slides.component';
import { LogoComponent } from './logo/logo.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { StartComponent } from './start/start.component';
import { HeaderComponent } from './header/header.component';
import { TimeScheduleComponent } from './time-schedule/time-schedule.component';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [SlidesComponent, LogoComponent,StartComponent,HeaderComponent, TimeScheduleComponent],
  exports:[SlidesComponent, LogoComponent,StartComponent, HeaderComponent, TimeScheduleComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule ,
    MaterialModule  
  ]
})
export class ComponentsModule { }
