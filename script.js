let bookArray = [];
const bookCards = document.querySelector(".books");

//create book object
function Book (title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return title + " by " + author + " " + pages + " pages, read? " + read;  
    }
}

const theHobbit = new Book("The Hobbit", "Tolkien", 295, false);
addBookToDisplay(theHobbit);
//add book object to dom
function addBookToDisplay (bookObject) {
    const newBookCard = document.createElement("div");
    
}


//add new book to show a book or two when page first opened
bookArray.push(new Book("The Hobbit", "Tolkien", 295, false));

//const theHobbit = new Book("The Hobbit", "Tolkien", 295, false);
//console.log(theHobbit.info());

const newBookButton = document.querySelector("#add-book");


const addBook = function () {

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