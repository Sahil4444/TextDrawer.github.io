const Navbar = (props) => {
  // const [themeText, setThemeText] = useState("Enable Dark Mode");
  // const[myTheme, setMyTheme] = useState("light")

  // const handleToggle = () =>{
  //   // console.log("Toggle Clikced")
  //   if(themeText === "Enable Dark Mode"){
  //     setMyTheme("dark");
  //     setThemeText("Enable Light Mode");
  //   }else{
  //     setMyTheme("light");
  //     setThemeText("Enable Dark Mode")
  //   }
  // }

  const boxstyle = {
    boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} style={boxstyle}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Text Drawer
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                About
              </a>
            </li>
          </ul>
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
            <label className={`form-check-label text-${props.mode==="dark"?"light":"dark"}`} htmlFor="flexSwitchCheckDefault">{props.themeText}</label>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
