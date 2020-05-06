import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlidesComponent } from './slides/slides.component';
import { LogoComponent } from './logo/logo.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { StartComponent } from './start/start.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [SlidesComponent, LogoComponent,StartComponent,HeaderComponent],
  exports:[SlidesComponent, LogoComponent,StartComponent, HeaderComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
    
    
  ]
})
export class ComponentsModule { }
