import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { SensorContainer } from '../interfaces/sensor-container';
import { SensorItem } from "./sensor-item";
import { SensorDataDirective } from './sensor-data.directive';

@Component({
  selector: 'app-sensor-view',
  templateUrl: './sensor-view.component.html',
  styleUrls: ['./sensor-view.component.css']
})
export class SensorViewComponent implements OnInit {
  
  @Input() protected title: string;
  currentAdIndex = -1;
  @Input() protected sensorItems: SensorItem[];
  @ViewChild(SensorDataDirective) sensorData: SensorDataDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    // Dynamically render SensorContainer components
    let viewContainerRef = this.sensorData.viewContainerRef;
    for(let i = 0; i < this.sensorItems.length; i++) {
    
      let sensorItem = this.sensorItems[i];
      let componentFactory = this.componentFactoryResolver.resolveComponentFactory(sensorItem.component);
     
      let componentRef = viewContainerRef.createComponent(componentFactory);
      (<SensorContainer>componentRef.instance).data = sensorItem.data;
    }   
  }
}
