//----------------------------------------------------------
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
//----------------------------------------------------------

//create book object
function Book (title, author, pages, date, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.date = date
    this.read = read
}

//prototype function on Book object to toggle the read status
Book.prototype.changeReadStatus = function() {
    this.read = !this.read;
    console.log(this.read);
}



const bookCards = document.querySelector(".books");

//create array of books and add to the DOM
let bookArray = [];
bookArray.push(new Book("The Hobbit", " J.R. Tolkien", 295, 1937, false));
addBookToDisplay(bookArray[0]);
bookArray.push(new Book("1984", "George Orwell", 328, 1949, false));
addBookToDisplay(bookArray[1]);
bookArray.push(new Book("Romeo and Juliet", "William Shakepeare", 480, 1597, true));
addBookToDisplay(bookArray[2]);
bookArray.push(new Book("1Q84", "Murakami Haruki", 928, 2011, true));
addBookToDisplay(bookArray[3]);

//test changeReadStatus
bookArray[0].changeReadStatus();




//fetch modal input field values
//these will need to be validated
const modalBookTitle = document.querySelector("#booktitle");
const modalBookAuthor = document.querySelector("#bookauthor");
const modalBookPages = document.querySelector("#bookpages");
const modalBookDate = document.querySelector("#bookdate");
const modalBookReadStatus = document.querySelector("#readtoggle");




//the problem with the is that I can't find a way to access the array index of each book object
//EDIT - Just need to do the old fashioned for i=0, i<len, i++ method!!
const addBooksToDomFromArray = function () {
    bookArray.forEach((book) => {
        addBookToDisplay(book);
    });
}

//addBooksToDomFromArray();

//add book object to dom
function addBookToDisplay (bookObject) {

    //I'm sure there must be a better way to do this; possibly making sure all object property names and
    //html element names are the same, and looping through them?
    //The way I'm done it just cannot be efficient! :-)

    const newBookCard = document.createElement("div");
    newBookCard.classList.add("card");
    
    //add data element to correspond to array position
    newBookCard.dataset.bookNumber = bookArray.length -1;

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
    readButton.classList.add("change-status");
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
    closeModal();

    
}


const newBookButton = document.querySelector("#submit-book");



//Note to self:
//I should have just has one class to indicate if a book was read, and toggle that class on and off
//but I made the mistake to use two classes, which really just creates duplicate code
// -- but it's a very good thing to learn and remember!

const toggleReadStatus = function(book) {
    
    //update them dom
    if (book.target.classList.contains("read")) {
        //console.log("Switch to unread");
        book.target.classList.remove("read");
        book.target.classList.add("unread");
    } else {
        //console.log("switch to read");
        book.target.classList.remove("unread");
        book.target.classList.add("read");
    }

    //update the book array
    let bookCard = book.target.parentElement;
    console.log(bookCard.dataset.bookNumber);
    let bookToChange = bookArray[bookCard.dataset.bookNumber];
    console.log(bookToChange);
    bookToChange.changeReadStatus();
    //bookArray[bookCard.dataset.bookNumber].changeReadStatus;
}

//function to update the DOM object references
//I think this will be necessary if we delete an object
const updateDOMListeners = function() {
    let changeStatusButton = document.querySelectorAll(".change-status");

    changeStatusButton.forEach((button) => {
        button.addEventListener("click", toggleReadStatus);
    })
}


updateDOMListeners();





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


