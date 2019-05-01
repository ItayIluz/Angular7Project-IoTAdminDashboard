import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[sensor-data]',
})
export class SensorDataDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}