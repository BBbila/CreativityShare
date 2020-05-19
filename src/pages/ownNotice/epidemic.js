import React, { Component } from 'react';
import styles from './epidemic.module.less';
import yi1 from '../../static/yi1.png'
import yi2 from '../../static/yi2.png'
import yi3 from '../../static/yi3.png'
import yi4 from '../../static/yi4.png'
import yi5 from '../../static/yi5.png'
import logo from '../../static/logo1.gif'
import {CONTEXT} from '../../config/index';
import {NavLink} from 'react-router-dom';

class Epidemic extends Component {
  render() {
    return (
      <div className={styles.epidemicWrap}>
          <div className="cover">
          <div className="back"><NavLink  to={`${CONTEXT}/index`}><img src={logo}></img><div className="indextxt">回  主  页</div></NavLink></div>
          <div className="header">重视疫情期间防护 习近平这样示范</div>
          <div className="tip">2020-02-14 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;来源：央视微博  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;撰写：智慧生活</div>
          <div className="theme">
            <img src={yi1}></img>
          </div>
          <div className="txt">
            <p>“信心百倍地打好这一场阻击战、总体战，打好这一场人民战争。我们一定要树立信心，一定会胜利的！”</p>
            <p>10日下午，习近平总书记在北京深入社区、医院、疾控中心，了解基层疫情防控工作情况，并视频连线湖北武汉抗击新冠肺炎疫情前线，为全国奋战在疫情防控一线的医务工作者和广大干部职工加油鼓劲</p>
　　        <p>调研指导工作期间，习近平全程佩戴口罩，进入室内主动测量体温，与群众暖心交流时不忘温馨提醒“非常时期就不握手了”......他以身作则、带头做好疫情期间防护，为百姓坚持加强防护做好表率。</p>
          </div>
          <div className="imgsgroup">
            <div className="top">
              <img src={yi2}></img>
              <img src={yi3}></img>
            </div>
            <div className="boo">
              <img src={yi4}></img>
              <img src={yi5}></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Epidemic;