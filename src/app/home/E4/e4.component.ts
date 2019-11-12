import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  templateUrl: './e4.component.html',
  styleUrls: ['./e4.component.scss']
})
export class E4 {
  @Input() name: string;
}
