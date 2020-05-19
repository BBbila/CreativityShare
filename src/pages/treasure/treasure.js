import React, { Component } from 'react';
import styles from './treasure.module.less';
import Header from '../../components/header/header';
import SideNav from '../../components/sideNav/sideNav'
import ListRender from '../../components/listRender/listRender';
import { connect } from 'react-redux'
import { incrementLoveNums, addMoreTreasureListMsg} from '../../actions/listRender'

class Treasure extends Component {

  componentDidMount() {
    
  }

  handleIncrement = (data) => {
    this.props.incrementLoveNums(data);
  } 


  handleGetMoreList = () => {
    const trePage = this.props.trePage
    this.props.addMoreTreasureListMsg(trePage);
  }


  render() {
    const { renderList} = this.props
    return (
      <div className={styles.treasureWrap}>
        <Header history = {this.props.history}/>
        <SideNav />
        <div className="postwrap">
          <div className="postbanner">
            <ListRender 
              list ={renderList.treasureList} 
              handleIncrement={this.handleIncrement.bind(this)}
              handleGetMoreList={this.handleGetMoreList.bind(this)}
            >
            </ListRender>
          </div>
        </div>
      </div>
    );
  }
}

const mapSateToProps = (state) => {
  return {
    renderList: state.listRender.renderList,
    trePage: state.listRender.trePage
  }
}

export default connect(
  mapSateToProps,
  {
    incrementLoveNums,
    addMoreTreasureListMsg
  }
)(Treasure);