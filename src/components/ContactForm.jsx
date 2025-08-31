import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
});

const [status, setStatus] = useState(""); 

const handleChange = (event) =>{
  setFormData({
    ...formData,
    [event.target.name]: event.target.value
  });
}

    const  handleSubmit = async (event) => {
        event.preventDefault();
        
       try {
        await emailjs.send(
          'service_rzfmsuj',
          'template_3uezfmr',
          formData,
          'JwgaRwitg0a3gKFy5'
        );
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); 
       } catch (error) {
        setStatus("Failed to send message! Please try again."); 
      }
    };


  return (
    <div className="flex items-center justify-center bg-white pt-40 pb-4 relative z-10">
      
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <h2 className="text-2xl font-bold">Lets work together</h2>
        <label htmlFor ="name">Your Name</label>
        <input id="name" name="name" value={formData.name} className="p-t" type="text" placeholder="Your Name" onChange={handleChange} focus:ring-blue-500 required/>

        <label htmlFor="email">Your Email</label>
        <input id="email" name="email" value={formData.email} type="email" placeholder="Your Email" onChange={handleChange} className="focus:bg-gray-600 focus:border-blue-500" required/>

        <label htmlFor="message">Your Message</label>
        <textarea id="message" name="message" value={formData.message} placeholder="Your Message" className="p-2" onChange={handleChange} required/>
        <button className="bg-gray-500 text-white border rounded-md p-2">Send</button>
        {status && <p>{status}</p>}
      </form>
    </div>
  );


}
