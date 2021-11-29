import  emailjs  from 'emailjs-com';
import React from 'react';
import './Contact.css';

const Contact = () => {

    const sendEmail = (e) =>{
       e.preventDefault()
       emailjs.sendForm('service_38ybmlg',
        'template_n687r8q',
        e.target,
        'user_RUbcnA2QWAYxKK5RVllUg'
        ).then(res =>{
            console.log(res)
        }).catch(err => console.log(err))
        e.target.reset();
    }
    return (
        <div className="contact_div" id="contact">
           <div className="text-center">
           <h4>CONTACT ME</h4>
            <h1>STAY WITH ME</h1>
           </div>
         <div className="contact_me">
         <div className="row container mx-auto ">
           <div className="col-lg-6 address_info">
            
            <div className="address_div">
                <h4>Address</h4>
                <p><b>Jhigatola, road-1, Dhanmondi <br />
                Dhaka, Bangladesh </b></p>
            </div>

            <div className="email_div">
            <h4>Email Address</h4>
               <p><b>shajjadhossan111@gmail.com
               <br/>0321593489@student.wub.edu.bd</b></p>
            </div>

             <div className="num_div">
                 <h4>Phone Numbers</h4>
                 <p><b>(+880)1317762775
                 <br/>(+880)1907656292</b></p>
             </div>

           </div>
           <div className="col-lg-6">
           <form onSubmit={sendEmail}>
                <label>name</label><br/>
                <input placeholder=" Your Name" className="contact_form" type="text" name="name"/><br/>
                <label>email</label><br/>
                <input placeholder=" Your email address" className="contact_form" type="email" name="user_email"/><br/>
                <label>message</label><br/>
                <textarea placeholder=" write your message " className="contact_form" name="message" rows="4"/><br/>
                <input  className="contact_btn mt-3" type="submit" value="Send"/><br/>
            </form>
           </div>
       </div>
       </div>
        </div>
    );
};

export default Contact;