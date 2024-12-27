// library-frontend/src/app/services/book.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Book {
  id: number;
  title: string;
  author: string;
  year: number;
}

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = 'http://localhost:3000/book';

  constructor(private http: HttpClient) {}
  // Create a Book
  createBook(bookData: Book): Observable<Book> {
    return this.http.post<Book>(this.apiUrl, bookData);
  }  
  // Get all books
  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl);
  }

  deleteBook(id: number): Observable<void> {
    console.log(id)
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  searchBooks(title: string): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiUrl}/search?title=${title}`);
  }

}