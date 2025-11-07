import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-library',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, FormsModule],
  templateUrl: './library.html',
  styleUrl: './library.css',
})
export class LibraryComponent {
  libraryItems = [
    {
      title: 'AI in Healthcare',
      summary: 'Explored diagnostics, patient data, and ethical concerns.',
      date: new Date('2025-10-01')
    },
    {
      title: 'Docker Compose Tips',
      summary: 'Discussed service dependencies, health checks, and modular setups.',
      date: new Date('2025-09-15')
    }
  ];
}
