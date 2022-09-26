import {Book} from "../../book";
import "./BookCard.css"

type BookCardProps = {
    // unsere book kommt von type Book
    book : Book;
}

export default function BookCard(props: BookCardProps ) {

    return (

        <div className={"book-card"}>

            <p> {props.book.title} </p>
            <p> {props.book.author} </p>
            <p> {props.book.isbn} </p>

        </div>

    )

}