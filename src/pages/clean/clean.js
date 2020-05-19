import React, { Component } from 'react';
import styles from './clean.module.less';
import Header from '../../components/header/header';
import SideNav from '../../components/sideNav/sideNav'
import ListRender from '../../components/listRender/listRender';
import {connect} from 'react-redux'
import { incrementCleanLoveNums,addMoreCleanListMsg } from '../../actions/listRender'

class Clean extends Component {


  handleIncrement = (data) => {
    this.props.incrementCleanLoveNums(data);
  }

  handleGetMoreList = () => {
    const clPage = this.props.clPage
    this.props.addMoreCleanListMsg(clPage);
  }

  render() {
    const {renderList} = this.props
    return (
      <div className={styles.cleanWrap}>
        <Header history = {this.props.history}/>
        <SideNav />
        <ListRender 
          list ={renderList.cleanList} 
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
    clPage: state.listRender.clPage
  }
}

export default connect(
  mapStateToProps,
  {
    incrementCleanLoveNums,
    addMoreCleanListMsg
  }
)(Clean);