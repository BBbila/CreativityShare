import React,{ Component} from 'react';
import styles from './searchout.module.less';
import Header from '../../components/header/header';
import ListRender from '../../components/listRender/listRender';
import jiantou from '../../static/jiantou.png'
import noresult from '../../static/noresult.png'
import randomList from '../../static/randomList'
import searchMikeTeaList from '../../static/searchMikeTeaList'
import love1 from '../../static/love1.png'

class searchout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHaveReault: true,
    };
  }

  render() {
    const { isHaveReault } = this.state
    return(
      <div className={styles.searchoutWrap}>
        <Header history = {this.props.history}></Header>
        <div className="searchout_head">
          <div className="headResult">为你查找到 4 条关于“奶茶”的结果</div>
          {/* {isHaveReault === true ? 
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
          :<div></div>
          } */}
        </div>
        {isHaveReault === true ? <ListRender list = {searchMikeTeaList}></ListRender>
        :
        <div className="noresultbanenr">
          <div className="noresultTips">
            <img className="noresultImg" src={noresult} alt=""></img>
            抱歉，没有找到您感兴趣的结果
          </div>
          <div className="nosearchout_head">
            <div className="headNoResult">为 你 推 荐</div>
          </div>
          <div className="postwrap">
            <div className="postbanner">
              {(randomList || []).map((item, index) => 
                <div className="post" key={index} id={index}>
                  <div className="postCover">
                    <img className="cover" src={item.mainImg} alt=""></img>
                  </div>
                  <div className="postHeaderBanner">
                    <div className="postTitle" title={item.headTxt}>{item.headTxt}</div>
                    <div className="postotherdesBanner">
                      <div className="postDate">2020-03-09</div>
                      <div className="postLove">
                        <div className="love"><img className="LImg" src={love1} alt=""></img></div>
                        <span className="lovenum">1000w+</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div> 
        }
      </div>
    )
  }
}

export default searchout;