import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntryLazyComponent } from './entry-lazy/entry-lazy.component';

const routes: Routes = [{
  path: '',
  component: EntryLazyComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyLoadedRoutingModule { }
