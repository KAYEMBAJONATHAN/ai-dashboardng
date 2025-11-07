import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule, ReactiveFormsModule, FormsModule],
  standalone: true,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class NavbarComponent {

}
