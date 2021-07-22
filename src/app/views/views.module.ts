import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { PerfiladorComponent } from './perfilador/perfilador.component';
import { SharedModule } from '../shared/shared.module';
import { ViewsComponent } from './views.component';


@NgModule({
  declarations: [ViewsComponent, PerfiladorComponent],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    SharedModule
  ]
})
export class ViewsModule { }
