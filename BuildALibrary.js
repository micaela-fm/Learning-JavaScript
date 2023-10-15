class Media {
    constructor(title) {
        this._title = title; 
        this._isCheckedOut = false; 
        this._ratings = []; 
    }

    get title() {
        return this._title; 
    }

    get isCheckedOut() {
        return this._isCheckedOut; 
    }

    get ratings() {
        return this._ratings; 
    }

    set isCheckedOut(status) {
        this._isCheckedOut = status; 
    }

    getAverageRating() {
        return this._ratings.reduce((sum, rating) => sum += rating) / this._ratings.length;
    }

    toggleCheckOutStatus() {
        this._isCheckedOut = !this._isCheckedOut; 
    }

    addRating(newRating) {
        this._ratings.push(newRating); 
    }
}

class Book extends Media {
    constructor(author, title, pages) {
        super(title); 
        this._author = author; 
        this._pages = pages; 
    }

    get author() {
        return this._author; 
    }

    get pages() {
        return this._pages; 
    }
}

class Movie extends Media {
    constructor(director, title, runTime) {
        super(title); 
        this._director = director; 
        this._runTime = runTime; 
    }

    get director() {
        return this._director; 
    }

    get runTime() {
        return this._runTime; 
    }
}

class CD extends Media {
    constructor(artist, title, songs) {
        super(title); 
        this._artist = artist; 
        this._songs = songs; 
    }

    get artist() {
        return this._artist; 
    }

    get songs() {
        return this._songs; 
    }
}

const historyOfEverything = new Book("Bill Bryson", "A Short Story of Nearly Everything", 544); 
historyOfEverything.toggleCheckOutStatus(); 
console.log(
    "Is " + historyOfEverything.title + ", by " + historyOfEverything.author 
    + ", checked-out? " + historyOfEverything.isCheckedOut
    ); 

[4, 5, 5].forEach(rating => historyOfEverything.addRating(rating)); 
console.log(
    "Average rating of " + historyOfEverything.title + ", by " + historyOfEverything.author 
    + ": " + historyOfEverything.getAverageRating()
    ); 

const speed = new Movie("Jan de Bont", "Speed", 116); 
speed.toggleCheckOutStatus(); 
console.log(
    "Is " + speed.title + ", by " + speed.director 
    + ", checked-out? " + speed.isCheckedOut
    );
[1, 1, 5].forEach(rating => speed.addRating(rating)); 
console.log(
    "Average rating of " + speed.title + ", by " + speed.director 
    + ": " + speed.getAverageRating()
    ); 
