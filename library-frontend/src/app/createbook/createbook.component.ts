import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { BookService } from '../services/book.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-createbook',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './createbook.component.html',
  styleUrls: ['./createbook.component.scss']
})
export class CreateBookComponent {
  bookForm: FormGroup;
  showModal = false;

  constructor(private fb: FormBuilder, private bookService: BookService) {
    this.bookForm = this.fb.group({
      title: ['', [Validators.required]],
      author: ['', [Validators.required]],
      year: ['', [Validators.required, Validators.min(1000), Validators.max(new Date().getFullYear())]]
    });
  }

  onSubmit() {
    if (this.bookForm.valid) {
      this.bookService.createBook(this.bookForm.value).subscribe({
        next: () => {
          alert('Book created successfully!');
          this.showModal = false;
          this.bookForm.reset();
        },
        error: (error) => {
          console.error('Error creating book:', error);
        }
      });
    }
  }
}
