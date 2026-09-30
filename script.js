const myLibrary = [];

function Book (id, title, author, pages, read) {
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
    let bookTitle = document.getElementById();
    let bookAuthor = document.getElementById();
    let bookPages = document.getElementById();
    let bookRead = document.getElementById();

    let newBook = new Book(bookTitle, bookAuthor, bookPages, bookRead);
    
    myLibrary.push(newBook)
}