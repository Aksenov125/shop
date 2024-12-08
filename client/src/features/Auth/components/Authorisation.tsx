import React from "react";
import { SubmitHandler, useForm } from 'react-hook-form';
import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { UserLog } from "../type";
import { RootState, useAppDispatch } from "../../../store/store";
import { useSelector } from "react-redux";
import { loginThunk } from "../authSlice";

function Authorisation(): JSX.Element{
  const message = useSelector((store:RootState) => store.auth.message)
  const navigate = useNavigate()

  const dispatch = useAppDispatch()
  const checkfild = object().shape({
    email: string().required('Необходимо указать электронную почту'),
    password: string().required('Необходимо указать пароль'),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserLog>({ resolver: yupResolver(checkfild) });

  const login: SubmitHandler<UserLog> = (data:UserLog) => {
    dispatch(loginThunk(data)).catch(console.log)
  }
  if(message === 'ok'){
    
    navigate('/')

  }




    return(
<form onSubmit={handleSubmit(login)}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" {...register('email')} />

  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" {...register('password')}/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
)
}

export default Authorisation