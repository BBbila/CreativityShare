import React, { Component } from 'react';
import { CONTEXT } from './config';
import Index from './pages/index/index';
import LoginRegist from './pages/loginRegist/loginRegist';
import Treasure from './pages/treasure/treasure'
import Security from './pages/security/security'
import Clean from './pages/clean/clean'
import Food from './pages/food/food'
import Drink from './pages/drink/drink'
import Bling from './pages/bling/bling'
import ListRender from './components/listRender/listRender'
import details from './pages/details/details'
import searchout from './pages/searchout/searchout'
import toEditor from './pages/toEditor/toEditor'
import mine from './pages/mine/mine'
import epidemic from './pages/ownNotice/epidemic'
 
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path={`${CONTEXT}/`}
            render={() => <Redirect to={`${CONTEXT}/index`}></Redirect>}
          ></Route>
          <Route exact path={`${CONTEXT}/index`} component={Index} />
          <Route exact path={`${CONTEXT}/loginRegist`} component={LoginRegist} />
          {/* 变废为宝 */}
          <Route exact path={`${CONTEXT}/treasure`} component={Treasure} /> 
          {/* 正义点评 */}
          <Route exact path={`${CONTEXT}/bling`} component={Bling} />
          {/* 奶茶攻略 */}
          <Route exact path={`${CONTEXT}/drink`} component={Drink} />
          {/* 污渍去除 */}
          <Route exact path={`${CONTEXT}/clean`} component={Clean} />
          {/* 随时自保 */}
          <Route exact path={`${CONTEXT}/security`} component={Security} />
          {/* 食材烹饪 */}
          <Route exact path={`${CONTEXT}/food`} component={Food} />
          {/* 列表渲染的子组件 */}
          <Route exact path={`${CONTEXT}/listRender`} component={ListRender} />
          {/* 详情页 */}
          <Route exact path={`${CONTEXT}/details/:category/:id`} component={details} />
          {/* 搜索结果页 */}
          <Route exact path={`${CONTEXT}/searchout`} component={searchout} />
          <Route exact path={`${CONTEXT}/toEditor`} component={toEditor} />
          <Route exact path={`${CONTEXT}/mine/:userId`} component={mine} />
          <Route exact path={`${CONTEXT}/epidemic`} component={epidemic} />
        </Switch>
      </Router>
    );
  }
}

export default App;
