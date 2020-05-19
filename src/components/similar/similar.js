import React,{ Component} from 'react';
import styles from './similar.module.less';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import love from '../../static/爱心.png'
import { CONTEXT } from '../../config/index';


class Similar extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    return(
      <div className={styles.similarWrap}>
       <div className="propose">
          {(this.props.list || []).map((item,index) =>
          <Link to={`${CONTEXT}/details/${item.category}/${item.id || ''}`}>
          <div className="propseItemBanner" key={index} id={index}>
            <div className="proposeImg">
              <img className="pImg" src={item.imgs} alt=""></img>
            </div>
            <div className="propseright">
              <div className="propseHead">{item.title}</div>
              <div className="propsefoot">
                <div className="getlovenum">
                  <img className="gImg" src={love}></img>
                  <span className="gnum">{item.loveNum}</span>
                </div>
              </div>
            </div>
          </div>
          </Link>
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    
  };
}

export default connect(
  mapStateToProps,
  {
  
  }
)(Similar);