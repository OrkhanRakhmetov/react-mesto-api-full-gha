import { useState } from "react";
import { Link } from "react-router-dom";

function Register({ handleRegister }) {
  const [formValue, setFormValue] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister(formValue);
  };

  return (
    <section className="auth">
      <form onSubmit={handleSubmit}>
        <h2 className="auth__title">Регистрация</h2>
        <input
          name="email"
          type="email"
          value={formValue.email || ""}
          className="auth__input"
          onChange={handleChange}
          placeholder="Email"
          minLength="6"
          maxLength="30"
          required
        />

        <input
          name="password"
          type="password"
          value={formValue.password || ""}
          className="auth__input"
          onChange={handleChange}
          placeholder="Пароль"
          minLength="6"
          maxLength="30"
          required
        />
        <button className="auth__button" type="submit">
          Зарегистрироваться
        </button>
      </form>
      <p className="auth__subtitle">
        Уже зарегистрированы?
        <Link className="auth__enter" to="/sign-in" >
          Войти
        </Link>
      </p>
    </section>
  )
}

export default Register;