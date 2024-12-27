import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateBookComponent } from '../createbook/createbook.component';
import { BookService, Book } from '../services/book.service';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';



@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule, CreateBookComponent, ],
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],

})
export class BookComponent implements OnInit {

  books: Book[] = [];
  filteredBooks: Book[] = [];
  searchQuery: string = '';
  isLoading = signal(false);

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.loadBooks();
  }

  loadBooks() {
    this.isLoading.set(true);
    this.bookService.getAllBooks().subscribe({
      next: (books) => {
        this.books = books;
        this.isLoading.set(false);
      },
      error: (error) => {
        console.error('Error fetching books:', error);
        this.isLoading.set(false);
      }
    });
  }

  searchBooks() {
    if (this.searchQuery) {
      this.bookService.searchBooks(this.searchQuery).subscribe((books) => {
        this.filteredBooks = books;
      });
    } else {
      this.filteredBooks = this.books; // Reset to all books if search query is empty
    }
  }

  deleteBook(id: number) {
    if (confirm('Are you sure you want to delete this book?')) {
      this.isLoading.set(true);
      this.bookService.deleteBook(id).subscribe({
        next: () => {
          this.books = this.books.filter(book => book.id !== id);
          this.isLoading.set(false);
        },
        error: (error) => {
          console.error('Error deleting book:', error);
          this.isLoading.set(false);
        }
      });
    }
  }


}
