/**
 * @module SermonsModule
 */ /** */
import { Component } from '@angular/core';

import { ApiService } from '../core/api/api.service';
/**
 * @whatItDoes Returns the {@link SermonsComponent} view.
 * @consumers {@link SermonsModule},  {@link SermonsRoutingModule}
 */
@Component({
  selector: 'app-sermons',
  templateUrl: './sermons.component.html',
  styleUrls: ['./sermons.component.scss']
})
export class SermonsComponent {
  constructor(
    public apiService: ApiService) { }
}
