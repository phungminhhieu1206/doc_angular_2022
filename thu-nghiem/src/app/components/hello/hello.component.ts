import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `
    <h1>Day la component hello</h1>
    <p>Du lieu lay tu component cha: {{ text }}</p>
  `,
})
export class HelloComponent implements OnInit {
  @Input() text: string | undefined;

  ngOnInit(): void {
    console.log('HelloComponent Con OnInit Ran');
  }
}
