const myLibrary = [];

function Book (title, author, pages, read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBook () {
    let bookTitle = document.getElementById("title").value;
    let bookAuthor = document.getElementById("author").value;
    let bookPages = document.getElementById("pages").value;
    let bookRead = document.getElementById("read").checked;

    let newBook = new Book(bookTitle, bookAuthor, bookPages, bookRead);
    myLibrary.push(newBook)

}

function displayLibrary () {
    const libraryContainer = document.getElementById("library-container");

    libraryContainer.textContent = "";

    myLibrary.forEach(book => {
        const bookCard = document.createElement("div");

        bookCard.innerHTML = `
            <h2>${book.title}</h2>
            <p>${book.author}</p>
            <p>${book.pages}</p>
            <p>${book.read ? "Read" : "Not read yet"}</p>
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
const bookForm = document.getElementById("book-form");

function showAddBookFormModal() {
    addBookForm.showModal()
}


function closeAddBookForm() {
    addBookForm.close()
}


addBookForm.addEventListener("submit", (event) => {
    event.preventDefault();

    addBook();
    displayLibrary();

    bookForm.reset();
    addBookForm.close();
});
