import React from "react";
import { SubmitHandler, useForm } from 'react-hook-form';
import { object, ref, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch } from "../../../store/store";
import { useNavigate } from "react-router-dom";
import { authRegistration } from "../authSlice";
import { RegUser } from "../type";

function Registrarion(): JSX.Element{
    const dispatch = useAppDispatch()
    const navigate = useNavigate()


    const checkfild = object().shape({
        username: string().required('Необходимо указать имя'),
        email: string().required('Необходимо указать электронную почту'),
        password: string()
          .required('Необходимо указать пароль')
          .min(8, 'Пароль должен быть более 8 символов')
          .max(25, 'Пароль должен быть не более 25 символов'),
        rpassword: string()
          .required('Необходимо подтвердить пароль')
          .min(8, 'Пароль должен быть более 8 символов')
          .max(25, 'Пароль должен быть не более 25 символов')
          .oneOf([ref('password')], 'Пароли не совпадают'),
      });

      const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<RegUser>({ resolver: yupResolver(checkfild) });

      const registration: SubmitHandler<RegUser> = (data) => {
        dispatch(authRegistration(data)).catch(console.log);
        navigate('/');
      };

    return(
<form onSubmit={handleSubmit(registration)}>
<div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
    <input type="text" className="form-control" {...register('username')}/>
    
    <div id="emailHelp" className="form-text"></div>
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>

    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" {...register('email')} />
    <div id="emailHelp" className="form-text"></div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" {...register('password')}/>
    <div className="color-er">{errors.password?.message}</div>
    

  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Return Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" {...register('rpassword')}/>
    
  </div>
  <button type="submit" className="btn btn-primary">Войти</button>
</form>
    )
}

export default Registrarion