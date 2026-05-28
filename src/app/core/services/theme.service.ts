import { Injectable, signal, effect } from '@angular/core';

export type Theme = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly STORAGE_KEY = 'ace-theme';

  theme = signal<Theme>(this.getInitialTheme());

  constructor() {
    // Aplica el tema cada vez que cambia la señal
    effect(() => {
      this.applyTheme(this.theme());
    });
  }

  toggle(): void {
    this.theme.update(t => (t === 'light' ? 'dark' : 'light'));
  }

  setTheme(theme: Theme): void {
    this.theme.set(theme);
  }

  get isDark(): boolean {
    return this.theme() === 'dark';
  }

  private getInitialTheme(): Theme {
    const stored = localStorage.getItem(this.STORAGE_KEY) as Theme | null;
    if (stored) return stored;
    // Respeta la preferencia del sistema si no hay preferencia guardada
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  private applyTheme(theme: Theme): void {
    const html = document.documentElement;
    const body = document.body;

    if (theme === 'dark') {
      html.classList.add('dark');
      body.classList.add('dark-mode');
    } else {
      html.classList.remove('dark');
      body.classList.remove('dark-mode');
    }

    localStorage.setItem(this.STORAGE_KEY, theme);
  }
}
