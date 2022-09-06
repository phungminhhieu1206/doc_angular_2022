import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Hello</h1>
    <p>{{ title }}</p>
    <button (click)="onButtonClick()">Button Cha</button>
    <app-hello
      [text]="title"
      (buttonClicked)="onButtonClickedFromHelloComponent($event)"
    ></app-hello>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'thu-nghiem';

  onButtonClickedFromHelloComponent(event: string) {
    console.log({ event }, 'clicked from hello');
    this.title = event;
  }

  ngOnInit(): void {
    console.log('AppComponent OnInit Ran');
  }

  onButtonClick() {
    console.log('Button cha clicked !');

    this.title = 'Click button CHA';
  }
}
