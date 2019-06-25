import { Category } from './enum';
import { Book, Logger, Author, Librarian, Magazine } from './interfaces'
//import { ReferenceItem, UniversityLibrarian } from './classes';
import RefBook from './classes/encyclopedia';
import Shelf from './classes/shelf';
import { UniversityLibrarian } from './classes/universityLibrarian'; 
import { purge, getBooksByCategory, logCategorySearch, getBooksByCategoryPromise, logSearchResults } from './lib/utility-functions';


function showHello(divName: string, name: string) {
  const elt = document.getElementById(divName);
  elt.innerText = `Hello from ${name}`;
}

showHello('greeting', 'TypeScript');

// Task 01
// logFirstAvailable(getAllBooks());

// Task 02
// const titles = getBookTitleByCategory(Category.JavaScript);
// logBookTitles(titles);

// Task 03
// const titles = getBookTitleByCategory(Category.JavaScript);
// titles.forEach(title => console.log(title));
// console.log(getBookByID(2));

// Task 04
// let myID  = createCustomerID('John', 42);
// console.log(myID);

// type GeratorType = (name: string, id: number) => string; 

// let idGenerator: GeratorType = (name: string, id: number): string => `${name}${id}`; 
// idGenerator = createCustomerID;
// myID = idGenerator('Ann', 13);
// console.log(myID);

//Task 05
// createCustomer('John');
// createCustomer('Anna', 25, 'Minsk');
// createCustomer('Boris', 12);

// const titles = checkoutBooks('Anna', 1, 2, 4);
// console.log(titles);

// task 06
// const checkOutBooks = getTitle(false);
// console.log(checkOutBooks);

// Task 07
// const myBook: Book = {
//   id: 5,
//   title: 'Colors, Backgrounds, and Gradients',
//   author: 'Eric A. Meyer',
//   available: true,
//   category: Category.CSS,
//   pages: 720,
//   markDamaged: (reason: string) => console.log(`Damaged: ${reason}`)
// } 

// printBook(myBook);
// myBook.markDamaged(`missing back cover`);

// Task 08
//const logDamage: Logger = (reason: string) => console.log(`Damaged: ${reason}`);
// logDamage(`There are some problems`);

// Task 09
// const favoriteAuthor: Author = {
//   name: 'Anna',
//   email: 'anna@eexample.com',
//   numBooksPublished: 3
// };

// const favoriteLibrarian: Librarian = {
//   name: 'Boris',
//   email: 'boris@example.com',
//   department: 'Fiction',
//   assistCustomer: (name: string) => console.log(`${name}`)
// };

// Task 10
// const favoriteLibrarian: Librarian = new UniversityLibrarian();
// favoriteLibrarian.name = 'Anna';
// favoriteLibrarian.assistCustomer('Boris');


// Task 11
// const ref = new ReferenceItem('My Title', 2019);
// console.log(ref);
// ref.printItem();
// ref.publisher = 'Anna';
// console.log(ref.publisher);

// Task 12
// const refBook = new Encyclopedia('Title 100', 2010, 10);
// console.log(refBook);
// refBook.printItem();
// refBook.printCitation();

// Task 16
// const refBook = new RefBook('Title 100', 2010, 10);
// console.log(refBook);
// refBook.printItem();
// refBook.printCitation();

// Task 18
const inventory: Array<Book> = [
  { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
  { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
  { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
  { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
]; 
  
// let result: Array<Book | number> = purge(inventory);
// console.log(result);
// result = purge([1, 2, 3, 4,   { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }]);
// console.log(result);

// Task 19
// const bookShelf = new Shelf<Book>();
// bookShelf.add(...inventory);
// console.log(bookShelf.getFirst());

// const magazines: Array<Magazine> = [
//   { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//   { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//   { title: 'Five Points', publisher: 'GSU' }
// ];

// const magazinesShelf = new Shelf<Magazine>();
// magazinesShelf.add(...magazines);
// console.log(magazinesShelf.getFirst());

// Task 20
// const magazines: Array<Magazine> = [
//   { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//   { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//   { title: 'Five Points', publisher: 'GSU' }
// ];

// const magazinesShelf = new Shelf<Magazine>();
// magazinesShelf.add(...magazines);
// magazinesShelf.printTitles();
// const res = magazinesShelf.find('Five Points');
// console.log(res);

// Task 21 
// const favoriteLibrarian: Librarian = new UniversityLibrarian();
// favoriteLibrarian.name = 'Anna';
// favoriteLibrarian.assistCustomer('Boris');
// UniversityLibrarian.f1 = 10;

// Task 22
// const favoriteLibrarian: Librarian = new UniversityLibrarian();
// favoriteLibrarian.name = 'Anna';
// favoriteLibrarian.assistCustomer('Boris');
// favoriteLibrarian['printLibrarian']();

// Task 23
// const favoriteLibrarian = new UniversityLibrarian();
// favoriteLibrarian.name = 'Anna';
// favoriteLibrarian.assistCustomer('Boris');
// favoriteLibrarian.assistFaculty = () => console.log('Changed assistFaculty');
// favoriteLibrarian.assistFaculty();
// try {
//   favoriteLibrarian.teachCommunity = () => console.log('Teaching community');
// } catch(err) {
//   console.log(err);
// }

// favoriteLibrarian.teachCommunity();

// Task 24
// const refBook = new RefBook('Title 100', 2010, 10);
// console.log(refBook);
// refBook.printItem();

// Task 25, 26
// const favoriteLibrarian = new UniversityLibrarian();
// console.log(favoriteLibrarian);
// favoriteLibrarian.name = 'Anna';
// favoriteLibrarian.assistCustomer('Boris');

// Task 27
// const refBook = new RefBook('Title 100', 2010, 10);
// console.log(refBook);
// refBook.copies = 10;

// Task 28
// console.log('Start');
// getBooksByCategory(Category.JavaScript, logCategorySearch);
// getBooksByCategory(Category.Software, logCategorySearch);
// console.log('Finish');

// Task 29
// console.log('Start');
// getBooksByCategoryPromise(Category.JavaScript)
//   .then(titles => { 
//     console.log(titles); 
//     return titles.length; 
//   })
//   .then(count => console.log(count))
//   .catch(err => console.log(err))
//   .finally(() => console.log('Complete!'));
// console.log('Finish');

// Task 30
// console.log('Beginning search...');
// logSearchResults(Category.JavaScript)
//     .catch(reason => console.log(reason));
// console.log('Search submitted...');

// Task 31
/**
 * Объявите enum MessageAccess для вывода статуса доступа пользователей
    a.	No = "You don't have permission to"
    b. Yes = "Welcome to"
    c. Unknown = "You must verify your account"
 */

enum MessageAccess {
  No = "You don't have permission to",
  Yes = "Welcome to",
  Unknown = "You must verify your account"
}

function printMsg(resource: string, message: MessageAccess): void {
  console.log(`${message} ${message === MessageAccess.Unknown ? '' : resource}`);
}

printMsg("TypeScript in-Depth", MessageAccess.Yes);
printMsg("TypeScript in-Depth", MessageAccess.No);
printMsg("TypeScript in-Depth", MessageAccess.Unknown);