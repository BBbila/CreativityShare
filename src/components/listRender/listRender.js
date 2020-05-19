import React,{ Component} from 'react';
import styles from './listRender.module.less';
import { Link } from 'react-router-dom';
import { CONTEXT } from '../../config/index';
import {numConvert} from '../../utils/utils';
import { connect } from 'react-redux'



class ListRender extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  
  handleClickIncrement (index) {
    const {item} = this.props
    if(JSON.stringify(item) != "{}"){
      this.props.handleIncrement(index); 
    }else{
      alert("请先登录")
    }
  }

  handleClickGetMoreList () {
    this.props.handleGetMoreList();
  }

  render() {
    return(
      <div className={styles.listRenderWrap}>
        {/* <div className="searchout_head">
          <div className="headResult">全部内容</div>
            <div className="sortBanner">
            <div className="sort_name">热度排序</div>
            <div className="sort_icon"><img className="sicon" src={jiantou} alt=""></img></div>
            <div className="Pop">
                <ul className="Pop_ul">
                  <li>
                    时间排序
                  </li>
                  <li>
                    热度排序
                  </li>
                </ul>
            </div>
          </div> 
        </div> */}
        <div className="postwrap">
          <div className="postbanner">
            {(this.props.list || []).map((item, index) => 
              <div className="post" key={index} id={index}>
                <Link to={`${CONTEXT}/details/${item.category}/${item.id || ''}`}>
                  <div className="postCover">
                    <img className="cover" src={item.imgs} alt=""></img>
                  </div>
                </Link>
                <div className="postHeaderBanner">
                  <div className="postTitle" title={item.title}>{item.title}</div>
                  <div className="postotherdesBanner">
                    <div className="postDate">{item.pushDate}</div>
                    <div className="postLove">
                      <div className="love" onClick={() => {this.handleClickIncrement(index)}}>
                        <span className="lovenum">{numConvert(item.loveNum)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="getMoreBanner">
            <button className="moreBtn" onClick={() =>{this.handleClickGetMoreList()}}>加载更多</button>
          </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    item: state.login.item
  };
}

export default connect(
  mapStateToProps,
  {
  
  }
)(ListRender);