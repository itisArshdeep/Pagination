import React, { useEffect, useState } from 'react'
import ProductCard from './components/Cards/ProductCard';
import Pagination from './components/Pagination/Pagination';

const App = () => {

  const [products, setProducts] = useState([]);
  const [currPage, setCurrPage] = useState(0);

  const fetchdata = async () => {
    const url = 'https://dummyjson.com/products?limit=300';
    const fetchin = await fetch(url);
    const data = await fetchin.json();
    setProducts(data.products)
  }

  useEffect(() => {
    fetchdata();
  }, [])

  const startPage = currPage * 12;
  const endPage = startPage + 12;
  const TotalPages = Math.ceil(products.length / 12);

  return (<>{products.length < 0 ? " no products" : <> <div className='HomePage'>
    <h1>pagination</h1>
    <div className='container '>
      {products.slice(startPage, endPage).map((e, i) => <> <ProductCard key={e.id} id={e.id} title={e.title} image={e.thumbnail} /></>)}
    </div>
  </div>
    <Pagination currPage={currPage} setCurrPage={setCurrPage} TotalPages={TotalPages} />
  </>}
  </>
  )
}

export default App