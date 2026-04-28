import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UsuariosPageComponent } from './usuarios-page/usuarios-page.component';
import { UsuarioDetalleComponent } from './usuario-detalle/usuario-detalle.component';

@NgModule({
  declarations: [UsuariosPageComponent, UsuarioDetalleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'usuarios', component: UsuariosPageComponent },
    ]),
  ],
})
export class UsersModule {}
