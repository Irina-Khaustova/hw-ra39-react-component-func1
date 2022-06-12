import React from 'react'
import PropTypes from 'prop-types'
import Models from '../models/models.js';

function ShopItemFunc(props) {
  const {item} = props;
  console.log(item)
  console.log(new Models(item.brand, item.title, item.description, item.descriptionFull, item.price, item.currency))
  return (
    <div className='main-content'>
       <h2>{item.brand}</h2>
       <h1>{item.title}</h1>
       <h3>{item.description}</h3>
       <div className='description'>{item.descriptionFull}</div>
       <div className="highlight-window mobile">
        <div className="highlight-overlay"></div>
      </div>
      <div className="divider"></div>
      <div className="purchase-info">
        <div className="price">{item.currency + item.price + '.00'}</div>
        <button>Добавить в корзину</button>
      </div>
    </div>
  )
}

ShopItemFunc.propTypes = {
  item: PropTypes.instanceOf(Models).isRequired
}

export default ShopItemFunc