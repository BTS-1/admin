import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PodcastRoutingModule } from './podcast-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { LibraryComponent } from './library/library.component';

@NgModule({
  imports: [
    CommonModule,
    PodcastRoutingModule,
    SharedModule
  ],
  declarations: [LibraryComponent]
})
export class PodcastModule { }
