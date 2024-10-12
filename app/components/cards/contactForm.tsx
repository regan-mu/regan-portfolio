import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { ContactInfo } from "@/app/types";
import axios from "axios";

const ContactForm = () => {
    const {register, handleSubmit, setError, reset, formState: {errors, isSubmitting}} = useForm<ContactInfo>();
    const [success, setSuccess] = useState<boolean>(false);
    const submitForm:SubmitHandler<ContactInfo> = async (data) => {
        try {
            await axios.post("/api/sendmail", data);
            setSuccess(true);
            setTimeout(() => {setSuccess(false)}, 3000);
            reset();
        } catch(error) {
            setError("root", {message: "Email not sent"});
        }
    }
    return (
        <div className="w-full px-5 py-10 flex flex-col gap-5 border-t border-gray-300 dark:border-gray-600">
            <div>
                {success && <p className="w-full py-2 bg-green-200 text-green-700 rounded-sm text-xs font-semibold text-center">Success! Email set</p>}
                {errors.root && <p className="w-full py-2 bg-red-200 text-red-600 rounded-sm text-xs font-semibold text-center">{errors?.root?.message}</p>}
                <h3 className="text-xl font-bold">Get in Touch</h3>
                <p className="dark:text-gray-300 text-gray-500 text-sm font-light">Talk to me. Let me know how I can help.</p>
            </div>
            <form onSubmit={handleSubmit(submitForm)} className="w-full flex flex-col gap-3">
                <div className="flex flex-col">
                    <input {...register("name", {required: "Please enter your name"})} className={`w-full h-10 rounded-sm text-gray-100 px-1 text-sm outline-none dark:bg-gray-600 ${errors.name ? " outline-red-500" : "outline-none"}`} placeholder="Your Name" type="text" />
                    {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
                </div>
                <div>
                    <input {...register("email", {required: "Email required", pattern:{value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Invalid email"}})} className={`w-full h-10 rounded-sm text-gray-100 px-1 text-sm outline-none dark:bg-gray-600 ${errors.email ? " outline-red-500" : "outline-none"}`} placeholder="Email Address" />
                    {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
                </div>
                <div>
                    <input {...register("phone", {required: "Please enter your mobile number"})} className={`w-full h-10 rounded-sm text-gray-100 px-1 text-sm outline-none dark:bg-gray-600 ${errors.phone ? " outline-red-500" : "outline-none"}`} placeholder="Phone Number" type="text" />
                    {errors.phone && <p className="text-xs text-red-500">{errors.phone.message}</p>}
                </div>
                <div>
                    <textarea {...register("message", {required: "Please enter your message"})} className={`w-full h-14 resize-none rounded-sm text-gray-100 p-1 text-sm outline-none dark:bg-gray-600 ${errors.message ? " outline-red-500" : "outline-none"}`} placeholder="What's on your Mind?"></textarea>
                    {errors.message && <p className="text-xs text-red-500">{errors.message.message}</p>}
                </div>
                <button disabled={isSubmitting} className="w-full py-2 dark:bg-brand bg-darkBg text-sm text-gray-100 dark:text-gray-800 font-bold rounded-sm hover:bg-opacity-70 disabled:opacity-30 disabled:cursor-not-allowed">Send Message</button>
            </form>
        </div>
    )
}

export default ContactForm;