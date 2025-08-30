
export default function ContactForm() {

    function handleSubmit(event) {
        event.preventDefault();
        alert("Message sent!");
    }

  return (
    <div className="flex items-center justify-center bg-white pt-40 pb-4 relative z-10">
      
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <h2 className="text-2xl font-bold">Lets work together</h2>
        <input className="p-t" type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message" className="p-2"/>
        <button className="bg-gray-500 text-white border rounded-md p-2">Send</button>
      </form>
    </div>
  );
}
