import React, { useState } from "react";
import { BookInfo } from "../BookInfo/BookInfo";
import "./Book.css";

export interface IBook {
    id: string,
    name: string,
    author: string,
    cover: string
}

interface IBookProps extends IBook {
    onDelete: (bookName: string) => void;
    onSave: (bookId: string, newName: string, newAuthor: string) => void
}

export function Book(props : IBookProps) {
    const [isEditable, setEditableFlag] = useState(false);

    return (
        <div className="card">
            <img 
                className="card-img" 
                src={ props.cover } 
                alt={`${ props.name } — cover`} 
            />
            <BookInfo 
                book={props} 
                isEditable={isEditable} 
                setEditableFlag={setEditableFlag} 
                onDelete={props.onDelete} 
                onSave={props.onSave}
            />
        </div>
    );
}