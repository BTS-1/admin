import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { ListComponent } from './list/list.component';
import { MusicRoutingModule } from './music-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MusicRoutingModule,
    SharedModule
  ],
  declarations: [ListComponent]
})
export class MusicModule { }
