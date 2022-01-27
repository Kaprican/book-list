import { useState } from 'react';
import { IBook } from '../Book/Book';
import './BookAdder.css';

interface IBookAdderProps {
    onSave: (book: IBook) => void;
}

export function BookAdder(props: IBookAdderProps) {
    const [bookName, setBookName] = useState<string>("");
    const [authorName, setAuthorName] = useState<string>("");

    return (
        <form className="form">
            <h1>Add your book</h1>
            <label htmlFor="name">Book name</label>
            <input 
                type="text"
                name="name"
                value={bookName}
                onChange={e => setBookName(e.target.value)}
            />
            <label htmlFor="author">Author</label>
            <input 
                type="text"
                name="author"
                value={authorName}
                onChange={e => setAuthorName(e.target.value)}
            />

            <button onClick={(e) =>{
                e.preventDefault();

                const newBook: IBook = {
                    id: bookName + authorName,
                    name: bookName,
                    author: authorName,
                    cover: '',
                };

                props.onSave(newBook);

                /** reset form state */
                setAuthorName('');
                setBookName('');
            }}>
                Add
            </button>
        </form>
    )
}