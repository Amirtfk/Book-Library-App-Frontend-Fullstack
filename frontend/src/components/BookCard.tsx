import {Book} from "../../book";
import "./BookCard.css"

type BookCardProps = {
    // unsere book kommt von type Book
    book : Book;
    deleteBook : (isbn: string) => void;
}

export default function BookCard(props: BookCardProps ) {

    return (

        <div className={"book-card"}>

            <p className={"p-class"}> {props.book.title} </p>
            <p> {props.book.author} </p>
            <p>  {props.book.isbn} </p>
            <button className={"card-button"} onClick={() => props.deleteBook(props.book.isbn)}>Delete</button>

        </div>

    )

}