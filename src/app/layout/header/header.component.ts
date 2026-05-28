import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ThemeService } from '../../core/services/theme.service';
import { NgIconsModule, provideIcons } from '@ng-icons/core';
import {
  heroSun,
  heroMoon,
  heroBars3,
  heroXMark,
} from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, NgIconsModule],
  providers: [provideIcons({ heroSun, heroMoon, heroBars3, heroXMark })],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  themeService = inject(ThemeService);
  menuOpen = signal(false);

  navLinks = [
    { label: 'Inicio',      path: '/' },
    { label: 'Sobre mí',   path: '/about' },
    { label: 'Materias',   path: '/subjects' },
    { label: 'Recursos',   path: '/resources' },
    { label: 'Actividades', path: '/activities' },
    { label: 'Contacto',   path: '/contact' },
  ];

  toggleMenu(): void {
    this.menuOpen.update(v => !v);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
