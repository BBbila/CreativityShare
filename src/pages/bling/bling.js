import React, { Component } from 'react';
import styles from './bling.module.less';
import Header from '../../components/header/header';
import SideNav from '../../components/sideNav/sideNav'
import ListRender from '../../components/listRender/listRender';
import {connect} from 'react-redux'
import { incrementBlingLoveNums,addMoreBlingListMsg } from '../../actions/listRender'

class Bling extends Component {


  handleIncrement = (data) => {
    this.props.incrementBlingLoveNums(data);
  }

  handleGetMoreList = () => {
    const blPage = this.props.blPage
    this.props.addMoreBlingListMsg(blPage);
  }

  render() {
    const {renderList} = this.props
    return (
      <div className={styles.blingWrap}>
        <Header history = {this.props.history}/>
        <SideNav />
        <ListRender 
          list ={renderList.blingList} 
          handleIncrement={this.handleIncrement.bind(this)}
          handleGetMoreList={this.handleGetMoreList.bind(this)}
        ></ListRender>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    renderList: state.listRender.renderList,
    blPage: state.listRender.blPage
  }
}

export default connect(
  mapStateToProps,
  {
    incrementBlingLoveNums,
    addMoreBlingListMsg 
  }
)(Bling);