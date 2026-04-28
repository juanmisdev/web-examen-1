import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RepositoriosPageComponent } from './repositorios-page/repositorios-page.component';
import { RepositorioDetalleComponent } from './repositorio-detalle/repositorio-detalle.component';

@NgModule({
  declarations: [RepositoriosPageComponent, RepositorioDetalleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'repositorios', component: RepositoriosPageComponent },
      { path: 'repositorios/:id', component: RepositorioDetalleComponent },
    ]),
  ],
})
export class RepositoriesModule {}
