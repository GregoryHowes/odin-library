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
console.log(theHobbit.info());