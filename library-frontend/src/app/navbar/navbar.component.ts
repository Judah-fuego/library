import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { BookService, Book } from './../services/book.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ButtonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'], // Fixed typo from `styleUrl` to `styleUrls`
})
export class NavbarComponent {
  navItems = [
    { path: '/books', label: 'Books' },
    { path: '/about', label: 'About' },
    { path: '/trending', label: 'Trending' },
  ];

  searchResults: Book[] = [];
  searchQuery: string = '';

  constructor(private bookService: BookService) {}

  onSearch(): void {
    if (this.searchQuery.trim()) {
      this.bookService.searchBooks(this.searchQuery).subscribe((results) => {
        this.searchResults = results;
        console.log(this.searchResults); // Debugging
      });
    } else {
      this.searchResults = [];
    }
  }
}