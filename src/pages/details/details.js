import React,{ Component} from 'react';
import styles from './details.module.less';
import Header from '../../components/header/header';
import { connect } from 'react-redux';
import {numConvert, dateConvert} from '../../utils/utils';
import "../../../node_modules/video-react/dist/video-react.css";
//有后退，前进，当前时间，时间分割线，倍速。
import { Player, ControlBar, ReplayControl,
  ForwardControl, CurrentTimeDisplay,
  TimeDivider, PlaybackRateMenuButton, VolumeMenuButton} from 'video-react';
import guanzhu from '../../static/关注.png'
import tiezi from '../../static/贴子.png'
import { getAuthorMsg } from '../../actions/details'
import { 
  incrementLoveNums, 
  incrementFoodLoveNums,
  incrementDrinkLoveNums,
  incrementBlingLoveNums,
  incrementCleanLoveNums,
  incrementSecurityLoveNums
 } from '../../actions/listRender'
 import { 
  clickPushComment
 } from '../../actions/comment'
 import Similar from '../../components/similar/similar'
 import { CONTEXT } from '../../config/index';
// import { Autoplay } from 'swiper/js/swiper.esm';






class details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  componentDidMount () {
    const { renderList } = this.props
    //console.log("renderList",renderList)
    const id = this.props.match.params.id
    const category = this.props.match.params.category
    if(renderList) {
        for(var i in renderList) {
          for(var j=0; j<renderList[i].length; j++){
            if(renderList[i][j].id == id && renderList[i][j].category == category) {
              const item = renderList[i][j]
              this.props.getAuthorMsg(item.userId);
              //console.log("renderList[i]",i === "treasureList")
            }
          }
        }
      }
    //console.log(this.props)
  }


  getRandomArrayElements(arr, count) {
    var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
    while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(min);
  }


  getSimilarList() {
    const { renderList } = this.props
    const id = this.props.match.params.id
    const category = this.props.match.params.category
    if(renderList) {
      for(var i in renderList) {
        for(var j=0; j<renderList[i].length; j++){
          if(renderList[i][j].id == id && renderList[i][j].category == category) {
            if(i === "treasureList") {
              const proposeList = renderList.treasureList
              //const siList = this.getRandomArrayElements(proposeList,5)
              //console.log("899999999999999",siList) 
              return(
                <Similar list={proposeList.slice(8,13)}></Similar>
              )
            }else if(i === "foodList") {
              const proposeList = renderList.foodList
              return(
                <Similar list={proposeList.slice(8,13)}></Similar>
              )
            }else if(i === "drinkList") {
              const proposeList = renderList.drinkList
              return(
                <Similar list={proposeList.slice(9,14)}></Similar>
              )
            }else if(i === "blingList") {
              const proposeList = renderList.blingList
              return(
                <Similar list={proposeList.slice(9,14)}></Similar>
              )
            }else if(i === "cleanList") {
              const proposeList = renderList.cleanList
              return(
                <Similar list={proposeList.slice(3,8)}></Similar>
              )
            }else if(i === "securityList") {
              const proposeList = renderList.securityList
              return(
                <Similar list={proposeList.slice(3,8)}></Similar>
              )
            }
          }
        }
      }
     
    }
  }



  handleClickPushComment(commentValue,userId,userName,userpic,date,postCategory,postId,userItem) {
    const currentCommentMsg = {
      commentValue:commentValue,
      userId:userId,
      userName:userName,
      userpic:userpic,
      date:date,
      postCategory:postCategory,
      postId:postId
    }
    if(JSON.stringify(userItem) != "{}"){
      this.props.clickPushComment(currentCommentMsg);
    }else{
      alert("请先登录")
    }
    //console.log(userItem)
    this.setState({
      value: ''
    })
  }


  handleChangeContent(e) {
    this.setState({
      value: e.target.value
    }) 
  }



  handleClickLove(index) {
    const { renderList,item } = this.props
    const userItem = item
    //console.log("renderList",renderList)
    const id = this.props.match.params.id
    const category = this.props.match.params.category
    if(renderList) {
        for(var i in renderList) {
          for(var j=0; j<renderList[i].length; j++){
            if(renderList[i][j].id == id && renderList[i][j].category == category) {
              if(JSON.stringify(userItem) != "{}"){
                if(i === "treasureList") {
                  this.props.incrementLoveNums(index);
                }else if(i === "foodList") {
                  this.props.incrementFoodLoveNums(index);
                }else if(i === "drinkList") {
                  this.props.incrementDrinkLoveNums(index);
                }else if(i === "blingList") {
                  this.props.incrementBlingLoveNums(index);
                }else if(i === "cleanList") {
                  this.props.incrementCleanLoveNums(index);
                }else if(i === "securityList") {
                  this.props.incrementSecurityLoveNums(index);
                }
              }else {
                return(
                  alert("请先登录")
                )
              }
            }
          }
        }
      }
  }


  getlen() {
    const {authorItem } = this.props
    if(authorItem.postsList) {
      const len = authorItem.postsList.length
      return len
    }
  }

  getCommentMsgList() {
    const { allCommentList } = this.props
    const commentList = [];
    if(allCommentList && allCommentList.length> 0) {
      for(var k = 0; k < allCommentList.length; k++) {
        if(allCommentList[k].postCategory == this.props.match.params.category
          &&allCommentList[k].postId == this.props.match.params.id) {
            commentList.push(allCommentList[k]);
          }
      }
      return(
        <div className="commentCover">
          <div className="commentguide">
            <div className="comentTitle">全部评论&nbsp;{commentList.length} 条</div>
          </div>
          {(commentList.reverse() || []).map((word,index) => 
          <div className="commentItembanner" key={index} id={index}> 
            <div className="commentUp">
              <div className="commentImg"><img className="cImg" src={word.userpic} alt=""></img></div>
              <div className="commentName" title="husad1223">{word.userName}</div>
              <div className="commentDate">{word.date}</div>
              {/* <div className="commentZan">
                <img className="zanicon" src={good} alt=""></img>
                <span className="zannum">4</span>
              </div>
              <div className="commentReply">
                <img className="replyicon" src={reply} alt=""></img>
                <span className="replynum">2</span>
              </div> */}
            </div>
            <div className="commentdown">
              <p>{word.commentValue}</p>
            </div>
          </div>
          )}
      </div>
      )
    }
  }

  getDetailItem() {
    const { renderList, authorItem, item} = this.props
    const userItem = item
    const {value} = this.state
    const userId = item.userId
    const userName = item.name
    const userpic = item.touxiang
    const date = new Date()
    const curdate = dateConvert(date)
    const id = this.props.match.params.id
    const category = this.props.match.params.category
    if(renderList) {
        for(var i in renderList) {
          for(var j=0; j<renderList[i].length; j++){
            if(renderList[i][j].id == id && renderList[i][j].category == category) {
              const item = renderList[i][j]
              const postId = renderList[i][j].id
              const category =item.category
              
              return(
            <div  key={j} index={j}>
              <div className="keywordbanner">
                <div className="keyword">#{item.categoryName}</div>                                                                                                                                                                                                  
                <div className=""></div> 
              </div>
              <div className="detailsContainer">
                <div className="mesleftCover">
                  <div className="mesleft">
                    <div className="usermsgbanner">
                      <div className="touxiang"><img className="touxiangImg" src={authorItem.touxiang}></img></div>
                      <div className="name" title={authorItem.name}>{authorItem.name}</div> 
                      <div className="pastesbaner">
                        <div className="pastesleft">
                          <img className="pastesImg" src={tiezi}></img>
                          <span className="pastestitle">贴子</span>
                        </div>
                        <span className="pastesnum">{this.getlen()}条</span>
                      </div>
                      <div className="fansbaner">
                        <div className="fansleft">
                          <img className="fansImg" src={guanzhu} alt=""></img>
                          <span className="fanstitle">粉丝</span>
                        </div>
                        <span className="fansnum">{authorItem.fans}</span>
                      </div>
                      {/* <div className="lovebutton">
                        <button className="btn_love">关注</button>
                      </div> */}
                    </div>
                    <div className="lovenumbanenr" onClick={() =>{this.handleClickLove(j)}}>
                      <div className="loveImg"></div>
                      <span className="lovenum">{numConvert(item.loveNum)}</span>
                    </div>
                  </div>
                </div>
                <div className="mescenter">
                  <div className="deVideoBanner">
                    <div className="deVideo" style={{width:600,height:337.5}}>
                      <Player autoPlay="true">
                        <source src={item.source} type='video/mp4'/>
                        <ControlBar>
                          <ReplayControl seconds={10} order={1.1} />
                          <ForwardControl seconds={30} order={1.2} />
                          <CurrentTimeDisplay order={4.1} />
                          <TimeDivider order={4.2} />
                          <PlaybackRateMenuButton
                            rates={[5, 2, 1, 0.5, 0.1]}
                            order={7.1}
                          />
                          <VolumeMenuButton disabled />                  
                        </ControlBar>
                      </Player>
                    </div>
                  </div>
                  <div className="deText">
                    <span className="sphead">&nbsp;&nbsp;&nbsp;&nbsp;{item.title}</span>
                    <hr className="hr_1"></hr>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;{item.content}</p>
                    <div className="insertImgBanner"><img className="insertImg"src={item.imgs} alt=""></img></div>
                    {/* <img className="insertImg"src={imgs[1]} alt=""></img> */}
                  </div>
                  <div className="deComment">
                    <div className="sendComment">
                      <div className="sendup">
                        <div className="sendImg"><img className="sImg" src={userItem.touxiang || "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589330731882&di=b504d5bb674d97694f1d420aa2e9d961&imgtype=0&src=http%3A%2F%2Fimg.tukexw.com%2Fimg%2Fce82ead5871cc1ad.jpg"} alt=""></img></div>
                        <textarea 
                          className="sendTxt" 
                          rows="6" 
                          cols="80" 
                          placeholder="写下你的评论..." 
                          value={value} 
                          onChange={(e) => {this.handleChangeContent(e)}}
                        >
                        </textarea>
                      </div>
                      <div className="senddown">
                        <button 
                          className="sendcomment_btn" 
                          onClick={() => {this.handleClickPushComment(value,userId,userName,userpic,curdate,category,postId,userItem)}}
                        >
                          发表
                        </button>
                      </div>
                    </div>
                    {this.getCommentMsgList()}
                  </div>
                </div>
                <div className="mesright">
                  <div className="mes_propseCover">
                    <div className="mesright_title">
                      相似推荐
                    </div>
                    {this.getSimilarList()}
                  </div>
                </div>
              </div>
            </div>
              )
            }
          }
        }
      }
  }
  

  render() {
    return(
      <div className={styles.detailsWrap}>
        <Header history = {this.props.history}></Header>
        {this.getDetailItem()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    renderList: state.listRender.renderList,
    authorItem: state.details.authorItem,
    item: state.login.item, //这里item是登录用户的信息
    allCommentList: state.comment.allCommentList
  };
};

export default connect(
  mapStateToProps,
  {
    getAuthorMsg,
    clickPushComment,
    incrementLoveNums,
    incrementFoodLoveNums,
    incrementDrinkLoveNums,
    incrementBlingLoveNums,
    incrementCleanLoveNums,
    incrementSecurityLoveNums
  }
)(details);

