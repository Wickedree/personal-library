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

function displayLibrary () {
    const libraryContainer = document.getElementById("library-container");

    libraryContainer.textContent = "";

    myLibrary.forEach(book => {
        const bookCard = document.createElement("div");

        bookCard.textContent = "Book!";

        bookCard.innerHTML = `
            ${book.title}
            ${book.author}
            ${book.pages}
            ${book.read}
            <button class="delete-btn" data-id="${book.id}">Delete</button>
        `;

        libraryContainer.appendChild(bookCard);
    })

    const deleteButtons = document.querySelectorAll(".delete-btn");
    
    deleteButtons.forEach(button => {
        button.addEventListener("click", () => {
            const id = button.dataset.id;

            const index = myLibrary.findIndex(book => book.id === id);

            myLibrary.splice(index, 1);

            displayLibrary();
        });
    });   
}

displayLibrary();


//ADD BOOK FORM
const addBookForm = document.getElementById("add-book-form");

function showAddBookFormModal() {
    addBookForm.showModal()
}


function closeAddBookForm() {
    addBookForm.close()
}

