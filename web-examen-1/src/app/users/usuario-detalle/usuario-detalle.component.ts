import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Usuario } from '../usuario.model';

@Component({
  selector: 'app-usuario-detalle',
  standalone: false,
  templateUrl: './usuario-detalle.component.html',
  styleUrls: ['./usuario-detalle.component.css'],
})
export class UsuarioDetalleComponent {
  @Input() usuario!: Usuario;
  @Output() cerrar = new EventEmitter<void>();

  onCerrar(): void {
    this.cerrar.emit();
  }
}
