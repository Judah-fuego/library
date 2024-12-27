import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Book from './book.entity';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import Fuse from 'fuse.js';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private bookRepository: Repository<Book>,
  ) {}

  // Create a new book
  async create(createBookDto: CreateBookDto): Promise<Book> {
    const book = this.bookRepository.create(createBookDto);
    return await this.bookRepository.save(book);
  }

  // Find all books
  async findAll(): Promise<Book[]> {
    return await this.bookRepository.find();
  }

  // Find a book by ID
  async findOne(id: number): Promise<Book | null> {
    return await this.bookRepository.findOne({ where: { id } });
  }

  // Update a book
  async update(id: number, updateBookDto: UpdateBookDto): Promise<Book | null> {
    await this.bookRepository.update(id, updateBookDto);
    return this.findOne(id);
  }

  // Delete a book
  async remove(id: number): Promise<void> {
    await this.bookRepository.delete(id);
  }

  // Example of a more complex query
  async findBooksByTitleFuzzy(title: string): Promise<Book[]> {
    const books = await this.bookRepository.find(); // Fetch all books

    const fuse = new Fuse(books, {
      keys: ['title'], // Fields to search
      threshold: 0.4, // Lower threshold = stricter match
    });

    return fuse.search(title).map((result) => result.item);
  }
}
