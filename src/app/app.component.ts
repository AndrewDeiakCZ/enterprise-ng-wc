import {AfterViewInit, Component, ElementRef, VERSION, ViewChild} from '@angular/core';
import { Router } from '@angular/router'
import 'ids-enterprise-wc/enterprise-wc.js';

export enum StatusFilterValues {
  Draft = 'DRAFT',
  Invalid = 'INVALID',
  Published = 'PUBLISHED',
  PublishError = 'PUBLISH_ERROR'
}

export type StatusFilterType = {
  [key in StatusFilterValues]: boolean;
};

@Component({
  selector: 'app-ids-wc',
  templateUrl: './app.component.html',
  styleUrls: [ 
    './app.component.css'
  ]
})
export class AppComponent {
  readonly statuses = Object.values(StatusFilterValues)

  selectedStatuses: StatusFilterType = {
    [StatusFilterValues.Draft]: false,
    [StatusFilterValues.Invalid]: false,
    [StatusFilterValues.Published]: false,
    [StatusFilterValues.PublishError]: false,
  };

  onFiltersChange(status: string): void {
    this.selectedStatuses[status] = !this.selectedStatuses[status];
  }
}