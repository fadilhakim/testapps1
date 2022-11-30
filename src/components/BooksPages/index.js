export default function BookPages(props){
    return(
        <div>
            <h3>Student who rent books by now :</h3>
            <ul>
                {
                    props.studentList.map((students,index) => (
                        <li key={index}>{students}</li>
                    ))
                }
            </ul>
        </div>
    )
}