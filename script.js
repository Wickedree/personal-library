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

function displayLibrary() {
    const libraryContainer = document.getElementById("library-container");

    libraryContainer.textContent = "";

    myLibrary.forEach(book => {
        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");

        const title = document.createElement("h2");
        title.textContent = book.title;
        title.classList.add("book-title");

        const author = document.createElement("p");
        author.textContent = book.author;
        author.classList.add("book-author");

        const pages = document.createElement("p");
        pages.textContent = `${book.pages} pages`;
        pages.classList.add("book-pages");

        const read = document.createElement("p");
        read.textContent = book.read ? "Read" : "Not read yet";
        read.classList.add("read-status");

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-btn");
        deleteButton.textContent = "Delete";
        deleteButton.dataset.id = book.id;
        deleteButton.classList.add("delete-book-btn")

        bookCard.appendChild(title);
        bookCard.appendChild(author);
        bookCard.appendChild(pages);
        bookCard.appendChild(read);
        bookCard.appendChild(deleteButton);

        libraryContainer.appendChild(bookCard);
    });

    const deleteButtons = document.querySelectorAll(".delete-btn");

    deleteButtons.forEach(button => {
        button.addEventListener("click", () => {
            const id = button.dataset.id;

            const index = myLibrary.findIndex(book => book.id === id);

            if (index !== -1) {
                myLibrary.splice(index, 1);
            }

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
