const myLibrary = [];

function Book (title, author, pages, read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    /*this.info = function () {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
    };*/
}

function addBook () {
    /*let bookTitle = document.getElementById();
    let bookAuthor = document.getElementById();
    let bookPages = document.getElementById();
    let bookRead = document.getElementById();*/

    //let newBook = new Book(bookTitle, bookAuthor, bookPages, bookRead);
    //myLibrary.push(newBook)

    //LET'S MANUALLY ADD A FEW BOOKS
    let firstBook = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet");
    let secondBook = new Book("1984", "George Orwell", 328, "read");
    let thirdBook = new Book("Dune", "Frank Herbert", 688, "not read yet")
    
    myLibrary.push(firstBook)
    myLibrary.push(secondBook)
    myLibrary.push(thirdBook)
}

addBook()
console.log(myLibrary);