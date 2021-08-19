
const Header = () => {
  return(
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">Kharedo.com</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                      <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="https://github.com/Furqan859/first-app">Link</a>
                  </li>
                  <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                         data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Dropdown
                      </a>
                      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                          <a className="dropdown-item" href="#">Action</a>
                          <a className="dropdown-item" href="#">Another action</a>
                          <div className="dropdown-divider"></div>
                          <a className="dropdown-item" href="#">Something else here</a>
                      </div>
                  </li>

              </ul>
              <form className="d-flex">
                  <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
          </div>
      </nav>
  )
}
export default Header;








// import React from "react";
// const Header = () => {
//     return (
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//             <div className="container-fluid">
//                 <a className="navbar-brand" href="#">StoreByFurqan</a>
//                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
//                         data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
//                         aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                         <li className="nav-item">
//                             <a className="nav-link active" aria-current="page" href="#">Cart</a>
//                         </li>
//                     </ul>
//                     <form className="d-flex">
//                         <input className="form-control me-2" type="search" placeholder="Search"
//                                aria-label="Search"/>
//                         <button className="btn btn-outline-success" type="submit">Search</button>
//                     </form>
//                 </div>
//             </div>
//         </nav>
//     )
// }
// export default Header;