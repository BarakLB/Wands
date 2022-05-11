import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Wand } from '../../types';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  @Input() wand?: Wand;
  @Output() unselect = new EventEmitter<boolean>();


}
