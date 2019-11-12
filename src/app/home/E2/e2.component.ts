import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  templateUrl: 'e2.html',
  styleUrls: ['e2.scss']
})
export class E2 {
  @Input() name: string;
}
