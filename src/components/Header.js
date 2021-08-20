import {Container, Nav, Navbar} from "react-bootstrap";

const Header = () => {
  return(
  <div>
      <Navbar bg="dark" variant="dark">
          <Container>
              <Navbar.Brand href="#home">Kharedo.com</Navbar.Brand>
              <Nav className="" style={{ marginLeft: "auto"}}>
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/cart">Cart</Nav.Link>
                  <li><a href="/login"><nav className="glyphicon glyphicon-log-in"></nav>Login</a></li>
              </Nav>
          </Container>
      </Navbar>
  </div>
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