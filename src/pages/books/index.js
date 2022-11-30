import BookPages from "../../components/BooksPages";

import "./index.css";

function Books() {
    const students = ['Ari', 'Dimas', 'Fadil']
    return(
        <>
            <h1 className="h1">Books</h1>
            <hr />
            <a href="/">Home</a>
            <a href="/books">Books</a>
            <BookPages studentList={students}></BookPages>
        </>
    )
}
export default Books;