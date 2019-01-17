import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import constants from './constants'
import PropTypes from 'prop-types';

/* 
 * ShoppingCart 드래그 앤드 드롭 사양
 * "드롭 대상 사양을 구현하는 일반 객체"
 * 
 * - DropTarget 메서드 ( 모두 선택적 )
 * - drop: 호환되는 항목이 드롭되면 호출된다.
 * - hover: 항목으로 컴포넌트를 가리키면 호출된다.
 * - canDrop: 드롭 대상이 항목을 수락할 수 있는지 여부를 지정하는데 이용된다.
 * 
 */
const ShoppingCartSpec = {
  drop() {
    return { name: 'ShoppingCart' };
  }
}

/*
 * ShoppingCart DropTarget - collect
 * 콜랙팅 함수
 * 
 * - connect: DropTargetConnector의 인스턴스
 * 드롭 대상 역할을 DOM 노드에 할당하는데 이용.
 * 
 * - moniter: DropTargetMonitor의 인스턴스
 * 리액트 DnD에서 속성으로 상태를 연결하는데 이용.
 * 상태를 얻는 데 이용할 수 있는 함수로는 canDrop(), isOver(), didDrop() 등이 있다.
 * 
 */

 const collect = ( connect, moniter ) => {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: moniter.isOver(),
    canDrop: moniter.canDrop(),
  };
 }

class ShoppingCart extends Component {
  render() { 
    const { canDrop, isOver, connectDropTarget } = this.props;
    const isActive = canDrop && isOver;

    let backgroundColor = '#FFF';
    if (isActive) {
      backgroundColor = '#F7F7BD';
    } else if (canDrop) {
      backgroundColor = '#F7F7F7';
    }

    const style = {
      backgroundColor: backgroundColor,
    };

    return connectDropTarget(
      <div className="shopping-cart" style={style}>
        {
          isActive ?
            'Hummm, snack!' :
            'Drag here to order!'
        }
      </div>
    );
  }
}
 
ShoppingCart.propTypes = {
  canDrop: PropTypes.bool.isRequired,
  isOver: PropTypes.bool.isRequired,
  connectDropTarget: PropTypes.func.isRequired,
}

export default DropTarget(constants.SNACK, ShoppingCartSpec, collect)(ShoppingCart);