<template>
  <div>
    <CalculatorItem :input-show="inputShow" class="input-box"></CalculatorItem>
    <div id="btn-list">
      <div @click="clearValue()" class=" btn-30 btn-radius color-red clear-marginleft">C</div>
      <div @click="oppositeValue()" class=" btn-30 btn-radius color-blue">+/-</div>
      <div @click="inputValue('%')" class=" btn-30 btn-radius color-blue">%</div>
      <div @click="backValue()" class=" btn-70 btn-radius color-red font-14">←</div>
      <div @click="inputValue('7')" class=" btn-30 btn-radius clear-marginleft">7</div>
      <div @click="inputValue('8')" class=" btn-30 btn-radius">8</div>
      <div @click="inputValue('9')" class=" btn-30 btn-radius">9</div>
      <div @click="squareValue()" class=" btn-30 btn-radius color-blue font-14">×²</div>
      <div @click="radicalValue()" class=" btn-30 btn-radius color-blue font-12">√</div>
      <div @click="inputValue('4')" class=" btn-30 btn-radius clear-marginleft">4</div>
      <div @click="inputValue('5')" class=" btn-30 btn-radius">5</div>
      <div @click="inputValue('6')" class=" btn-30 btn-radius">6</div>
      <div @click="inputValue('×')" class=" btn-30 btn-radius color-blue font-14">×</div>
      <div @click="inputValue('÷')" class=" btn-30 btn-radius color-blue font-12">÷</div>
      <div @click="inputValue('1')" class=" btn-30 btn-radius clear-marginleft">1</div>
      <div @click="inputValue('2')" class=" btn-30 btn-radius">2</div>
      <div @click="inputValue('3')" class=" btn-30 btn-radius">3</div>
      <div @click="inputValue('+')" class=" btn-30 btn-radius color-blue font-14">+</div>
      <div @click="inputValue('-')" class=" btn-30 btn-radius color-blue font-14">-</div>
      <div @click="inputValue('0')" class=" btn-70 btn-radius clear-marginleft">0</div>
      <div @click="inputValue('.')" class=" btn-30 btn-radius">.</div>
      <div @click="calValue()" class=" btn-70 btn-radius color-red font-14">=</div>
  </div>
  </div>
</template>

<script>
import CalculatorItem from '../../../pages/Home/Children/CalculatorItem'
export default {
  data(){
    return{
      inputShow:{value:'0'}
    }
  },
  methods:{
    inputValue(param){
      if(Object.prototype.toString.call(this.inputShow.value) == "[object Number]"){//判断输入框内容是否为数字类型
        this.inputShow.value = "0";//数字类型说明是上个计算结果,清空内容
      }
      var str = '' + this.inputShow.value;//输入内容时，将输入框内容转为字符串类型
      var len = str.length;
      var arr = ["+","-","×","÷"];
      var num = (''+parseFloat(str.split('').reverse().join(''))).split('').reverse().join('');//parseInt(ste.split('').reverse().join(''))是获取输入框最后一串数字，再反转回来，num为输入框内最后一串数字
      var nlen = num.length;
      if((num!='0' && param != '.') || (param == '.' && num.indexOf(".")==-1)){//输入框内最后一串数字不为0时拼接字符串
        if(arr.indexOf(str.charAt(len-1)) != -1 && arr.indexOf(param) != -1){//若一开始输入框内容为运算符，输入无效
          return;
        }
        this.inputShow.value += param; //拼接输入内容
      }else{
        arr.push("%");
        if(param == '.'){//若num中已有小数点，输入内容为小数点，视为无效
          return;
        }else if(!(arr.indexOf(param) != -1)){//判断输入框内最后一个字符不为运算符
          this.inputShow.value = str.substring(0,str.length-nlen)+param;//输入框内最后一串数字为0时，删除0拼接
        }
      }
    },
    clearValue(){//清空输入框内容
      this.inputShow.value = "0";
    },
    calValue(){
      var str = this.inputShow.value;
      str = str.replace('×','*').replace('÷','/').replace('%','*0.01');//替换运算符
      try{
        this.inputShow.value = eval(str);//若用户输入内容不符合运算规则，不计算
      }catch(err){
        return;
      }
    },
    squareValue(){//平方计算
      var str = this.inputShow.value;
      this.inputShow.value = Math.pow(eval(str),2);
    },
    radicalValue(){//开根号计算
      var str = this.inputShow.value;
      this.inputShow.value = Math.sqrt(eval(str));
    },
    backValue(){
      var str = this.inputShow.value;
      if(str.length ==1){
        this.inputShow.value = '0';
      }else{
        this.inputShow.value = str.slice(0,str.length-1);
      }
    },
    oppositeValue(){            //正负号取值
      var str = this.inputShow.value;
      var num = (''+parseInt(str.split('').reverse().join(''))).split('').reverse().join('');   //获取输入框内最后遗传数字
      var nlen = num.length;
      
      if(!isNaN( parseInt(str.charAt(str.length-1))) && num != 0){  //当输入框末位字符为数字且最后一串数字不为0时,取正负
        this.inputShow.value = str.substring(0,str.length-nlen)+`-${num}`;
      }
    }
  },
  components:{
    CalculatorItem
  }
}
</script>

<style>
body, ul, dl, dd, dt, ol, li, p, h1, h2, h3, h4, h5, h6, textarea, form, select, fieldset, table, td, div, input{margin:0;padding:0;-webkit-text-size-adjust:none}
h1, h2, h3, h4, h5, h6{font-size:12px;font-weight:normal}
body>div{margin:0 auto}
div{text-align:left}
a img{border:0}
body{color:#333;text-align:center;font:12px "微软雅黑";}
ul, ol, li{list-style-type:none;vertical-align:0}
a{outline-style:none;color:#535353;text-decoration:none}
a:hover{color:#D40000;text-decoration:none}
.clear{height:0;overflow:hidden;clear:both}

 .input-box{margin:0;width:100%;padding:9px 5px;height:80px;border:1px solid #e5e5e5;background:#FFF;text-align:right;line-height:80px;font-size:18px;font-family:Verdana, Geneva, sans-serif;color:#666;outline:none; text-transform:uppercase; position: fixed;bottom: 350px;left: 0;border: 5px solid rgb(235, 235, 235);}
 #btn-list{width:100%;overflow:hidden;position: fixed;bottom: 50px;left: 0;}
 #btn-list .btn-radius{border-radius:2px;-webkit-border-radius:2px;-moz-border-radius:2px;border:1px solid #e5e5e5;background:-webkit-gradient(linear, 0 0, 0 100%, from(#f7f7f7), to(#ebebeb));background:-moz-linear-gradient(top, #f7f7f7,#ebebeb);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#f7f7f7,endColorstr=#ebebeb,grandientType=1);line-height:60px;text-align:center;text-shadow:0px 1px 1px #FFF;font-weight:bold;font-family:Verdana, Geneva, sans-serif;color:#666;float:left;font-size:14px;cursor:pointer;}
 #btn-list .btn-radius:active{background:#ffffff;}
 #btn-list .clear-marginleft{margin-left:0;}
 #btn-list .font-14{font-size:14px;}
 #btn-list .color-red{color:#ff5050}
 #btn-list .color-blue{color:#00b4ff}
 #btn-list .btn-30{width:20%;height:60px;}
 #btn-list .btn-70{width:40%;height:60px;}
</style>