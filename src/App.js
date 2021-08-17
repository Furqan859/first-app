import React, {useState} from "react";

const App = () => {
    const [products, setProducts] = useState([
        {
            id: 1,
            name: "Samsung",
            price: "5000",
            image: "https://th.bing.com/th/id/R.959d1a5f2cef246c0f904a0302b50d7e?rik=xoYLGR4Y8fsUTw&pid=ImgRaw&r=0"
        },
        {
            id: 2,
            name: "Oneplus",
            price: "6000",
            image: "https://www.gsmarena.com.bd/images/products/oneplus-3.jpg"
        },
        {
            id: 3,
            name: "Realme",
            price: "7000",
            image: "https://i1.wp.com/www.theunbiasedblog.com/wp-content/uploads/2018/11/Screenshot_20181128-140021.jpg?fit=800%2C722&ssl=1"
        },
        {
            id: 4,
            name: "Huawei",
            price: "8000",
            image: "https://d28i4xct2kl5lp.cloudfront.net/product_images/110792_20a645ad-8c77-4f96-9252-b722fff7edb8.jpg"
        },
    ])
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">StoreByFurqan</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Cart</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search"
                                   aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            <div className="container-fluid">
                <h1 className="display-4">Mobiles</h1>
                <div className="row">
                    {products.map((product, index) => (
                        <div className="col" key={index}>
                            <div className="card" style={{ width: "18rem"}}>
                                <img src={product.image} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="lead">{product.price}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default App;