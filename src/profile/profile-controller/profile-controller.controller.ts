import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ProfileService } from '../profile-service/profile-service';
import { Book } from '../fakaProfile';

@Controller('profile')
export class ProfileControllerController {
  constructor(private readonly profileService: ProfileService) {}

  @Get()
  getAllBooks(): Book[] {
    return this.profileService.getAllBooks();
  }

  @Get(':id')
  getBookById(@Param('id') id: string): Book | undefined {
    const bookID = +id;
    return this.profileService.findById(bookID);
  }

  @Post()
  addBook(@Body() book: Partial<Book>): Book | undefined {
    const bookData = book;

    if (!book.author || !book.title || !book.publicationYear) return undefined;

    return this.profileService.create(bookData);
  }

  @Put(':id')
  updateBook(
    @Param('id') id: string,
    @Body() book: Partial<Book>,
  ): Book | undefined {
    const bookID = +id;
    return this.profileService.update(bookID, book);
  }

  @Delete(':id')
  deleteBook(@Param('id') id: string): Book[] | undefined {
    const bookID = +id;
    return this.profileService.delete(bookID);
  }
}