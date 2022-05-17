import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useRouter } from 'next/router';
import axios from "axios";
import userService from "../../services/user.services";

const Index = () => {

  const router = useRouter();
  const [user, setUser] = useState();
  const submitLogin = (e) => {
    axios
      .post('http://localhost:1337/api/auth/local', {
        identifier: user.username,
        password: user.password,
      })
      .then(response => {
        // Handle success.
        console.log(e);
        console.log("reponse : ", response);
        console.log('User profile', response.data.user);
        console.log('User token', response.data.jwt);
        localStorage.setItem("jwt", response.data.jwt);
        console.log("success !");
        //router.push("/");
        userService.getMe(localStorage.getItem('jwt'))
          .then(data => {
            console.log("result : ", data);
            setUser(data);
          })
          .catch(err => console.log(err));

      })
      .catch(error => {
        // Handle error.
        console.log('An error occurred:', error.response);
      });
    e.preventDefault();

  }
  return (
    <div className="page__login">
      <form className="form" onSubmit={(e) => submitLogin(e)}>

        <Input
          label="Identifiant"
          name="username"
          id="username"
          type="text"
          classes="form__input"
          required={true}
          placeholder="Veuillez saisir votre identifiant"
          handleChange={(e) => setUser({ ...user, username: e.target.value })}
        />
        <Input
          label="Mot de passe"
          name="password"
          id="password"
          type="password"
          classes="form__input"
          required={true}
          placeholder="Veuillez saisir votre mot de passe"
          handleChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <Button title="envoyer" classes="btn btn__color-black" type="submit" />
      </form>
    </div>
  );
};

export default Index;