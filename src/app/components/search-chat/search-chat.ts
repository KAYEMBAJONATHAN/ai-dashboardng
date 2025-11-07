import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-search-chat',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, FormsModule],
  templateUrl: './search-chat.html',
  styleUrl: './search-chat.css',
})
export class SearchChatComponent {
  searchQuery = '';
  searched = false;
  results: { topic: string; date: Date; preview: string }[] = [];

  searchChats() {
    this.searched = true;

    // Simulated search logic — replace with real backend call
    const mockChats = [
      { topic: 'AI in healthcare', date: new Date('2025-10-01'), preview: 'We discussed AI diagnostics and patient data.' },
      { topic: 'Docker Compose tips', date: new Date('2025-09-15'), preview: 'You asked about service dependencies and health checks.' }
    ];

    this.results = mockChats.filter(chat =>
      chat.topic.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      chat.preview.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

}
