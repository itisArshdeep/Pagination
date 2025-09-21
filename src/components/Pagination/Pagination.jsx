import React from 'react'

const Pagination = ({currPage,setCurrPage,TotalPages}) => {

      const pageHandler = (n) => {
        setCurrPage(n);
      }
    
      const toPrevPage = () => {
        setCurrPage(prev => prev - 1);
      }
    
      const toNextPage = () => {
        setCurrPage(prev => prev + 1);
      }

  return (
    <div>
        <div className='pagination'>
      <button disabled={currPage === 0} className='pages' onClick={() => toPrevPage()}>◀️</button> {[...Array(TotalPages).keys()].map(n => <span onClick={() => pageHandler(n)} className={`pages ${currPage === n ? "active" : ""}`}>{n + 1}</span>)}
      <button disabled={currPage === TotalPages - 1} className='pages' onClick={() => toNextPage()}>▶️</button> </div>
    </div>
  )
}

export default Pagination