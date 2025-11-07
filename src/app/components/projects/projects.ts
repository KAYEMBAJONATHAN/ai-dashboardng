import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, FormsModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class ProjectsComponent {
  projects = [
    {
      name: 'AI Dashboard',
      description: 'Signal-driven Angular workspace with chatbot, resume analyzer, and image classifier.',
      updated: new Date('2025-11-06')
    },
    {
      name: 'RFC INTERNATION Website',
      description: 'Mobile-friendly, popup-style menu with semantic HTML and warm UX for community outreach.',
      updated: new Date('2025-11-05')
    }
  ];

}
