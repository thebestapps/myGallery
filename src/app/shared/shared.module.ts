import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from '../common/components/header/header.component';
import { FilterPipe } from './pipe/filter.pipe';

@NgModule({
  declarations: [HeaderComponent,FilterPipe],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [HeaderComponent,FilterPipe],
})
export class SharedModule {}
