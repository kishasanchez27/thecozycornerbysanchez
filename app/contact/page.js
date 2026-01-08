export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-900 py-16 px-6">
      <div className="max-w-2xl mx-auto">
        
        <h2 className="text-4xl font-semibold text-indigo-200 mb-8">
          Contact Us
        </h2>

        <form className="space-y-5">
          <div>
            <label className="block text-slate-300 mb-2">Name</label>
            <input
              type="text"
              className="w-full border border-slate-600 bg-slate-800 text-slate-100 p-3 rounded focus:border-indigo-500 focus:outline-none"
            />
          </div>
          
          <div>
            <label className="block text-slate-300 mb-2">Email</label>
            <input
              type="email"
              className="w-full border border-slate-600 bg-slate-800 text-slate-100 p-3 rounded focus:border-indigo-500 focus:outline-none"
            />
          </div>
          
          <div>
            <label className="block text-slate-300 mb-2">Message</label>
            <textarea
              rows="5"
              className="w-full border border-slate-600 bg-slate-800 text-slate-100 p-3 rounded focus:border-indigo-500 focus:outline-none"
            />
          </div>
          
          <button className="bg-indigo-600 text-white px-8 py-3 rounded hover:bg-indigo-500">
            Send Message
          </button>
        </form>
        
      </div>
    </div>
  );
}