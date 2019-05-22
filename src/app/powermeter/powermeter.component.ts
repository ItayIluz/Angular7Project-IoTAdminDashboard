import { Component, OnInit, NgZone, Input } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { SensorContainer } from '../interfaces/sensor-container';

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-powermeter',
  templateUrl: './powermeter.component.html',
  styleUrls: ['./powermeter.component.css']
})
export class PowermeterComponent implements OnInit, SensorContainer {
  private chart: am4charts.XYChart;
  
  @Input() data: any;
  
  constructor(private zone: NgZone) {}

  ngOnInit(){
    
  }

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      
        const MAX = 200;

        let chart = am4core.create("powermeter-classroom-" + this.data.id, am4charts.GaugeChart);
        chart.innerRadius = am4core.percent(82);

        // Normal axis
        
        let axis = chart.xAxes.push(new am4charts.ValueAxis() as any);
        axis.min = 0;
        axis.max = MAX;
        axis.strictMinMax = true;
        axis.renderer.radius = am4core.percent(80);
        axis.renderer.inside = false;
        axis.renderer.line.strokeOpacity = 1;
        axis.renderer.ticks.template.strokeOpacity = 1;
        axis.renderer.ticks.template.length = 10;
        axis.renderer.grid.template.disabled = false;
        axis.renderer.labels.template.radius = 30;

        // Axis for ranges

        let axis2 = chart.xAxes.push(new am4charts.ValueAxis() as any);
        axis2.min = 0;
        axis2.max = MAX;
        axis2.renderer.innerRadius = 10
        axis2.strictMinMax = true;
        axis2.renderer.labels.template.disabled = true;
        axis2.renderer.ticks.template.disabled = true;
        axis2.renderer.grid.template.disabled = true;

        let range0 = axis2.axisRanges.create();
        range0.value = 0;
        range0.endValue = MAX / 2;
        range0.axisFill.fillOpacity = 1;
        range0.axisFill.fill = am4core.color("#28a745");

        let range1 = axis2.axisRanges.create();
        range1.value = MAX / 2;
        range1.endValue = MAX;
        range1.axisFill.fillOpacity = 1;
        range1.axisFill.fill = am4core.color("#cccccc");

        // Label

        let label = chart.radarContainer.createChild(am4core.Label);
        label.isMeasured = false;
        label.fontSize = 20;
        label.x = am4core.percent(50);
        label.y = am4core.percent(100);
        label.horizontalCenter = "middle"
        label.verticalCenter = "bottom";
        label.text = this.data.watt + "w";

        let classLabel = chart.createChild(am4core.Label);
        classLabel.text = 'classroom ' + this.data.id;
        classLabel.fontSize = 14;
        classLabel.align = "center";

        //  Hand

        let hand = chart.hands.push(new am4charts.ClockHand());
        hand.fill = axis2.renderer.line.stroke;
        hand.stroke = axis2.renderer.line.stroke;
        hand.axis = axis2;
        hand.opacity = 0.8;
        hand.pin.radius = 5;
        hand.startWidth = 3;
        hand.value = this.data.watt;

        hand.events.on("propertychanged", event => {

          let wattValue = event.target.value
          
          hand.value = wattValue;
          range0.endValue = wattValue;
          range1.value = wattValue;

          let ratio = (wattValue / MAX);
          if(ratio > 0.9)
            range0.axisFill.fill = am4core.color("#ff0000");
          else if (ratio > 0.6) 
            range0.axisFill.fill = am4core.color("#fd7e14");
          else if (ratio > 0.3) 
            range0.axisFill.fill = am4core.color("#ffc107");
          else 
            range0.axisFill.fill = am4core.color("#28a745");

          axis2.invalidate();
        });
    });
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }

}
