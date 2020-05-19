import React, { Component } from 'react';
import styles from './security.module.less';
import Header from '../../components/header/header';
import SideNav from '../../components/sideNav/sideNav'
import ListRender from '../../components/listRender/listRender';
import {connect} from 'react-redux'
import { incrementSecurityLoveNums,addMoreSecurityListMsg } from '../../actions/listRender'

class Security extends Component {


  handleIncrement = (data) => {
    this.props.incrementSecurityLoveNums(data);
  }

  handleGetMoreList = () => {
    const sePage = this.props.sePage
    this.props.addMoreSecurityListMsg(sePage);
  }

  render() {
    const {renderList} = this.props
    return (
      <div className={styles.securityWrap}>
        <Header history = {this.props.history}/>
        <SideNav />
        <ListRender 
          list ={renderList.securityList} 
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
    sePage: state.listRender.sePage
  }
}

export default connect(
  mapStateToProps,
  {
    incrementSecurityLoveNums,
    addMoreSecurityListMsg
  }
)(Security);