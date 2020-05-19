const treasureList = [
  {
    id: 1,
    category: "treasure",
    categoryName: "变废为宝",
    loveNum:555555,
    mainImg: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586263749658&di=c27eec4e0c0724f4de9cd47d4177cdbc&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170429%2Fc09381d6bc8b416392d459fe9fd0d4e8_th.jpeg",
    headTxt: "用光的纸筒，教你如何变成家里的装饰物",
  },
  {
    id: 2,
    category: "treasure",
    categoryName: "变废为宝",
    loveNum:555324355,
    mainImg: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4179001289,3786890353&fm=26&gp=0.jpg",
    headTxt: "你真的用对了一次性筷子了吗？",
  },
  {
    id: 3,
    category: "treasure",
    categoryName: "变废为宝",
    loveNum:5555,
    mainImg: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586263870666&di=d8b10997eccb8094f5032a5fa961b425&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201810%2F02%2F20181002025336_afrgh.thumb.700_0.jpg",
    headTxt: "家里有小孩子的可以跟着我学哦，废纸的艺术2",
  },
  {
    id: 4,
    category: "treasure",
    categoryName: "变废为宝",
    loveNum:5555775,
    mainImg: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586263870666&di=878c58c64945eea2eb71f01c63fda7e6&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201508%2F17%2F20150817233052_wHSFn.jpeg",
    headTxt: "灵动的卡片教学4，教你如何折叠出栩栩如生的动物",
  },
  {
    id: 5,
    category: "treasure",
    categoryName: "变废为宝",
    loveNum:335555,
    mainImg: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1603475355,4205094474&fm=26&gp=0.jpg",
    headTxt: "家中废弃的布料，可以用来做出美观小巧的手提包",
  },
  {
    id: 6,
    category: "treasure",
    categoryName: "变废为宝",
    loveNum:545325555,
    mainImg: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586264135290&di=9b537461f4c816add52128199d9488c4&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201407%2F25%2F20140725152239_GYKz4.jpeg",
    headTxt: "不是你的手不行，是你的不聊没有选好",
  },
  {
    id: 7,
    category: "treasure",
    categoryName: "变废为宝",
    loveNum:44455555,
    mainImg: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2248535363,483869908&fm=26&gp=0.jpg",
    headTxt: "你的家里有这种易拉罐火车嘛？",
  },
  {
    id: 8,
    category: "treasure",
    categoryName: "变废为宝",
    loveNum:55565,
    mainImg: " https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3493499715,3216962062&fm=26&gp=0.jpg",
    headTxt: "教你用废弃的材料做出上档次的手工蜡烛",
  },
  {
    id: 9,
    category: "treasure",
    categoryName: "变废为宝",
    loveNum:555555,
    mainImg: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586263749658&di=c27eec4e0c0724f4de9cd47d4177cdbc&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170429%2Fc09381d6bc8b416392d459fe9fd0d4e8_th.jpeg",
    headTxt: "用光的纸筒，教你如何变成家里的装饰物",
  },
  {
    id: 10,
    category: "treasure",
    categoryName: "变废为宝",
    loveNum:555555,
    mainImg: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4179001289,3786890353&fm=26&gp=0.jpg",
    headTxt: "你真的用对了一次性筷子了吗？",
  },
  {
    id: 11,
    category: "treasure",
    categoryName: "变废为宝",
    loveNum:555555,
    mainImg: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586263870666&di=d8b10997eccb8094f5032a5fa961b425&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201810%2F02%2F20181002025336_afrgh.thumb.700_0.jpg",
    headTxt: "家里有小孩子的可以跟着我学哦，废纸的艺术2",
  },
  {
    id: 12,
    category: "treasure",
    categoryName: "变废为宝",
    loveNum:555555,
    mainImg: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586263870666&di=878c58c64945eea2eb71f01c63fda7e6&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201508%2F17%2F20150817233052_wHSFn.jpeg",
    headTxt: "灵动的卡片教学4，教你如何折叠出栩栩如生的动物",
  },
  {
    id: 13,
    category: "treasure",
    categoryName: "变废为宝",
    loveNum:555555,
    mainImg: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1603475355,4205094474&fm=26&gp=0.jpg",
    headTxt: "家中废弃的布料，可以用来做出美观小巧的手提包",
  },
  {
    id: 14,
    category: "treasure",
    categoryName: "变废为宝",
    loveNum:555555,
    mainImg: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586264135290&di=9b537461f4c816add52128199d9488c4&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201407%2F25%2F20140725152239_GYKz4.jpeg",
    headTxt: "不是你的手不行，是你的不聊没有选好",
  },
  {
    id: 15,
    category: "treasure",
    categoryName: "变废为宝",
    loveNum:555555,
    mainImg: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2248535363,483869908&fm=26&gp=0.jpg",
    headTxt: "你的家里有这种易拉罐火车嘛？",
  },
  {
    id: 16,
    category: "treasure",
    categoryName: "变废为宝",
    loveNum:555555,
    mainImg: " https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3493499715,3216962062&fm=26&gp=0.jpg",
    headTxt: "教你用废弃的材料做出上档次的手工蜡烛",
  },
];

export default treasureList;