import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-chats',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, FormsModule],
  templateUrl: './chats.html',
  styleUrl: './chats.css',
})
export class ChatsComponent {
  chatSessions = [
    {
      id: 1,
      topic: 'AI in Healthcare',
      lastMessage: 'Let’s explore diagnostics and patient data ethics.',
      date: new Date('2025-11-06')
    },
    {
      id: 2,
      topic: 'Docker Compose Tips',
      lastMessage: 'You asked about service dependencies and health checks.',
      date: new Date('2025-11-05')
    }
  ];

  resumeChat(id: number) {
    console.log('Resuming chat with ID:', id);
    // You could route to /chat/:id or load the session dynamically
  }
}
