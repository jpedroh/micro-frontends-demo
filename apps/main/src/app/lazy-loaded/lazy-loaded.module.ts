import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyLoadedRoutingModule } from './lazy-loaded-routing.module';
import { EntryLazyComponent } from './entry-lazy/entry-lazy.component';

@NgModule({
  declarations: [EntryLazyComponent],
  imports: [
    CommonModule,
    LazyLoadedRoutingModule
  ]
})
export class LazyLoadedModule { }
