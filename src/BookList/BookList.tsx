import { IBook } from "../Book/Book";
import { Book } from "../Book/Book";
import "./BookList.css";

interface IBookListProps {
    books: IBook[];
    onDelete: (bookName: string) => void;
    onSave: (id: string, name: string, author: string) => void;
}

export function BookList(props : IBookListProps) {
    return (
        <div className="book-list__container">
            <ul className="book-list__list">
                { props.books.map(book => (
                    <Book 
                        {...book} 
                        onDelete={props.onDelete} 
                        onSave={props.onSave} 
                        key={book.id}
                    />
                ))}
            </ul>
        </div>
    );
}