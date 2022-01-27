import React, { Dispatch, SetStateAction, useState } from "react";
import { IBook } from "../Book/Book";
import './BookInfo.css'

interface IBookInfoProps {
    book: IBook;
    isEditable: boolean;
    setEditableFlag: Dispatch<SetStateAction<boolean>>;
    onDelete: Function;
    onSave: Function
}

export function BookInfo(props : IBookInfoProps) {
    const [bookName, setBookName] = useState<string>(props.book.name);
    const [authorName, setAuthorName] = useState<string>(props.book.author);

    if (props.isEditable) {
        return (
            <div className="info-container edit">
                <label htmlFor="name">Book name</label>
                <input 
                    type="text" 
                    value={bookName} 
                    onChange={e => setBookName(e.target.value)} 
                    className="name" 
                />
                <label htmlFor="author">Author</label>
                <input 
                    type="text" 
                    value={authorName}
                    onChange={e => setAuthorName(e.target.value)} 
                    className="author" 
                />
                <button onClick={() => {
                    props.onSave(props.book.id, bookName, authorName);
                    props.setEditableFlag(false);
                }}>Save</button>
            </div>
        );
    } else {
        return (
            <div className="info-container">
                <h3 className={props.book.name}>{props.book.name}</h3>
                <p className={props.book.author}>{props.book.author}</p>
                <div className="button-container">
                    <button onClick={() => props.setEditableFlag(true)}>Edit</button>
                    <button onClick={() => props.onDelete(props.book.name)}>Delete</button>
                </div>
            </div>
        );
    }
}