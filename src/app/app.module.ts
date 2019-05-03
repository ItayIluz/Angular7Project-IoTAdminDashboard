import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialDashboardComponent } from './material-dashboard/material-dashboard.component';
import { MatGridListModule, MatCheckboxModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule, MatToolbarModule, MatSidenavModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { DashboardNavComponent } from './dashboard-nav/dashboard-nav.component';
import {  ClassroomsListComponent } from './classrooms-list/classrooms-list.component';
import { ChartModule } from 'angular2-chartjs';
import { ThermometerComponent } from './thermometer/thermometer.component';
import { ThermometerViewComponent } from './thermometer-view/thermometer-view.component';
import { PowermeterComponent } from './powermeter/powermeter.component';
import { PowermeterViewComponent } from './powermeter-view/powermeter-view.component';
import { DoorsWindowsViewComponent } from './doors-windows-view/doors-windows-view.component';
import { MotionLightingViewComponent } from './motion-lighting-view/motion-lighting-view.component';
import { SensorViewComponent } from './sensor-view/sensor-view.component';
import { SensorDataDirective } from './sensor-view/sensor-data.directive';
import { HttpClientModule }    from '@angular/common/http';
import { ClassroomService } from './classroom.service';
import { DoorSensorComponent } from './door-sensor/door-sensor.component';
import { WindowSensorComponent } from './window-sensor/window-sensor.component';
import { MotionSensorComponent } from './motion-sensor/motion-sensor.component';
import { LightingSensorComponent } from './lighting-sensor/lighting-sensor.component';
import { MotionLightingComponent } from './motion-lighting/motion-lighting.component';
import { DoorsWindowsComponent } from './doors-windows/doors-windows.component';
import { ClassroomViewComponent } from './classroom-view/classroom-view.component';
import { AuthorizationService } from './authorization.service';

@NgModule({
  declarations: [
    AppComponent,
    MaterialDashboardComponent,
    DashboardNavComponent,
     ClassroomsListComponent,
    ThermometerComponent,
    ThermometerViewComponent,
    PowermeterComponent,
    PowermeterViewComponent,
    DoorsWindowsViewComponent,
    MotionLightingViewComponent,
    SensorViewComponent,
    SensorDataDirective,
    DoorSensorComponent,
    WindowSensorComponent,
    MotionSensorComponent,
    LightingSensorComponent,
    MotionLightingComponent,
    DoorsWindowsComponent,
    ClassroomViewComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatSidenavModule,
    MatInputModule,
    MatFormFieldModule,
    MatListModule,
    ChartModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  entryComponents: [ 
    ThermometerComponent, 
    PowermeterComponent, 
    DoorsWindowsComponent,
    MotionLightingComponent,
  ],
  providers: [ClassroomService, AuthorizationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
