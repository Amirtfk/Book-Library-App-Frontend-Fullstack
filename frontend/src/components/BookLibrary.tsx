import {Book} from "../../book";

type BookLibraryProps = {
    books : Book[];
}


export default function BookLibrary (props : BookLibraryProps) {

    return ( //Damit wir jede einzeles Buch durchgehen und für jedes einzelnes element etwas machen
        <div>
            {props.books.map((book) => <p> {book.title} </p> )}
        </div> // bis hier wollten wir unsere book anzeigen
    )

}