import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario.model';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-usuarios-page',
  standalone: false,
  templateUrl: './usuarios-page.component.html',
  styleUrls: ['./usuarios-page.component.css'],
})
export class UsuariosPageComponent implements OnInit {
  usuarios: Usuario[] = [];
  usuarioSeleccionado: Usuario | null = null;
  cargando = true;
  error: string | null = null;

  constructor(private usuariosService: UsuariosService) {}

  ngOnInit(): void {
    this.usuariosService.getUsuarios().subscribe({
      next: (data) => {
        this.usuarios = data;
        this.cargando = false;
      },
      error: () => {
        this.error = 'No se pudieron cargar los usuarios.';
        this.cargando = false;
      },
    });
  }

  seleccionar(usuario: Usuario): void {
    this.usuarioSeleccionado = usuario;
  }

  cerrarDetalle(): void {
    this.usuarioSeleccionado = null;
  }
}
