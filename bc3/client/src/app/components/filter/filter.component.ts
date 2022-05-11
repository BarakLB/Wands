import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FilterOptions } from '../../types';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Input() options: FilterOptions | null = {
    core: [],
    wood: [],
    length: [],
    flexibility:[],
  };

  @Output() changed = new EventEmitter<{ [key: string]: string }>();
}
