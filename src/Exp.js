import React, { Component } from 'react'
import { withTranslation } from 'react-i18next'
import { connect } from 'react-redux';

import { add, sub } from "./actions";


class Exp extends Component {

 changeLanguage = lng => {
    const { i18n } = this.props;
    i18n.changeLanguage(lng);
  }

  add() {
    this.props.add();
  }

  sub() {
    this.props.sub();
  }

  render() {
    const { t, count } = this.props;

    return (
      <div>
        <h2>{t('home')}</h2>
      <p>{t('welcome')}</p>
        <button onClick={this.changeLanguage.bind(this, 'zh')}>中文</button>
        <button onClick={this.changeLanguage.bind(this, 'en')}>英语</button>

        <hr></hr>
        <p>测试redux</p>
        <h3>{count}</h3>
        <button onClick={this.add.bind(this)}>+</button>
        <button onClick={this.sub.bind(this)}>-</button>
      </div>
    )
  }
}


const mapStateToProps= (state) => {//固定接收state参数,把store里面的数据转化为组件里面的props
  console.log(state);
  return{
      count: state.count
  }
}


const connectExp = connect(mapStateToProps, {add, sub})(Exp);

export default withTranslation()(connectExp);