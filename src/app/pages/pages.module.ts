import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './../app-routing.module'
import { SharedModule } from './../shared/shared.module'
import { ComponentsModule } from './../components/components.module'

import { PagesComponent } from './pages.component'
import { Grafica1Component } from './grafica1/grafica1.component'
import { ProgressComponent } from './progress/progress.component'
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountSettingComponent } from './account-setting/account-setting.component'

@NgModule({
    declarations: [DashboardComponent, ProgressComponent, Grafica1Component, PagesComponent, AccountSettingComponent],
    exports: [DashboardComponent, ProgressComponent, Grafica1Component, PagesComponent],
    imports: [CommonModule, SharedModule, AppRoutingModule, FormsModule, ComponentsModule],
})
export class PagesModule {}
