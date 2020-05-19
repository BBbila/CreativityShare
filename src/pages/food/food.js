import React, { Component } from 'react';
import styles from './food.module.less';
import Header from '../../components/header/header';
import SideNav from '../../components/sideNav/sideNav'
import ListRender from '../../components/listRender/listRender';
import {connect} from 'react-redux'
import { incrementFoodLoveNums,addMoreFoodListMsg } from '../../actions/listRender'

class Food extends Component {

  componentDidMount() {
    
  }

  handleIncrement = (data) => {
    this.props.incrementFoodLoveNums(data);
  }

  handleGetMoreList = () => {
    const foPage = this.props.foPage
    this.props.addMoreFoodListMsg(foPage);
  }


  render() {
    const { renderList } = this.props
    return (
      <div className={styles.foodWrap}>
        <Header history = {this.props.history}/>
        <SideNav />
        
        <div className="foodwrap">
          <div className="foodbanner">
            <ListRender 
              list ={renderList.foodList} 
              handleIncrement={this.handleIncrement.bind(this)}
              handleGetMoreList={this.handleGetMoreList.bind(this)}
            ></ListRender>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    renderList: state.listRender.renderList,
    foPage: state.listRender.foPage
  }
}

export default connect(
  mapStateToProps,
  {
    incrementFoodLoveNums,
    addMoreFoodListMsg
  }
)(Food);