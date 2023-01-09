import React from "react";
import { useForm } from "react-hook-form";
import AuthNavigate from "../../../components/AuthNavigate/AuthNavigate";
import AuthSubmit from "../../../components/AuthSubmit/AuthSubmit";
import { TextInput } from "../../../components/TextInput/TextInput";
import "./index.scss"

function Login() {

  const {
    register,
    handleSubmit,
    formState: {errors, isValid}
  } = useForm({
    mode: "onBlur"
  })

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div className="auth_container">
      <form className="auth_container_form" onSubmit={handleSubmit(onSubmit)}>
        <h2>Authorization</h2>
        <div>
          <TextInput 
            type="text"
            placeholder="Username"
            {...register("username", {
              required: "Incorrect Username",
              maxLength: {
                value: 10,
                message: "Max length must should be 10"
              }
            })}
          />
          <p className="errors">
            {errors.username?.message && errors.username.message}
          </p>
        </div>
        <div>
          <TextInput 
            type="password"
            placeholder="Password"
            {...register("password", {
              required: "Incorrect Password",
              minLength: {
                value: 4,
                message: "Min length must should be 4"
              }
            })}
          />
          <p className="errors">
            {errors.password?.message && errors.password.message}
          </p>
        </div>
        <p className="success">
          {isValid && "Successfull"}
        </p>
        <div>
          <AuthSubmit 
            isValid={isValid} 
            caption={"Login"}
          />
        </div>
        <AuthNavigate 
          location="loginPage" 
        />
      </form>
    </div>
  )
}

export default Login;