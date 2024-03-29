import { Category } from './enum';

interface DamageLogger {
    (reason: string): void;
}
  
interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
    pages?: number;
    //markDamaged?: (reason: string) => void;
    markdamaged?: DamageLogger;
}
  
interface Person {
    name: string;
    email: string;
}
  
interface Author extends Person {
    numBooksPublished: number;
}
  
interface Librarian extends Person {
    department: string;
    assistCustomer: (custName: string) => void;
}

interface Magazine {
    title: string;
    publisher: string;
}

interface ShelfItem {
    title: string;
}

interface LibMrgCallback {
    (err: Error, title: string[]): void;
}

export { Book, DamageLogger as Logger, Author, Librarian, Magazine, ShelfItem, LibMrgCallback };
  