import React from "react";
const Contact = ()=>{
    return(
        <div className="container">
            <form action='action_page.php'>
                <label for='name'>Name</label>
                <input type='text' id='myName' className="name" placeholder="John Smith.."></input>
                <label for='email'>E-mail</label>
                <input type='text' id='e-mail' className="userEmail" placeholder="Email.."></input>
                <label for='message'>Leave a message</label>
                <textarea id='message-area' className="msg" placeholder="Message.."></textarea>
                <input type='submit' value='submit'></input>
            </form>
        </div>
    )
}
export default Contact;