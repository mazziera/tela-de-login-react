//hook
import { useState } from "react";

//biblioteca de icones de usuario e  cadeado usados nos inputs
import { FaUser, FaLock } from "react-icons/fa";

//styles file
import "./LoginForm.css";


const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


  const handleSubmitForm = (event) => {
    event.preventDefault();

    //valida o email do usuario esta dentro dos padroes e os inputs estão vazios antes de enviar o formulario
    if (email === emailRegex || email === "" || password === "") {
      alert("campos errados ou vazios vazios");

    } else {
      alert(`enviando os dados`);

      //limpando inputs
     setEmail("");
     setPassword("");
     
    }

  };

  const handleGetEmail = (event) => {
    setEmail(event.target.value);
    
  };

  const handleGetPassword = (event) => {
    setPassword(event.target.value);
    
  };

  return (
    <form className="login_form_container" onSubmit={handleSubmitForm}>

      <h2>Acesse o Sistema</h2>

      <section className="input_field">
        <input
          type="email"
          placeholder="E-mail"
          onChange={handleGetEmail}
          value={email}
        />
        <FaUser className="icon"/>
      </section>

      <section className="input_field">
        <input
          type="password"
          placeholder="Senha"
          onChange={handleGetPassword}
          value={password}
        />
        <FaLock className="icon"/>
      </section>

      <section className="recall_forget" >
        <label>
          <input type="checkbox" />
          lembre de mim
        </label>

        <a href="#">esqueceu sua senha?</a>
      </section>

      <button>Login</button>

      <div>
        Nao tem uma conta? <a href="#"> Registrar</a>
      </div>
    </form>
  );
};

export default LoginForm
