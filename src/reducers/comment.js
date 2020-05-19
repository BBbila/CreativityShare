import { CLICK_PUSH_COMMENT } from '../constants/comment'



const initState ={
  allCommentList: [
    {
      commentValue: "写的太好了！",
      date: "2020-1-15",
      postCategory: "treasure",
      postId: 1,
      userId: 100,
      userName: "蜡笔小新",
      userpic: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1537171751,1949160039&fm=11&gp=0.jpg"
    },
    {
      commentValue: "喜茶真的排队排太久了",
      date: "2020-1-11",
      postCategory: "drink",
      postId: 1,
      userId: 101,
      userName: "玫瑰花",
      userpic: "http://pic2.zhimg.com/50/v2-958d33fd4a4de747058adcafdf753074_hd.jpg"
    },
    {
      commentValue: "为一点点疯狂打call",
      date: "2020-1-25",
      postCategory: "drink",
      postId: 1,
      userId: 103,
      userName: "我是土豆饼",
      userpic: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2464810720,3924619240&fm=11&gp=0.jpg"
    },
    {
      commentValue: "飘过",
      date: "2020-2-18",
      postCategory: "treasure",
      postId: 1,
      userId: 101,
      userName: "玫瑰花",
      userpic: "http://pic2.zhimg.com/50/v2-958d33fd4a4de747058adcafdf753074_hd.jpg"
    },
    {
      commentValue: "有用！点赞",
      date: "2020-2-1",
      postCategory: "treasure",
      postId: 2,
      userId: 101,
      userName: "玫瑰花",
      userpic: "http://pic2.zhimg.com/50/v2-958d33fd4a4de747058adcafdf753074_hd.jpg"
    },
    {
      commentValue: "希望作者分享更多！",
      date: "2020-1-11",
      postCategory: "treasure",
      postId: 2,
      userId: 101,
      userName: "玫瑰花",
      userpic: "http://pic2.zhimg.com/50/v2-958d33fd4a4de747058adcafdf753074_hd.jpg"
    },
    {
      commentValue: "刚好宝宝最近闹着要买折纸，可以跟着学了",
      date: "2020-1-25",
      postCategory: "treasure",
      postId: 3,
      userId: 103,
      userName: "大西瓜",
      userpic: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2464810720,3924619240&fm=11&gp=0.jpg"
    },
    {
      commentValue: "飘过",
      date: "2020-2-18",
      postCategory: "treasure",
      postId: 3,
      userId: 101,
      userName: "玫瑰花",
      userpic: "http://pic2.zhimg.com/50/v2-958d33fd4a4de747058adcafdf753074_hd.jpg"
    }
  ]
}
const comment = (state = initState,action={}) => {
  switch (action.type) {
    case CLICK_PUSH_COMMENT:
      return {
        ...state,
        ...state.allCommentList.push(action.obj)
      }
    default:
      return state;
  }
}

export default comment;