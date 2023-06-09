import React from "react";


const Login = (props) => {
  // console.log(props);
  const [formValue, setFormValue] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.handleLogin(formValue);
  };

  return (
    <section className="auth">
      <h2 className="auth__title">Вход</h2>
      <form
        onSubmit={handleSubmit}
      >
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
        <button className={`auth__button`} type="submit">
          Войти
        </button>
      </form>
    </section>
  );
};

export default Login;