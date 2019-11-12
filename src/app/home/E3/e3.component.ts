import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  templateUrl: './e3.component.html',
  styleUrls: ['./e3.component.scss']
})
export class E3 {
  @Input() name: string;
}
