export default class DataManager {
    static myInstance = null;
    userID = "";

    books = [
        {
            userid: "user1",
            bookid: 1,
            title: "Harry Pothead",
            subtitle: "420 beech",
            image: require("../assets/harryPothead.jpg"),
            category:"Fiction",
        },
        {
            userid: "user1",
            bookid: 2,
            title: "Game of Cones",
            subtitle: "smoke bong live long",
            image: require("../assets/cones.png"),
            category:"Fiction",
        },
        {
            userid: "user2",
            bookid: 3,
            title: "Stoner Time",
            subtitle: "mudafuk duma",
            image: require("../assets/stoned.jpg"),
            category:"Fiction",
        },
    ]

    static getInstance(){
        if(DataManager.myInstance == null){
            DataManager.myInstance = new DataManager();
        }

        return this.myInstance;
    }

    getUserID(){
        return this.userID;
    }

    setUserID(id){
        this.userID = id;
    }

    getBooks(id){
        return this.books.filter((book) => book.userid === id);
    }

    addBook(book){
        this.books.push(book);
    }

}