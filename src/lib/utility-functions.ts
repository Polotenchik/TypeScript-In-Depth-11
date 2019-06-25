import { Book, LibMrgCallback } from '../interfaces';
import { Category } from '../enum';

export function purge<T>(inventory: Array<T>): Array<T> {
    return inventory.splice(2, inventory.length);
}

  // type Book = { 
  //   id: number;
  //   title: string;
  //   author: string;
  //   available: boolean;
  //   category: Category; 
  // };
  
export function getAllBooks(): Array<Book> {
    const books: Array<Book> = [
      { 
        id: 1,
        title: 'Refactoring JavaScript', 
        author: 'Evan Burchard', 
        available: true, 
        category: Category.JavaScript 
      },
      { 
        id: 2,
        title: 'JavaScript Testing', 
        author: 'Liang Yuxian Eugene', 
        available: false,
        category: Category.JavaScript   
      },
      { 
        id: 3,
        title: 'CSS Secrets', 
        author: 'Lea Verou', 
        available: true,
        category: Category.CSS  
      },
      { 
        id: 4,
        title: 'Mastering JavaScript Object-Oriented Programming', 
        author: 'Andrea Chiarelli', 
        available: true,
        category: Category.JavaScript  
      } 
    ];
  
    return books;
}
  
export function logFirstAvailable(books: Array<Book> = getAllBooks()): void {
    const numbBooks: number = books.length;
    let title: string = '';
    
    for(const book of books) {
      if (book.available) {
        title = book.title;
        break;
      }
    }
    console.log(`Total Books: ${numbBooks}`);
    console.log(`First Available Book Title is ${title}`);
}
  
export function getBookTitleByCategory(category: Category = Category.JavaScript): string[] {
    const books = getAllBooks();
    const titles: string[] = [];
  
    for(const book of books) {
      if (book.category === category) {
        titles.push(book.title);
      }
    }
  
    return titles;
}
  
export function logBookTitles(titles: string[]): void {
    for(const title of titles) {
        console.log(title);
    }
}
  
export function getBookByID(id: number): Book {
    const books = getAllBooks();
    
    return books.find(book => book.id === id);
}
  
export function createCustomerID(name: string, id: number): string {
    return `${name}${id}`;
}
  
export function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`Customer Name is ${name}`);
  
    if (age) {
      console.log(`Customer Age: ${age}`);
    }
  
    if (city) {
      console.log(`Customer Age: ${city}`);
    }
}
  
export function checkoutBooks(customer: string, ...bookIDs: number[]): string[] {
    console.log(`Customer: ${customer}`);
  
    const titles = bookIDs
      .map((id: number): Book => getBookByID(id))
      .filter((book: Book): boolean => book.available)
      .map(book => book.title);
  
    return titles;
}
  
export function getTitle(author: string): string[];
export function getTitle(available: boolean): string[];
export function getTitle(property: string | boolean): string[] {
    const books = getAllBooks();
    const titles: string[] = [];
  
    if (typeof property === 'string') {
      return books.filter(book => book.author === property).map(book => book.title);
    } else if (typeof property === 'boolean') {
      return books.filter(book => book.available === property).map(book => book.title);
    }
  
    return;
};
  
export function printBook(book: Book): void {
    console.log(`${book.title} by ${book.author}`);
}

export function getBooksByCategory(category: Category, callback: LibMrgCallback): void {
    setTimeout(() => {
        try { 
            const titles: string[] = getBookTitleByCategory(category);

        if (titles.length > 0) {
            callback(null, titles);
        } else {
            throw new Error('No Books found');
        }}
        catch(err) {
            callback(err, null);
        }
    }, 2000);
}

export function logCategorySearch(err: Error, titles: string[]): void {
    if (err) {
        console.log(`Error message: ${err.message}`);
    } else {
        console.log(`Books Titles:`, titles);
    }
}

export function getBooksByCategoryPromise(category: Category): Promise<string[]> {
  const p: Promise<string[]> = new Promise((resolve, reject) => {
    setTimeout(() => {
      const titles: string[] = getBookTitleByCategory(category);

        if (titles.length > 0) {
            resolve(titles);
        } else {
            reject('No Books found');
        }
    }, 2000);
  });

  return p;
};

export async function logSearchResults(category: Category) {
  let foundBooks = await getBooksByCategoryPromise(category);
  console.log(foundBooks);
}