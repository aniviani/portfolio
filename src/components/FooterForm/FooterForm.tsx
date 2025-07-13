import React, { useState } from 'react';
import './FooterForm.css';

interface IFooterForm {
  name: string;
  email: string;
  message: string;
}

const FooterForm: React.FC = () => {
  const [form, setForm] = useState<IFooterForm>({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert('Пожалуйста, заполните все поля.');
      return;
    }

    console.log('Отправлено:', form);
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });

    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <form className="footer-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Имя"
        value={form.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />
      <textarea
        name="message"
        placeholder="Ваше сообщение"
        value={form.message}
        onChange={handleChange}
      />
      <button type="submit">Отправить</button>
      {submitted && (
        <p className="success-msg">Спасибо! Я скоро свяжусь с вами.</p>
      )}
    </form>
  );
};

export default FooterForm;
