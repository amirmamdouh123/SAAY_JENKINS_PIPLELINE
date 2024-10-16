const DonateForm = () => {
  return (
    <section className="p-5 bg-gray-50">
      <div className="container mx-auto">
        <div className="my-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button className="w-full p-3 text-lg border border-gray-300 rounded-md bg-transparent hover:bg-myGreen-dark hover:text-white">
              مرة واحدة
            </button>
            <button className="w-full p-3 text-lg border border-gray-300 rounded-md bg-myGreen-dark text-white">
              شهري
            </button>
          </div>
        </div>

        <div className="flex justify-center gap-4 mb-5">
          {["50 جنيه", "100 جنيه", "200 جنيه"].map((amount, index) => (
            <label
              key={index}
              className="cursor-pointer text-black bg-gray-100 p-3 rounded-lg hover:bg-gray-200 flex items-center gap-1"
            >
              <input
                type="radio"
                name="donation-amount"
                className="mr-2"
                value={amount}
              />
              {amount}
            </label>
          ))}
        </div>

        <div className="text-center mb-5">
          <select
            className="form-select w-1/2 mx-auto p-3 border border-gray-300 rounded-md outline-none"
            name="company"
            required
          >
            <option value="">اختر شركة</option>
            <option value="company1">رسالة</option>
            <option value="company2">صناع الحياة</option>
            <option value="company3">بنك الطعام المصري</option>
            <option value="company4">بهية</option>
          </select>
        </div>

        <div className="bg-white text-black p-5 rounded-lg shadow-lg mx-auto max-w-lg">
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-black font-bold mb-2">
                الاسم الكامل:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 border border-gray-300 rounded-md outline-none"
                placeholder="الاسم الكامل"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-black font-bold mb-2"
              >
                البريد الإلكتروني:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 border border-gray-300 rounded-md outline-none"
                placeholder="البريد الالكتروني"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-black font-bold mb-2"
              >
                رقم الهاتف:
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="w-full p-3 border border-gray-300 rounded-md outline-none"
                placeholder="رقم الهاتف "
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="amount"
                className="block text-black font-bold mb-2"
              >
                مبلغ التبرع (بالجنيه):
              </label>
              <input
                type="number"
                id="amount"
                name="amount"
                className="w-full p-3 border border-gray-300 rounded-md outline-none"
                placeholder="جنيها مصريا.... "
                min="1"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="payment-method"
                className="block text-black font-bold mb-2"
              >
                طريقة الدفع:
              </label>
              <select
                id="payment-method"
                name="payment-method"
                className="w-full p-3 border border-gray-300 rounded-md outline-none"
                required
              >
                <option value="">اختر طريقة الدفع</option>
                <option value="credit-card">بطاقة ائتمان</option>
                <option value="paypal">PayPal</option>
                <option value="vodafone-cash">فودافون كاش</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-myGreen-dark  text-white p-3 rounded-md hover:bg-myGreen-hover"
            >
              تبرع الآن
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default DonateForm;
