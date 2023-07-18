//create array of books - probably don't need this
let bookArray = [];
const bookCards = document.querySelector(".books");


//fetch modal input field values
//these will need to be validated
const modalBookTitle = document.querySelector("#booktitle");
const modalBookAuthor = document.querySelector("#bookauthor");
const modalBookPages = document.querySelector("#bookpages");
const modalBookDate = document.querySelector("#bookdate");
const modalBookReadStatus = document.querySelector("#readtoggle");


//create book object
function Book (title, author, pages, date, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.date = date
    this.read = read
    this.info = function() {
        return title + " by " + author + " " + pages + " pages, read? " + read;  
    }
}

//const theHobbit = new Book("The Hobbit", "Tolkien", 295, 1937, false);


//add book object to dom
function addBookToDisplay (bookObject) {

    //I'm sure there must be a better way to do this; possibly making sure all object property names and
    //html element names are the same, and looping through them?
    //The way I'm done it just cannot be efficient! :-)

    const newBookCard = document.createElement("div");
    newBookCard.classList.add("card");
    
    //add book title
    const bookTitle = document.createElement("p");
    bookTitle.classList.add("book-title");
    bookTitle.innerText = bookObject.title;
    newBookCard.appendChild(bookTitle);

    //add book author
    const bookAuthor = document.createElement("p");
    bookAuthor.classList.add("book-author");
    bookAuthor.innerText = bookObject.author;
    newBookCard.appendChild(bookAuthor);

    //add book pages
    const bookPages = document.createElement("p");
    bookPages.classList.add("book-pages");
    bookPages.innerText = bookObject.pages + " pages";
    newBookCard.appendChild(bookPages);

    //add book date
    const bookDate = document.createElement("p");
    bookDate.classList.add("book-date");
    bookDate.innerText = bookObject.date;
    newBookCard.appendChild(bookDate);

    //create mark as read button
    const readButton = document.createElement("button");
    readButton.id = "change-status";
    readButton.classList.add("button");
    if (bookObject.read) {
        readButton.classList.add("read");
        readButton.innerText = "Mark as unread";
    } else {
        readButton.classList.add("unread");
        readButton.innerText = "Mark as read";
    }


    //add read button to book card
    newBookCard.appendChild(readButton);

    //create delete button
    const deleteButton = document.createElement("button");
    deleteButton.id = "remove-book";
    deleteButton.classList.add("button");
    deleteButton.innerText = "Remove";
    //add delete button to book card
    newBookCard.appendChild(deleteButton);

    //add the complete book card to the DOM
    bookCards.appendChild(newBookCard);

    
}


const newBookButton = document.querySelector("#submit-book");


//add a new book using the values from the input fields
//in the modal window
const addBook = function () {
    const newBookFromModal = new Book(modalBookTitle.value, 
                                        modalBookAuthor.value,
                                        modalBookPages.value,
                                        modalBookDate.value, 
                                        modalBookReadStatus.checked);
    addBookToDisplay(newBookFromModal);
}
newBookButton.addEventListener("click", addBook);


//Modal stuff for adding new book
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector("#add-book");
const closeModalBtn = document.querySelector(".btn-close");

const openModal = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}
openModalBtn.addEventListener("click", openModal);

const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};
closeModalBtn.addEventListener("click", closeModal);