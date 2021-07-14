import { Component, OnInit } from '@angular/core';
import { ItemsDataSource } from '../data-source/data-source.datasource';

@Component({
  selector: 'app-infinit-scroller',
  templateUrl: './infinit-scroller.component.html',
  styleUrls: ['./infinit-scroller.component.scss'],
})
export class InfinitScrollerComponent {
  //Our own ItemsDataSource
  dataSource: ItemsDataSource;

  constructor() {
    this.dataSource = new ItemsDataSource();
  }
}
