import axios from 'axios';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; 
import './Search.css';

export default function Search() {
    let [searchtxt, setSearchtxt] = useState('');
    let [products, setProducts] = useState([]);
    

    const handleonChange = (e) => {
        setSearchtxt(e.target.value);
    };

    const getData = async () => {
        try {
            let url = 'https://dummyjson.com/products/search?q=' + searchtxt;
            let apiresponse = await axios.get(url);
            setProducts(apiresponse.data.products);
        } catch (ex) {
            alert(ex.message); // Correct error handling
        }
    };

    return (
        <div className='container'>
            <div className='row justify-content-center mt-5'>
                <div className='col-6'>
                    <input 
                      type='text' 
                      className='form-control' 
                      onChange={handleonChange} 
                      placeholder='Search Products' 
                    />
                </div>
                <div className='col-2'>
                    <button className='btn btn-warning' onClick={getData}>
                        Search
                    </button>
                </div>
            </div> 
            {
                products.map((p) => (
                    <div className='row mt-5' key={p.id}>
                        <div className='col-4'>
                            <img src={p.thumbnail} className='img-fluid' alt={p.title} />
                        </div>
                        <div className='col-8 ram'>
                            <h1>{p.title}</h1>
                            <p>{p.description}</p>
                            <h2>${p.price}</h2>
                            <i className="bi bi-star-fill text-warning"></i> {p.rating}<br/>
                            <button className='btn btn-warning mt-3'>Add to Cart</button>
                        </div>
                    </div>
                ))
               
            } 
           
        </div>
    );
}
