import React, { Component } from 'react';
import ShoppingCart from './ShoppingCart';
import Snack from './Snack';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import './css/Style.css';

class Container extends Component {
  render() { 
    return ( 
      <div className='App'>
        <Snack name='Chips' />
        <Snack name='Cupcake' />
        <Snack name='Dount' />
        <Snack name='Doritos' />
        <Snack name='Popcorn' />
        <ShoppingCart />
      </div>
     );
  }
}
export default DragDropContext(HTML5Backend)(Container);