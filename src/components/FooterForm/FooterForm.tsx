import React, { useState } from 'react';
import './FooterForm.css';

interface IFooterForm {
  name: string;
  email: string;
  message: string;
}

const FooterForm: React.FC = () => {
  const [form, setForm] = useState<IFooterForm>({
    name: '',
    email: '',
    message: '',
  });
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

    fetch('https://formsubmit.co/a3a79082e036d3d25a9c9c9a426d4e56', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        message: form.message,
        _subject: 'Новое сообщение с сайта',
        _captcha: false,
      }),
    })
      .then((res) => {
        if (res.ok) {
          setSubmitted(true);
          setForm({ name: '', email: '', message: '' });
          setTimeout(() => setSubmitted(false), 3000);
        } else {
          alert('Ошибка при отправке. Попробуйте позже.');
        }
      })
      .catch(() => {
        alert('Ошибка соединения. Проверьте интернет.');
      });
  };

  return (
    <form className="footer-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="_honey"
        style={{ display: 'none' }}
        tabIndex={-1}
        autoComplete="off"
      />
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
