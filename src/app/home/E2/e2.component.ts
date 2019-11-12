import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  templateUrl: './e2.component.html',
  styleUrls: ['./e2.component.scss']
})
export class E2 {
  @Input() name: string;
}
