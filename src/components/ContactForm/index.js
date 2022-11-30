import React, {useState} from "react";
export default function ContactForm(){
    const [contactInfo, setContactInfo] = useState({
        student: '',
        message: ''
    }) 
    return (
        <div>
        <input type="text" name="student" value={contactInfo.student} placeholder="Student Name" />
        <br /><br />
        <textarea name="message" value={contactInfo.message} id="" cols="30" rows="10"></textarea>
    </div>
    )
    
}
