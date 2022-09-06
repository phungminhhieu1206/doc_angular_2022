import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-hi',
  template: `
    <h1>Day la component Hi</h1>
    <p>Component Hi: {{ textFromHi }}</p>
    <button>Button Con</button>
  `,
})
export class HiComponent implements OnInit {
  textFromHi: string | undefined;

  constructor(private _dataService: DataService) {}
  ngOnInit(): void {
    console.log('HiComponent Con OnInit Ran');
    this.textFromHi = this._dataService.textFromHello;
  }
}
