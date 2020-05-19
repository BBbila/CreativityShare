import React, { Component } from 'react';
import styles from  './loginRegist.module.less';
import userImg from '../../static/user.png'
import lockImg from '../../static/lock.png';
import confirmpswImg from '../../static/confirm.png';
import wxImg from '../../static/wx.png';
import QQImg from '../../static/qq.png';
import { getLoginMsg } from '../../actions/login'
import { connect } from 'react-redux'
import Header from '../../components/header/header';
import { Redirect } from 'react-router-dom'

class LoginRegist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelectLogin: true,
      userValue: '',
      pswValue: '',
      isRemember: false,
      idValuestorge: '',
      pswValuestorge: ''
    }
  }

  componentWillMount(){
    //localStorage本地保存数据,获取密码
    const smartuser = JSON.parse(localStorage.getItem('smartuser'));
    if(smartuser) {
      this.setState({
        idValuestorge: smartuser.id,
        pswValuestorge: smartuser.psw
      })
    }
  }
  componentDidMount() {

    if(this.state.idValue != '') {
      this.userId.value = this.state.idValuestorge
      this.userpsw.value = this.state.pswValuestorge
    }
  }

  //是否记住密码
  handleCheckbox =(e) =>{
    let isChecked = e.target.checked;
    if(isChecked){
        this.setState({
            isRemember: true
        })
    }else{
        this.setState({
            isRemember: false
        })
    }
}

  handleClickSelectLogin() {
    this.setState({
      isSelectLogin: true
    })
  }

  handleClickSelectRegist() {
    this.setState({
      isSelectLogin: false
    })
  }

  handleClickLogin(id,psw) {
    const {userValue, pswValue, isRemember} = this.state
    if(userValue == '' && pswValue == '') {
      if(isRemember === true) {
        let loginData = {};
        loginData.id = id.value
        loginData.psw = psw.value
        console.log(loginData)
        localStorage.setItem('smartuser',JSON.stringify(loginData))
      }
      this.props.getLoginMsg(id.value,psw.value);
    }else{
      alert("请输入有效的账户或密码")
    }
  }

  TestUserName(nameDom) {
    if(nameDom.value.length == 0){
      this.setState({
        userValue:'账户不能为空!'
      })
    }else if(nameDom.value.length >0 && nameDom.value.length < 11){
      this.setState({
        userValue:''
      })
    }else {
      this.setState({
        userValue:'请输入有效的账户名（不超过11个字符）'
      })
    }
  }

  TestUserPsw(pswDom) {
    if(pswDom.value.length == 0){
      this.setState({
        pswValue:'密码不能为空!'
      })
    }else if(pswDom.value.length >8 && pswDom.value.length < 11 && /^[a-zA-Z0-9]{6,10}$/.test(pswDom.value)){
      this.setState({
        pswValue:''
      })
    }else {
      this.setState({
        pswValue:'请输入有效的账户名（8-11个数字或字母）'
      })
    }
  }

  render() {
    const { isSelectLogin, userValue, pswValue} = this.state
    const { isLogin } = this.props
    if(!isLogin) {
      return (
        <div className={styles.LoginWrap}>
          <Header  history = {this.props.history}/>
          <div className="FromBanner">
            <div className="topBanner">
              <button className={isSelectLogin === false ? 'Tologin' : 'selected'} onClick={() =>{this.handleClickSelectLogin()}}>登录</button>
              {/* <button className={isSelectLogin === true ? 'Toregist' : 'selected'} activeClassName="selected" onClick={() =>{this.handleClickSelectRegist()}}>注册</button> */}
            </div>
            {isSelectLogin === true ? 
            <div>
              <div className="LoginmsgBanner">
                <div className="userContainer">
                  <img className="userImg" src={userImg} alt=""></img>
                  <input 
                    className="userId" 
                    type="text"
                    placeholder="你的账户"
                    autofocus="autofocus"
                    ref={(input) => {this.userId = input}}
                    onBlur={()=>{this.TestUserName(this.userId)}}
                    >
                  </input>
                </div>
                <div className="userpoint">{userValue}</div>
                <div className="pswContainer">
                  <img className="lockImg" src={lockImg} alt=""></img>
                  <input 
                    className="password" 
                    type="password"
                    placeholder="你的密码"
                    ref={(input) => {this.userpsw = input}}
                    onBlur={()=>{this.TestUserPsw(this.userpsw)}}
                    >
                  </input>
                </div>
                <div className="userpoint">{pswValue}</div>
                <div className="checkbanner">
                  <label htmlFor="chk" className="check">
                      <input type="checkbox" id="chk" checked={this.state.isRemember} onClick={this.handleCheckbox.bind(this)}/>
                      <span>记住密码</span>
                  </label>
                </div>
  ​
                <div className="loginButton"><button className="loginBtn" onClick={() =>this.handleClickLogin(this.userId,this.userpsw)}>登录</button></div>  
              </div>
              {/* <div className="LogindesBanner">
                <span className="txt">以社交账号登录</span>
                <div className="other">
                  <img className="weixin" src={wxImg}></img>
                  <img className="QQ" src={QQImg}></img>
                </div>
              </div> */}
            </div>
              :
              <div>
                {/* <div className="RegistmsgBanner">
                  <div className="userContainer"><img className="userImg" src={userImg} alt=""></img><input className="userId" type="text" placeholder="设置你的昵称"></input></div>
                  <div className="pswContainer"><img className="lockImg" src={lockImg} alt=""></img><input className="password" type="password" placeholder="设置你的密码"></input></div>
                  <div className="confirmpswContainer"><img className="confirmpswImg" src={confirmpswImg} alt=""></img><input className="confirmpsw" type="password" placeholder="确认你的密码"></input></div>
                  <div className="RegisterButton"><button className="registerBtn">注册</button></div>  
                </div>
                <div className="RegistdesBanner">
                  <div className="des">
                    点击“注册”即表示您同意并愿意遵守智慧生活 <a href="#">用户协议</a> 和 <a href="#">隐私政策</a> 。
                  </div>
                  <span className="txt">以社交账号注册</span>
                  <div className="other">
                    <img className="weixin" src={wxImg}></img>
                    <img className="QQ" src={QQImg}></img>
                  </div>
                </div> */}
              </div>
            }  
          </div>
        </div>
      )
    }else {
      // 如果登录成功，则重定向到首页
      return <Redirect to='/'></Redirect>
    }
  }
}

const mapStateToProps = (state) => {
  return {
    isLogin: state.login.isLogin,
  }
}
export default connect(
  mapStateToProps,
  {
    getLoginMsg,
  }
) (LoginRegist);
