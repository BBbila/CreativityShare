import React, { Component } from 'react';
import styles from './index.module.less';
import Header from '../../components/header/header';
import SideNav from '../../components/sideNav/sideNav'
import { Link } from 'react-router-dom';
import Swiper from 'swiper/js/swiper.esm.bundle';
import wowoimg from '../../static/2020.png'
import wuhan from '../../static/wuhan.jpg'
import wuhan1 from '../../static/wuhan1.jpg'
import sad from '../../static/sad.jpg'
import {connect} from 'react-redux'
import {getListMsg} from '../../actions/listRender'
import {CONTEXT} from '../../config/index'


class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    
  }

  componentDidMount() {
    this.props.getListMsg();

    new Swiper('.swiper-container',{
      loop: true, // 循环模式选项
  
      // 如果需要前进后退按钮
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  
      //小圆点分页
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },

      autoplay: true,
      observer: true,//修改swiper自己或子元素时，自动初始化swiper
      observeParents: true,//修改swiper的父元素时，自动初始化swiper
    });
  }

  jumpto1 () {
    window.location.href ="https://item.jd.com/7313980.html"
  }
  jumpto2 () {
    window.location.href ="https://baijiahao.baidu.com/s?id=1592291642022120996&wfr=spider&for=pc"
  }
  jumpto3 () {
    window.location.href = `${CONTEXT}/epidemic`
  }

  creatCompare(loveNum) {
    return function (obj1,obj2) {
        var value1=obj1[loveNum];
        var value2=obj2[loveNum];
        if(value1>value2){
            return -1
        }else if(value1<value2){
            return 1
        }else {
            return 0
        }
    }
  }

  getRenderhot() {
    const renderList = this.props.renderList
    const initList = []
    if(renderList) {
      for(var i in renderList) {
        for(var j=0; j < renderList[i].length; j++){
          initList.push(renderList[i][j])
        }
      }
     const hotList = initList.sort(this.creatCompare("loveNum"))
      console.log("reslutList", hotList)
      return(
        <div className="hotMsgContainer">
          <div className="hotMsgBanner">
            {(hotList || []).slice(0,8).map((item, index) => 
            <Link to={`${CONTEXT}/details/${item.category}/${item.id || ''}`}>
              <div className="hotMsg" key={index}>
                <div className="rank">
                  <span className="rankNum">{index + 1}</span>
                </div>  
                <div className="hotMsgImgbanner">
                  <img className="hotMsgImg" src={item.imgs}></img>
                </div>
                <div className="hotMsgTextbanner">
                  <span className="headline">{item.title}</span>
                  <span className="hotNum">{item.loveNum}</span>
                </div>
                <div className="hotMsgNumberbanner">
                  <div className="hotMsgNumberBgImg"></div>
                </div>
              </div>
            </Link>
            )}
          </div>
        </div>
      )
    }
  }


  render() { 
    return (
      <div className={styles.index}>
        <Header history = {this.props.history}/>
        <SideNav />
        <div className="swiperBanner">
          <div className="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide one-slide" onClick={()=>{this.jumpto1()}}><img className="swiperBannerImg" src={wuhan1} alt="" ></img></div>
                <div class="swiper-slide two-slide" onClick={()=>{this.jumpto2()}}><img className="swiperBannerImg" src={wuhan} alt="" ></img></div>
                <div class="swiper-slide three-slide" onClick={()=>{this.jumpto3()}}><img className="swiperBannerImg" src={sad} alt=""></img></div>
            </div>

            {/* 分页器 */}
            <div class="swiper-pagination"></div>
          </div>
          <div className="MsgDivisonBanner">
            <div className="MsgDivison">
              <img className="wowo" src={wowoimg} alt=""></img>
              <span className="txth3">热搜窍门</span>
            </div>
          </div>
        </div>

        {/*热搜新闻 */}
        {this.getRenderhot()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    renderList: state.listRender.renderList,
  }
}

export default connect(
  mapStateToProps,
  {
    getListMsg,
  }
)(Index);