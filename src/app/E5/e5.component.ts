import { Component, Input } from '@angular/core';

@Component({
  selector: 'e5',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class E5  {
  @Input() name: string;
}
