

=======
import React from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store/store";
import { NavLink, useNavigate } from "react-router-dom";
import * as api from '../Auth/api'
import { logout } from "../Auth/authSlice";



function NavBar(): JSX.Element {
  const user = useSelector((store:RootState) => store.auth.user)
  const dispatch = useAppDispatch();
  const navigate = useNavigate()

  const handleLogout = async(): Promise<void> => {
    await api.logoutFetch().then((data) => {
      if (data.message === 'success') {
        dispatch(logout()).catch(console.log)
      }
      navigate('/')
      
    })
  }


    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">

    <a className="navbar-brand" href="main">Shop</a>
=======
    <NavLink className="navbar-brand" to="#">Shop</NavLink>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <NavLink className="nav-link active" aria-current="page" to="#">Home</NavLink>

        {!user ? (
          <>
                  <NavLink className="nav-link" to="sign-up">Войти</NavLink>
                  <NavLink className="nav-link" to="sign-in">Зарегистрироваться</NavLink>
                  </>
        ) : user && (
          <>
                  <NavLink className="nav-link" to="#">Корзина</NavLink>
                  <NavLink className="nav-link" to="#">Избранное</NavLink>
                  <NavLink onClick={handleLogout} to='/logout' className="nav-link" >Выйти</NavLink>
          </>
        )}

      </div>
    </div>
  </div>
</nav>

    )
}

export default NavBar