import React, { Component } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import "./css/AnimatedShoppingList.css";

class AnimatedShoppingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { id: 1, name: "Milk" },
        { id: 2, name: "Yogurt" },
        { id: 3, name: "Orange Juice" }
      ]
    };
  }

  handleChange = e => {
    if (e.key === "Enter" && e.target.value.trim()) {
      // 타겟에 맞는 객체 생성.
      const newItem = { id: Date.now(), name: e.target.value.trim() };

      // 타겟의 객체를 넣은 State의 items객체
      const newItems = this.state.items.concat(newItem);

      // value 초기화
      e.target.value = "";

      // state를 생성한 값으로 변경.
      this.setState({
        items: newItems
      });
    }
  };

  handleRemove = i => {
    // state의 items배열
    const newItems = this.state.items;

    // 파라미터로 받아온 index가 items배열에서 해당하는 위치의 데이터를 제거.
    // splice() 메서드는 첫번째 파라미터로 해당 인덱스값을 받고,
    // 두번째 파라미터로 지울 값을 설정
    // 세번째 부터는 생성할 값을 지정해 줄 수 있다.
    newItems.splice(i, 1);

    // items에 변경된 배열을 담음.
    this.setState({
      items: newItems
    });
  };

  render() {
    const shoppingItems = this.state.items.map((item, i) => (
      <div key={item.id} className="item" onClick={() => this.handleRemove(i)}>
        {item.name}
      </div>
    ));

    return (
      <div>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
          transitionAppear={true}
          transitionAppearTimeout={500}
        >
          {shoppingItems}
        </ReactCSSTransitionGroup>
        <input type="text" onKeyDown={e => this.handleChange(e)} />
      </div>
    );
  }
}

export default AnimatedShoppingList;
