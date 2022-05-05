import React from 'react'
import Loading_08 from './Loading_08'
import { useGlobalContext } from '../context/context_08'
import Cocktail_08 from './Cocktail_08'

const CocktailList_08 = () => {
  const { loading, cocktails } = useGlobalContext();
  if(loading){
    return <Loading_08 />
  }

  if(cocktails.length < 1) {
    return (
      <h2 className='section-title'>
        no cocktails matched your search criteria
      </h2>
    )
  }
  return (
    <section className="section">
      <h2 className="section-title">cocktails</h2>
      <div className="cocktails-center">
        {
          cocktails.map( (item) => {
            return <Cocktail_08 key={item.id} {...item} />
          })
        }
      </div>
    </section>
  )
}

export default CocktailList_08
