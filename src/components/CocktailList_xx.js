import React from 'react'
import Cocktail from './Cocktail_xx'
import Loading_xx from './Loading_xx'
import { useGlobalContext } from '../context'
import Cocktail_xx from './Cocktail_xx'

const CocktailList_xx = () => {
  const { loading, cocktails } = useGlobalContext();
  if(loading){
    return <Loading_xx />
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
            return <Cocktail_xx key={item.id} {...item} />
          })
        }
      </div>
    </section>
  )
}

export default CocktailList_xx
