import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-new-chat',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, FormsModule],
  templateUrl: './new-chat.html',
  styleUrl: './new-chat.css',
})
export class NewChatComponent {
  chatTopic = '';
  chatStarted = false;
  userMessage = '';
  messages: { sender: 'user' | 'bot'; text: string; timestamp: Date }[] = [];

  startChat() {
    this.chatStarted = true;
    this.messages = [
      {
        sender: 'bot',
        text: `Hey Ray 👋 Let's dive into "${this.chatTopic}". I'm here to explore ideas with you.`,
        timestamp: new Date()
      }
    ];
  }

  sendMessage() {
    if (!this.userMessage.trim()) return;

    this.messages.push({
      sender: 'user',
      text: this.userMessage,
      timestamp: new Date()
    });

    const botReply = this.generateCopilotStyleReply(this.userMessage);
    setTimeout(() => {
      this.messages.push({
        sender: 'bot',
        text: botReply,
        timestamp: new Date()
      });
    }, 600); // Simulate thoughtful delay

    this.userMessage = '';
  }

  generateCopilotStyleReply(input: string): string {
    const lower = input.toLowerCase();
    if (lower.includes('hello') || lower.includes('hi')) {
      return "Hey there! 😊 What’s on your mind today?";
    }
    if (lower.includes('ai')) {
      return "AI is evolving fast — from chatbots to medical diagnostics. Want to explore a specific use case?";
    }
    if (lower.includes('thank')) {
      return "You're welcome! I'm always here to help you think deeper.";
    }
    return `That's an interesting thought. What makes you curious about "${input}"?`;
  }
}
