import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Repositorio } from '../repositorio.model';
import { RepositoriosService } from '../repositorios.service';

@Component({
  selector: 'app-repositorio-detalle',
  standalone: false,
  templateUrl: './repositorio-detalle.component.html',
  styleUrls: ['./repositorio-detalle.component.css'],
})
export class RepositorioDetalleComponent implements OnInit {
  repositorio: Repositorio | null = null;
  cargando = true;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private repositoriosService: RepositoriosService,
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.repositoriosService.getRepositorios().subscribe({
      next: (data) => {
        this.repositorio = data.find((r) => r.id === id) ?? null;
        if (!this.repositorio) {
          this.error = 'Repositorio no encontrado.';
        }
        this.cargando = false;
      },
      error: () => {
        this.error = 'No se pudo cargar el repositorio.';
        this.cargando = false;
      },
    });
  }

  volver(): void {
    this.router.navigate(['/repositorios']);
  }
}
