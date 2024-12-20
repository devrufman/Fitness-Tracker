const Contact = () => {
    return (
      <div className="p-8 bg-primary" >
        <h2 className="text-3xl font-kristen text-center text-secondary mb-4">
          Contact Us
        </h2>
        <form className="max-w-lg mx-auto space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-2 border rounded border-secondary font-kristen"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded border-secondary font-kristen"
          />
          <textarea
            placeholder="Message"
            className="w-full p-2 border rounded border-secondary font-kristen"
          ></textarea>
          <button className="bg-secondary text-black px-4 py-2 rounded hover:bg-highlight transition font-kristen">
            Send
          </button>
        </form>
      </div>
    );
  };
  
  export default Contact;