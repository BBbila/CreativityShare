export function numConvert(num){
  if(num>=100000000) {
    num=Math.round(num/10000000)/10+'Y';
  }else if(num>=1000000) {
    num=Math.round(num/100000)/10+'BW';
  }else if(num>=10000) {
    num=Math.round(num/1000)/10+'W';
  }else if(num>=1000) {
    num=Math.round(num/100)/10+'K';
  }
  return num;
}

export function dateConvert(date) {
    //Mon Nov 11 2019 16:25:17 GMT+0800 (中国标准时间)
    var timer =  date.toLocaleString();
    //2019/11/11 下午4:21:22 (这是string类型)
    var timeStr = timer.slice(0,10);
    //2019/11/11
    return timeStr.split("/").join("-"); 
}