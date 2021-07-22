import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './perfilador/index/index.component';
import { ViewsComponent } from './views.component';

const routes: Routes = [
  {
    path:'', component: ViewsComponent,
    children: [
      { path: 'perfilador', loadChildren: () => import('./perfilador/perfilador.module').then(m => m.PerfiladorModule) },
      { path: '', component: IndexComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
