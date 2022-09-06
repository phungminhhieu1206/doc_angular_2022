import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Hello</h1>
    <p>{{ title }}</p>
    <app-hello [text]="title"></app-hello>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'thu-nghiem';

  ngOnInit(): void {
    console.log('AppComponent OnInit Ran');
  }
}
