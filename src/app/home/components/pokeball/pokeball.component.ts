import { Component, Input } from '@angular/core';

@Component({
  selector: 'pokeball',
  templateUrl: './pokeball.component.html',
  styleUrls: ['./pokeball.component.scss']
})
export class Pokeball {
  @Input() upperText: string;
  @Input() lowerText: string;
  @Input() height: string;
}
