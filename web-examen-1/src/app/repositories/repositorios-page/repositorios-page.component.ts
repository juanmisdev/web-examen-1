import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Repositorio } from '../repositorio.model';
import { RepositoriosService } from '../repositorios.service';

@Component({
  selector: 'app-repositorios-page',
  standalone: false,
  templateUrl: './repositorios-page.component.html',
  styleUrls: ['./repositorios-page.component.css'],
})
export class RepositoriosPageComponent implements OnInit {
  repositorios: Repositorio[] = [];
  cargando = true;
  error: string | null = null;

  constructor(
    private repositoriosService: RepositoriosService,
    private router: Router,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.repositoriosService.getRepositorios().subscribe({
      next: (data) => {
        this.repositorios = data;
        this.cargando = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.error = 'No se pudieron cargar los repositorios.';
        this.cargando = false;
        this.cdr.detectChanges();
      },
    });
  }

  verDetalle(repo: Repositorio): void {
    this.router.navigate(['/repositorios', repo.id]);
  }
}
