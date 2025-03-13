import { ChangeEvent, FormEvent, useState } from "react";
import { FaCheck } from "react-icons/fa";
import styles from "./form.module.css";
import emailjs from 'emailjs-com';
import MessageBox from "../../MessageBox/MessageBox";
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
}

export default function Form(): JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState("default");
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Simple email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Message is required";
    }

    return newErrors;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setStatus("loading");

    await sendEmail();
    setIsSubmit(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };


  const sendEmail = async () => {
    try {
      const response = await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          to_name: 'Apurva Arts',
          from_name: formData.name,
          subject: formData.subject,
          message: formData.message,
          reply_to: formData.email,
        },
        'YOUR_PUBLIC_KEY'
      );
  
      console.log('Email sent successfully:', response);
      setStatus("success");
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus("error");
    }
  };
  

  return (
    <div className={styles.formSection}>
      <div className={styles.firstline}>
        <div className={styles.line}></div>
        <p>CONTACT US</p>
      </div>
      <div className={styles.text}>
        Get in Touch with <span>Apurva Arts!</span>
      </div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputs}>
          <div className={styles.inputbox}>
            <label htmlFor="name">Your name * </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            {errors.name && <span>{errors.name}</span>}
          </div>
          <div className={styles.inputbox}>
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && (
              <span className="text-red-500 text-sm">{errors.email}</span>
            )}
          </div>
        </div>
        <div className={styles.inputbox}>
          <label htmlFor="subject">Subject *</label>
          <input
            type="text"
            name="subject"
            placeholder="Enter Subject"
            value={formData.subject}
            onChange={handleChange}
          />
          {errors.subject && <span>{errors.subject}</span>}
        </div>
        <div className={styles.inputbox}>
          <label htmlFor="message">Your message</label>
          <textarea
            name="message"
            placeholder="Enter Here.."
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button
          className={`${styles.button} ${styles[status]}`}
          type="submit"
          disabled={status === "loading"}
        >
          {status === "default" && (
            <span className={styles.submit}>Submit</span>
          )}
          {status === "loading" && (
            <span className={styles.loading}>Loading...</span>
          )}
          {status === "success" && (
            <span className={styles.check}>
              <FaCheck size={20} />
            </span>
          )}
        </button>
         {status === "error" && (
            <p>Failed to send email. Try again.</p>
          )}
      </form>
      {isSubmit && (
        <div className={styles.modelOverlay}>
          <MessageBox submit={setIsSubmit} status={setStatus} />
        </div>
      )}
    </div>
  );
}
