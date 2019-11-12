import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  templateUrl: './e1.component.html',
  styleUrls: ['./e1.component.scss']
})
export class E1 {
  @Input() name: string;
}
