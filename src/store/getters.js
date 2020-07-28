export default {
  //获取token方法
  //判断是否又token，如果没有重新赋值，返回给state的token
  getToken(state){
    if(!state.token){
      state.token = sessionStorage.getItem('token');
    }
    return state.token
  }
}