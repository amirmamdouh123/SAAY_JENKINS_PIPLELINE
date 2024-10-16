const JoinusForm = () => {
  return (
    <section className="py-12 bg-gray-50" id="form">
      <div className="container">
        <form className="p-8 shadow-lg rounded bg-white">
          <h2 className="text-2xl font-bold text-center mb-6">انضم إلينا</h2>

          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 font-medium">
              الاسم الكامل
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border border-gray-300 rounded p-3 outline-none"
              placeholder="أدخل اسمك"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-medium">
              البريد الإلكتروني
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-300 rounded p-3 outline-none"
              placeholder="أدخل بريدك الإلكتروني"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block mb-2 font-medium">
              رقم الهاتف
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full border border-gray-300 rounded p-3 outline-none text-right"
              placeholder="أدخل رقم هاتفك"
              required
              pattern="[0-9]{10,15}"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="resume" className="block mb-2 font-medium">
              السيرة الذاتية
            </label>
            <input
              type="file"
              id="resume"
              name="resume"
              className="w-full border border-gray-300 rounded p-3 outline-none"
              accept=".pdf,.doc,.docx"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-myGreen-dark text-white py-3 rounded-lg hover:bg-myGreen-hover transition-colors"
          >
            إرسال الطلب
          </button>
        </form>
      </div>
    </section>
  );
};

export default JoinusForm;
