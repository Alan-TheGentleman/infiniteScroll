import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LazyLoadedRoutingModule } from './lazy-loaded-routing.module';
import { LazyComponent } from './lazy/lazy.component';
import { InfinitScrollerComponent } from './test/infinit-scroller/infinit-scroller.component';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [LazyComponent, InfinitScrollerComponent],
  imports: [
    CommonModule,
    LazyLoadedRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollingModule
  ],
})
export class LazyLoadedModule {}
