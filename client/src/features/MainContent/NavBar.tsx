


function NavBar(): JSX.Element {



    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="main">Shop</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
        <a className="nav-link" href="#">Корзина</a>
        <a className="nav-link" href="#">Избранное</a>
        <a className="nav-link" href="sign-up">Войти</a>
        <a className="nav-link" href="sign-in">Зарегистрироваться</a>
      </div>
    </div>
  </div>
</nav>

    )
}

export default NavBar