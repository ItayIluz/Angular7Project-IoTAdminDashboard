import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialDashboardComponent } from './material-dashboard/material-dashboard.component';
import { ClassroomsListComponent } from './classrooms-list/classrooms-list.component';
import { ThermometerViewComponent } from './thermometer-view/thermometer-view.component';
import { PowermeterViewComponent } from './powermeter-view/powermeter-view.component';
import { MotionLightingViewComponent } from './motion-lighting-view/motion-lighting-view.component';
import { DoorsWindowsViewComponent } from './doors-windows-view/doors-windows-view.component';
import { ClassroomViewComponent } from './classroom-view/classroom-view.component';

const routes: Routes = [
  { path: '', component: MaterialDashboardComponent },
  { path: 'classrooms-list', component: ClassroomsListComponent },
  { path: 'thermometer-view', component: ThermometerViewComponent },
  { path: 'powermeter-view', component: PowermeterViewComponent },
  { path: 'motion-lighting-view', component: MotionLightingViewComponent },
  { path: 'doors-windows-view', component: DoorsWindowsViewComponent },
  { path: 'classroom', component: ClassroomViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
