import React, { Component } from 'react';
import styles from  './header.module.less';
import { Link } from 'react-router-dom';
import { CONTEXT } from '../../config/index';
import {connect} from 'react-redux'
import smLogo from '../../static/logo1.gif'
import header_search from '../../static/search.png'
import change from '../../static/change.png'
import {loginOut} from '../../actions/login'
import {getHotWordListMsg} from '../../actions/header'
import { ChangeHotWord} from '../../actions/header'

class Header extends Component {
  constructor(props) {
    super(props);
      this.state = {
        isShow: false,
        isMouse: false,
        ispopup:false,
        value: ''
      }
  }

  componentDidMount() {
    this.props.getHotWordListMsg();
  }

  handleFocus() {
    this.setState({
      isShow: true
    })
  }

  handleBlurOut() {
    this.setState({
      isShow: false
    })
  }

  handleClickout = () =>{
    this.props.loginOut();
    //重定向页面
    this.props.history.push('/treasure');
  }

  handleMouseEnter() {
    this.setState({
      isMouse: true
    })
  }

  hanldeMouseLeave() {
    this.setState({
      isMouse: false
    })
  }

  handleClickChangeHotWord(page,totalPage) {
    //console.log(page,totalPage)
    if(page < totalPage) {
      this.props.ChangeHotWord(page+1);
    }else {
      this.props.ChangeHotWord(1);
    }
  }

  handleChangeInput(ev) {
    this.setState({
      value: ev.target.value
    })
  }
 
  handleClika(ev) {
    this.setState({
      value: ev.target.innerHTML
    })
  }

  handleMousepopup() {
    const isLogin = this.props.isLogin
    if(isLogin == true) {
      this.setState({
        ispopup: true
      })
    }
  }

  handleMouseleavepopup() {
    this.setState({
      ispopup: false
    })
  }

  getHotListArea() {
    const page = this.props.page
    const hotWordList = this.props.hotWordList
    const totalPage = this.props.totalPage
    const pageList = []

    if(hotWordList.length) {
      for(let i = (page - 1)*10; i< page * 10; i++) {
        pageList.push(
          <li key={hotWordList[i]}><a href="#" onClick={(ev)=>{this.handleClika(ev)}}>{hotWordList[i]}</a></li>
        )
      }
      //console.log(pageList)
    }
    
  
    if(this.state.isShow || this.state.isMouse) {
      return (
      <div className="showWordBanner"
        onMouseEnter = {() => {this.handleMouseEnter()}}
        onMouseLeave = {() => {this.hanldeMouseLeave()}}
      >
        <div className="wordHeader">
          <div className="hotTxt">热门搜索</div>
          <div className="hoTChange">
            <img className="hoTChangeImg" src={change}></img>
            <div className="changetxt" onClick={()=>{this.handleClickChangeHotWord(page,totalPage)}}>换一换</div>
          </div>
        </div>
        <div className="wordContent">
          <ul className="wordul">
            {pageList.filter((el)=>{return el.key !== null})}
          </ul>
        </div>
    </div>)
    }else{
      return null
    }
  }


  jumpToEditor() {
    const {item} =this.props
    if(JSON.stringify(item) != "{}"){
      window.location.href= `${CONTEXT}/toEditor`
    }else{
      alert("请先登录")
    }

  }
  
  render() {
    const { isLogin, item} = this.props 
    const { ispopup } = this.state
    return (
      <div className={styles.headerWrap}>
        <div className="header">
          <Link to={`${CONTEXT}/treasure`}><div className="logoBanner">
            <img className="smLogoImg" src={smLogo}  alt="logo"></img>
            <div className="logotxt">智 慧 生 活</div>
          </div></Link>
          <div className="navCenter">
            <input
              type="text"
              placeholder="搜索"
              className="searchBanner"
              onFocus = {() => {this.handleFocus()}}
              onBlur={() => {this.handleBlurOut()}}
              value={this.state.value}
              onChange={(ev) =>{this.handleChangeInput(ev)}}
            />
            <Link to={`${CONTEXT}/searchout`}><img className="search" src={header_search} alt="search" ></img></Link>
          </div>
          {this.getHotListArea()}
          <div className="userBanner">
            <a className="issue" onClick={() => {this.jumpToEditor()}}>发布妙贴✍</a>
            {isLogin
            ? <Link className="login" to={`${CONTEXT}/mine/${item.userId || ''}`} onMouseEnter={()=>{this.handleMousepopup()}}>个人中心</Link>
            : <Link className="login" to={`${CONTEXT}/loginRegist`}>登录</Link>
            }
            {ispopup &&<div className="popup" onMouseLeave={()=>{this.handleMouseleavepopup()}}>
              <Link className="out" onClick={this.handleClickout}>退出</Link>
              </div>}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLogin: state.login.isLogin,
    hotWordList: state.header.hotWordList,
    page: state.header.page,
    totalPage: state.header.totalPage,
    item: state.login.item,
    index: state.login.index
  };
};

export default connect(
  mapStateToProps,{
    loginOut,
    getHotWordListMsg,
    ChangeHotWord
})(Header);
