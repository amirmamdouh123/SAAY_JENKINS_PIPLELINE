import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

const contactSchema = z.object({
  fullName: z.string().min(2, "الاسم بالكامل يجب أن يحتوي على حرفين على الأقل"),
  email: z.string().email("البريد الإلكتروني غير صحيح"),
  phone: z.string().min(10, "رقم الهاتف غير صحيح"),
  message: z.string().min(10, "يجب أن تحتوي الرسالة على 10 أحرف على الأقل"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      const response = await axios.post(
        `${process.env.VITE_BASE_URL}/callUs`,
        data
      );
      console.log("API Response:", response.data);
      alert("تم إرسال رسالتك بنجاح!");
    } catch (error) {
      console.error("API Error:", error);
      alert("حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.");
    }
  };

  return (
    <section className="contact_us py-12 pt-24 bg-gray-50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row flex-wrap">
          <div className="hidden md:block lg:w-1/2 md:w-1/2 left-section p-6 bg-[url('assets/contact.jpg')] bg-cover bg-center bg-no-repeat relative">
            <div className="absolute w-full h-full bg-black/70 top-0 left-0"></div>
            <div className="text-white relative text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <h1 className="text-3xl mb-4">نحن هنا لمساعدتك!</h1>
              <p>لا تتردد في التواصل معنا. نحن نسعى لتقديم أفضل خدمة ممكنة.</p>
            </div>
          </div>

          <div className="lg:w-1/2 md:w-1/2">
            <form
              className="bg-white p-6 rounded-lg shadow-md"
              onSubmit={handleSubmit(onSubmit)}
            >
              <h3 className="text-xl mb-4 font-bold">تواصل معنا</h3>

              <div className="mb-3">
                <label
                  className="form-label block font-bold mb-1"
                  htmlFor="fname"
                >
                  الاسم بالكامل
                </label>
                <input
                  type="text"
                  className="outline-none w-full p-2 border border-gray-300 rounded"
                  id="fname"
                  placeholder="أدخل اسمك الكامل"
                  {...register("fullName")}
                />
                {errors.fullName && (
                  <p className="text-red-500">{errors.fullName.message}</p>
                )}
              </div>

              <div className="mb-3">
                <label
                  className="form-label block font-bold mb-1"
                  htmlFor="email"
                >
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  className="outline-none w-full p-2 border border-gray-300 rounded"
                  id="email"
                  placeholder="أدخل بريدك الإلكتروني"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </div>

              <div className="mb-3">
                <label
                  className="form-label block font-bold mb-1"
                  htmlFor="phone"
                >
                  رقم الهاتف
                </label>
                <input
                  type="text"
                  className="outline-none w-full p-2 border border-gray-300 rounded"
                  id="phone"
                  placeholder="أدخل رقم هاتفك"
                  {...register("phone")}
                />
                {errors.phone && (
                  <p className="text-red-500">{errors.phone.message}</p>
                )}
              </div>

              <div className="mb-3">
                <label
                  className="form-label block font-bold mb-1"
                  htmlFor="message"
                >
                  رسالتك
                </label>
                <textarea
                  className="outline-none w-full p-2 border border-gray-300 rounded"
                  id="message"
                  rows={5}
                  placeholder="أدخل رسالتك"
                  {...register("message")}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="btn w-full bg-myGreen-dark hover:bg-myGreen-hover text-white py-2 rounded"
              >
                إرسال
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
