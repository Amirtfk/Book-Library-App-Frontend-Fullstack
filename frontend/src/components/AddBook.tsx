import {ChangeEvent, useState} from "react";

type AddBookProps = {
    onAddBook : (sth: string) => void
}

export default function AddBook(props: AddBookProps) {

    const [sth, setSth] = useState("")

    const onSthChanged = (event: ChangeEvent<HTMLInputElement>) => {
        //Change something
        setSth(event.target.value)
    }



    return (
        <div>
            <input className={"input-style"} onChange={onSthChanged} value={sth} />
            <button className={"button-style"} onClick={() => props.onAddBook(sth)} >Add</button>
        </div>

    )

}