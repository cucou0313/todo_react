import React, { Component, Fragment } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      // 0:未完成，1：完成
      list: [
        { id: 0, text: "学习", status: 1 },
        { id: 1, text: "吃饭", status: 0 },
        { id: 2, text: "睡觉", status: 0 },
        { id: 3, text: "打豆豆", status: 0 }
      ]
      // list: ["学习", "吃饭", "睡觉", "打豆豆"]
    };
  }

  render() {
    const unfinish = {
      backgroundColor: "rgb(255,251,157)",
      color: "#2EB872"
    };

    const finish = {
      backgroundColor: "rgb(223,253,187)",
      color: "#FF9A3C"
    };

    const divstyle = {
      textAlign: "center"
    };

    return (
      <Fragment>
        <div style={divstyle}>
          <h1>Todo List</h1>
          <input
            id='todo-input'
            value={this.state.inputValue}
            onChange={this.handleInputChange.bind(this)}
          />
          <button id='add-todo' onClick={this.handleBtnClick.bind(this)}>新增</button>
        </div>
        <ul>
          {this.state.list.map((item, index) => {
            // 根据status状态判断todo的完成状态和style样式
            var itemstyle = item.status === 0 ? unfinish : finish;
            return (
              <li style={itemstyle}>
                <h3 id={'todotiem-' + index}>{item.text}</h3>
                <button id={'deltodo-' + index} onClick={this.handleItemDelete.bind(this, index)}>
                  删除
                </button>
                {item.status === 0 ? (
                  <button id={'unfinishtodo-' + index} onClick={this.handleItemUpdate.bind(this, index)}>
                    未完成
                  </button>
                ) : (
                    "已完成"
                  )}
                <hr />
              </li>
            );
          })}
        </ul>
      </Fragment>
    );
  }

  handleInputChange(e) {
    //改变数据，向里面传入对象
    this.setState({
      inputValue: e.target.value
    });
  }

  //add
  handleBtnClick() {
    // document.getElementById('todo-input').value
    // console.log(this.state.list.length);
    var newitem = { id: this.state.list.length, text: this.state.inputValue, status: 0 }
    this.setState({
      list: [...this.state.list, newitem],
      inputValue: ""
    });
  }

  // Update
  handleItemUpdate(index) {
    // eslint-disable-next-line array-callback-return
    this.state.list.map(item => {
      if (item.id === index) {
        item.status = 1;
      }
    });
    this.setState({
      list: [...this.state.list],
      inputValue: ""
    });
    // console.log(index);
  }

  //del
  handleItemDelete(index) {
    const list = [...this.state.list];
    list.splice(index, 1);

    this.setState({
      list
    });
  }
}

export default App;
