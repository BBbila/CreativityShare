import React, { Component } from 'react';
import styles from  './mine.module.less';
import { connect } from 'react-redux'
import Header from '../../components/header/header';
import guanzhu from '../../static/关注.png'
import tiezi from '../../static/贴子.png'
import love from '../../static/爱心.png'
import laji from '../../static/laji.png'
import {deleteposts} from '../../actions/mine'
import { CONTEXT } from '../../config/index';
import {numConvert} from '../../utils/utils';
import { Link } from 'react-router-dom';


class Mine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelectLogin: true,
    }
  }

  handleClickDelete(i) {
    const item = this.props.item
    this.props.deleteposts(item.postsList,i)
  }

  getlen() {
    const item = this.props.item
    if(item.postsList) {
      const len = item.postsList.length
      return len
    }
  }

  getPostsList() {
    const item = this.props.item
    const postsList = item.postsList
    if(postsList && postsList.length > 0 ) {
      return(
        <div className="mesrightContentBanner">
        {(postsList || []).map((item,i) => 
          <div className="propseItemBanner" key={i} id={i}>
            <div className="proposeImg">
              <img className="pImg" src={item.imgs} alt=""></img>
            </div>
            <div className="propseright">
              <Link to={`${CONTEXT}/details/${item.category}/${item.id || ''}`}><div className="propseHead">{item.title}</div></Link>
              <div className="propsefoot">
                <div className="getlovenum">
                  <img className="gImg" src={love}></img>
                  <span className="gnum">{numConvert(item.loveNum)}</span>
                </div>
              </div>
            </div>
            <div className="deletebaner" onClick={() => {this.handleClickDelete(i)}}><img src={laji}></img></div>
          </div>
        )}
        </div>
      )
    }else {
      return(
        <div className="mesrightContentBanner">
          <div className="mrbanner">
            <div className="mrpushBanner">
              <a className="pushposts" href={`${CONTEXT}/toEditor`}>去分享你的创作吧</a>
            </div>
          </div>
        </div>
      )
    }
  }
 
  render() {
    const {item} = this.props
      return (
        <div className={styles.mineWrap}>
          <Header history = {this.props.history}/>
          <div className="detailsContainer">
            <div className="mesleftCover">
              <div className="mesleft">
                <div className="usermsgbanner">
                  <div className="touxiang"><img className="touxiangImg" src={item.touxiang}></img></div>
                  <div className="name" title="husad1223">{item.name}</div> 
                  <div className="pastesbaner">
                    <div className="pastesleft">
                      <img className="pastesImg" src={tiezi}></img>
                      <span className="pastestitle">贴子</span>
                    </div>
                    <span className="pastesnum">{this.getlen()} 条</span>
                  </div>
                  <div className="fansbaner">
                    <div className="fansleft">
                      <img className="fansImg" src={guanzhu} alt=""></img>
                      <span className="fanstitle">粉丝</span>
                    </div>
                    <span className="fansnum">{item.fans}</span>
                  </div>
                  {/* <div className="lovebutton">
                    <button className="btn_love">关注</button>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="rightCover">
              <div className="mesrightCover">
                <div className="mesrightTopBanner">
                  <div className="mesrightTop">共有 {this.getlen()} 条帖子</div>
                </div>
                {this.getPostsList()}
              </div>
            </div>
          </div>
        </div>
      )
  }
}

const mapStateToProps = (state) => {
  return {
    item: state.login.item,
    index: state.login.index,
    afterDeleteList:state.mine.afterDeleteList
  }
}
export default connect(
  mapStateToProps,
  {
    deleteposts,
  }
) (Mine);
