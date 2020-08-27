import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function HomeScreen() {
  const [products,setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const {data} = await axios.get("/api/products");
      setProduct(data);
    }
    fetchData(); 
  },[])

    return (
        <div>
           <ul className="products">
                  {
                    products.map(product => 
                      <li key={product._id}>
                        <div className="product">
                            <div>
                                <Link to={'/product/' + product._id}>
                                    <img className="product-image" src={product.image} alt="product"/>
                                </Link>
                            </div>
                            
                            <div className="product-name">{product.name}</div>
                            <div className="product-brand">{product.brand}</div>
                            <div className="product-price">${product.price}</div>
                            <div className="product-review">{product.rating} Stars ({product.numReviews} Reviews)</div>
                        </div>
                      </li>
                    )
                  }
                     
            </ul> 
        </div>
    )
}

export default HomeScreen
