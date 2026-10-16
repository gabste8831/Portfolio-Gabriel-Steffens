import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FATOS_RAPIDOS, OBJETIVO_PROFISSIONAL, PERFIL } from '../../data/portfolio-data';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})

export class AboutComponent {
  readonly perfil = PERFIL;

  readonly objetivo = OBJETIVO_PROFISSIONAL;

  readonly fatos = FATOS_RAPIDOS;

  iconeUrl(slug: string): string {
    return `https://cdn.simpleicons.org/${slug}`;
  }

}