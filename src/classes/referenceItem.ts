import { timeout } from "../decorators";

export abstract class ReferenceItem {
    // title: string;
    // year: number;
  
    // constructor(newTitle: string, newYear: number) {
    //   console.log(`Creating a new ReferenceItem`);
    //   this.title = newTitle;
    //   this.year = newYear;
    // }
  
    private _publisher: string;
  
    static department: string = 'Fiction'; 
  
    get publisher(): string {
      return this._publisher.toLocaleUpperCase();
    }
  
    set publisher(newPublisher: string) {
      this._publisher = newPublisher;
    } 
  
    constructor(public title: string, protected year: number) {
      console.log(`Creating a new ReferenceItem`);
    }
    
    @timeout(3000)
    printItem(): void {
      console.log(`${this.title} was published ${this.year}`);
      console.log(`Department: ${ReferenceItem.department}`);
    }
  
    abstract printCitation(): void;
};
