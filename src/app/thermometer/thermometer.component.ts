import { Component, OnInit, NgZone, Input } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { SensorContainer } from '../interfaces/sensor-container';

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-thermometer',
  templateUrl: './thermometer.component.html',
  styleUrls: ['./thermometer.component.css']
})
export class ThermometerComponent implements OnInit, SensorContainer{
  private chart: am4charts.XYChart;
  
  @Input() data: any;
  
  constructor(private zone: NgZone) {}

  ngOnInit(){
  
  }

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
        
        let iconPath = "M16,30 C18.2091391,30 20,28.2091391 20,26 C20,24.5194342 19.1956017,23.2267458 18,22.5351287 L18,4.00494659 C18,2.89764516 17.1122704,2 16,2 C14.8954305,2 14,2.89702623 14,4.00494659 L14,22.5351287 C12.8043983,23.2267458 12,24.5194342 12,26 C12,28.2091391 13.7908609,30 16,30 Z M16,32 C12.6862913,32 10,29.3137087 10,26 C10,24.2229949 10.7725059,22.6264183 12,21.5277869 L12,4.00552025 C12,1.78708529 13.790861,0 16,0 C18.2046438,0 20,1.7933325 20,4.00552025 L20,21.5277869 C21.2274941,22.6264183 22,24.2229949 22,26 C22,29.3137087 19.3137087,32 16,32 Z M16,32"

        let chart = am4core.create('thermometer-classroom-' + this.data.id, am4charts.SlicedChart);
        chart.hiddenState.properties.opacity = 0; // this makes initial fade in effect
        
        chart.data = [{
            "name": "Humidity",
            "value": this.data.humidity,
        }, {
            "name": "Temperature",
            "value": this.data.temperature,
        }];

        let series = chart.series.push(new am4charts.PictorialStackedSeries());
        series.dataFields.value = "value";
        series.dataFields.category = "name";
        series.alignLabels = true;

        series.maskSprite.path = iconPath;
        series.ticks.template.locationX = 1;
        series.ticks.template.locationY = 0;
      
        series.labelsContainer.width = 100;
        series.colors.list[0] = am4core.color("#cccccc");

        series.labels.template.text = "{category}: {value.value}" + String.fromCharCode(176); // Format thermometers
        series.slices.template.tooltipText = ""; // Don't show tooltip
        
        let fillModifier = new am4core.LinearGradientModifier();
        fillModifier.brightnesses = [-0.5, 1, -0.5];
        fillModifier.offsets = [0, 0.5, 1];
        series.slices.template.fillModifier = fillModifier;

        let classLabel = chart.createChild(am4core.Label);
        classLabel.text = 'classroom ' + this.data.id;
        classLabel.fontSize = 14;
        classLabel.align = "center";
          
        if(chart.data[1].value <= 24)
          series.colors.list[1] = am4core.color("#2b8ae8");   
        else
          series.colors.list[1] = am4core.color("#ff0000");   

        // Reformat the humidty to %
        chart.events.on("ready", () => {
          let tspan = document.getElementById('thermometer-classroom-' + this.data.id).getElementsByTagName("tspan")[0];
          let humidityText = tspan.innerHTML;
          tspan.innerHTML = humidityText.substring(0, humidityText.length-1) + '%';
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
