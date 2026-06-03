const Navbar = () => {
  return (
    <nav className="navbar-custom">

      <div className="logo">
        💎 RelicCheck
      </div>

      <div className="nav-right">
        <button className="btn btn-warning">
          Upgrade
        </button>

        <img
          src="https://i.pravatar.cc/40"
          alt="user"
          className="profile-img"
        />
      </div>

    </nav>
  );
};

export default Navbar;