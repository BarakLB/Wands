import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Wand } from '../../types';



@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {
  @Input() results: Wand[] | null = [];
  @Output() selected = new EventEmitter<Wand>();
   COLORS = [
    '#FFDC5E',
    '#FF69EB',
    '#FF86C8',
    '#FFA3A5',
    '#FFBF81'
  ];
  select(wand: Wand) {
    this.selected.emit(wand);
    
  }
}
