import React, { Component } from 'react';
import styles from './drink.module.less';
import Header from '../../components/header/header';
import SideNav from '../../components/sideNav/sideNav'
import { connect } from 'react-redux'
import ListRender from '../../components/listRender/listRender';
import { incrementDrinkLoveNums, addMoreDrinkListMsg } from '../../actions/listRender'

class Drink extends Component {

  handleIncrement = (data) => {
    this.props.incrementDrinkLoveNums(data);
  }

  handleGetMoreList = () => {
    const drPage = this.props.drPage
    this.props.addMoreDrinkListMsg(drPage);
  }


  render() {
    const {renderList} = this.props
    return (
      <div className={styles.drinkWrap}>
        <Header history = {this.props.history}/>
        <SideNav />
        <ListRender 
          list ={renderList.drinkList} 
          handleIncrement={this.handleIncrement.bind(this)}
          handleGetMoreList={this.handleGetMoreList.bind(this)}
        ></ListRender>
      </div>
    );
  }
}

const mapSateToProps = (state) => {
  return {
    renderList: state.listRender.renderList,
    drPage: state.listRender.drPage
  }
}

export default connect(
  mapSateToProps,
  {
    incrementDrinkLoveNums,
    addMoreDrinkListMsg
  }
)(Drink);