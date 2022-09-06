import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-hello',
  template: `
    <h1>Day la component hello</h1>
    <p>Component Hello: {{ text }}</p>
    <button (click)="onButtonClicked()">Button Con</button>
  `,
})
export class HelloComponent implements OnInit, OnChanges {
  @Input() text: string | undefined;
  @Output() buttonClicked: EventEmitter<string> = new EventEmitter<string>();

  constructor(private _dataService: DataService) {}

  onButtonClicked() {
    console.log('Button in Hello component is clicked');
    this.text = 'Clicked Button CON';
    this.buttonClicked.emit(this.text);
  }
  ngOnInit(): void {
    console.log('HelloComponent Con OnInit Ran');
    this._dataService.setTextFromHello(this.text);
  }

  ngOnChanges(changes: SimpleChanges): void {}
}
