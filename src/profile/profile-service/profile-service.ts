import { Injectable } from '@nestjs/common';
import { Book, books } from '../fakaProfile';

@Injectable()
export class ProfileService {
  getAllBooks(): Book[] {
    return books;
  }

  findById(bookId: number): Book | undefined {
    return books.find((book) => book.id === bookId);
  }

  create(book: Partial<Book>): Book {
    const newId = books[books.length - 1].id + 1;

    const newBook: Book = {
      id: newId,
      title: book?.title ?? '',
      author: book?.author ?? '',
      publicationYear: book.publicationYear ?? 0,
    };
    books.push(newBook);
    return newBook;
  }

  update(bookId: number, book: Partial<Book>): Book | undefined {
    const currentIdxBook = books.findIndex((book) => book.id === bookId);
    const currentBook = books[currentIdxBook];

    const updatedBook = {
      id: bookId,
      title: book.title ?? currentBook.title,
      author: book.author ?? currentBook.author,
      publicationYear: book.publicationYear ?? currentBook.publicationYear,
    };

    books[currentIdxBook] = updatedBook;
    return updatedBook;
  }

  delete(bookId: number): Book[] | undefined {
    const currentIdxBook = books.findIndex((book) => book.id === bookId);
    books.splice(currentIdxBook, 1);

    return books;
  }
}
