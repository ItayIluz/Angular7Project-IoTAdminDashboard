import { Type } from '@angular/core';
import { SensorContainer } from '../interfaces/sensor-container';

export class SensorItem {
  
  constructor(public component: Type<SensorContainer>, public data: any) {}
}