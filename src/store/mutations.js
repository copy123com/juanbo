export default {
  //存储token方法
  //设置token等于外部传递进来的值
  setToken(state,token){
    console.log(token);
    state.token = token;
    sessionStorage.setItem('token',token)//同步存储token至localStorage
  }
}