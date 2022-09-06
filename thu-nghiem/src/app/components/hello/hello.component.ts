import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `
    <h1>Day la component hello</h1>
    <p>Du lieu lay tu component cha: {{ text }}</p>
    <button (click)="onButtonClicked()">Button Con</button>
  `,
})
export class HelloComponent implements OnInit {
  @Input() text: string | undefined;
  @Output() buttonClicked: EventEmitter<string> = new EventEmitter<string>();

  onButtonClicked() {
    console.log('Button in Hello component is clicked');
    this.text = 'Clicked Button CON';
    this.buttonClicked.emit(this.text);
  }
  ngOnInit(): void {
    console.log('HelloComponent Con OnInit Ran');
  }
}
