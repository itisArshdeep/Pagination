import React, { useEffect, useState } from 'react'
import ProductCard from './components/Cards/ProductCard';

const App = () => {

  const [products,setProducts] = useState([]);
  const [currPage,setCurrPage] = useState(0);

  const fetchdata = async ()=>{
    const url = 'https://dummyjson.com/products?limit=300';
    const fetchin = await fetch(url);
    const data  = await fetchin.json();
    setProducts(data.products)
  }

  const pageHandler = (n)=>{
    setCurrPage(n);
  }

  const toPrevPage = ()=>{
    setCurrPage( prev=> prev-1);
  }

  const toNextPage =()=>{
    setCurrPage(prev => prev+1);
  }

  useEffect(()=>{
    fetchdata();
  },[products])

  const startPage  = currPage *12;
  const endPage = startPage + 12;
  const TotalPages = Math.ceil(products.length /12);

  return (  <>{ products.length < 0 ? " no products" :<> <div className='HomePage'>
    <h1>pagination</h1>
    <div className='container '>
      {products.slice(startPage,endPage).map((e,i) =><> <ProductCard key={e.id} id={e.id} title={e.title} image={e.thumbnail} /></>)}
    </div>
</div>
<div className='pagination'>
 <button disabled={currPage === 0} className='pages' onClick={()=>toPrevPage()}>◀️</button> {[...Array(TotalPages).keys()].map( n=> <span onClick={() => pageHandler(n)} className={`pages ${currPage ===n ? "active":""}`}>{n+1}</span>)}
<button disabled={currPage === TotalPages-1} className='pages'  onClick={()=>toNextPage()}>▶️</button> </div></>}
</>
  )
}

export default App