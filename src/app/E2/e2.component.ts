import { Component, Input } from '@angular/core';

@Component({
  selector: 'e2',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class E2  {
  @Input() name: string;
}
