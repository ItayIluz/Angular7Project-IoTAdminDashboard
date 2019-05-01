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
      
        let chart = am4core.create("powermeter-classroom-" + this.data.id, am4charts.GaugeChart);
        chart.hiddenState.properties.opacity = 0;

        chart.colors.list[0] = am4core.color("#ffc107");
        chart.colors.list[1] = am4core.color("#fd7e14");
        chart.colors.list[2] = am4core.color("#dc3545");

        let currentAxis = chart.xAxes.push(new am4charts.ValueAxis() as any);
        currentAxis.min = 0;
        currentAxis.max = 1000;
        currentAxis.strictMinMax = true;
        currentAxis.renderer.inside = true;
        //currentAxis.renderer.ticks.template.inside = true;
        //currentAxis.stroke = chart.colors.getIndex(3);
        currentAxis.renderer.radius = am4core.percent(97);
        //currentAxis.renderer.radius = 80;
        currentAxis.renderer.line.strokeOpacity = 1;
        currentAxis.renderer.line.strokeWidth = 5;
        currentAxis.renderer.line.stroke = chart.colors.getIndex(1);
        currentAxis.renderer.ticks.template.stroke = chart.colors.getIndex(1);
        currentAxis.renderer.labels.template.radius = 35;
        currentAxis.renderer.ticks.template.strokeOpacity = 1;
        currentAxis.renderer.grid.template.disabled = true;
        currentAxis.renderer.ticks.template.length = 10;
        currentAxis.hiddenState.properties.opacity = 1;
        currentAxis.hiddenState.properties.visible = true;
        currentAxis.setStateOnChildren = true;
        currentAxis.renderer.hiddenState.properties.endAngle = 180;

        let voltAxis = chart.xAxes.push(new am4charts.ValueAxis() as any);
        voltAxis.min = 0;
        voltAxis.max = 240;
        voltAxis.strictMinMax = true;

        voltAxis.renderer.line.strokeOpacity = 1;
        voltAxis.renderer.line.strokeWidth = 5;
        voltAxis.renderer.line.stroke = chart.colors.getIndex(0);
        voltAxis.renderer.ticks.template.stroke = chart.colors.getIndex(0);

        voltAxis.renderer.ticks.template.strokeOpacity = 1;
        voltAxis.renderer.grid.template.disabled = true;
        voltAxis.renderer.ticks.template.length = 10;
        voltAxis.hiddenState.properties.opacity = 1;
        voltAxis.hiddenState.properties.visible = true;
        voltAxis.setStateOnChildren = true;
        voltAxis.renderer.hiddenState.properties.endAngle = 180;

        let currentHand = chart.hands.push(new am4charts.ClockHand());
        currentHand.fill = currentAxis.renderer.line.stroke;
        currentHand.stroke = currentAxis.renderer.line.stroke;
        currentHand.axis = currentAxis;
        currentHand.pin.radius = 14;
        currentHand.startWidth = 5;

        let voltHand = chart.hands.push(new am4charts.ClockHand());
        voltHand.fill = voltAxis.renderer.line.stroke;
        voltHand.stroke = voltAxis.renderer.line.stroke;
        voltHand.axis = voltAxis;
        voltHand.pin.radius = 10;
        voltHand.startWidth = 5;

        let legend = new am4charts.Legend();
        legend.isMeasured = false;
        legend.y = am4core.percent(95);
        legend.verticalCenter = "bottom";
        legend.parent = chart.chartContainer;
        legend.data = [{
          "name": "Current",
          "fill": chart.colors.getIndex(1)
        }, {
          "name": "Voltage",
          "fill": chart.colors.getIndex(0)
        }];

        legend.itemContainers.template.events.on("hit", function(ev) {
          let index = ev.target.dataItem.index;
          if (ev.target.isActive) {
            chart.hands.getIndex(index).hide();
            chart.xAxes.getIndex(index).hide();
            valueBoxes.getIndex(index).hide();
          }
          else {
            chart.hands.getIndex(index).show();
            chart.xAxes.getIndex(index).show();
            valueBoxes.getIndex(index).show();
          }
        });

        let classLabel = chart.createChild(am4core.Label);
        classLabel.text = 'classroom ' + this.data.id;
        classLabel.fontSize = 14;
        classLabel.align = "center";

        let valueBoxes = new am4core.ListTemplate(new am4core.Label());
        valueBoxes.template.isMeasured = false;
        valueBoxes.template.background.strokeWidth = 2;
        valueBoxes.template.fontSize = 14;
        valueBoxes.template.padding(7, 15, 7, 15);
        valueBoxes.template.y = am4core.percent(0);
        valueBoxes.template.textAlign = "start";
        valueBoxes.template.verticalCenter = "top";
        valueBoxes.template.horizontalCenter = "middle";

        let currentBox = valueBoxes.create();
        currentBox.parent = chart.chartContainer;
        currentBox.x = am4core.percent(40);
        currentBox.background.stroke = chart.colors.getIndex(1);
        currentBox.fill = chart.colors.getIndex(1);

        let voltBox = valueBoxes.create();
        voltBox.parent = chart.chartContainer;
        voltBox.x = am4core.percent(60);
        voltBox.background.stroke = chart.colors.getIndex(0);
        voltBox.fill = chart.colors.getIndex(0);

        chart.events.on("ready", () => {
          voltHand.showValue(this.data.voltage * 1, 1000, am4core.ease.cubicOut);
          voltBox.text = this.data.voltage + "v";
          currentHand.showValue(this.data.current * 1, 1000, am4core.ease.cubicOut);
          currentBox.text = this.data.current + "mA";
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
