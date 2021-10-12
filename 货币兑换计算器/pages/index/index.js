// index.js
var C, m, y, g, o, h, r; //定义全局变量，用于存放人民币的值和各种货币汇率
Page({
  //事件处理函数
  calc: function(e) { //计算按钮事件函数
    C = parseInt(e.detail.value.cels); //将input组件的value值转化为整数类型并赋值给C
    m = parseFloat(e.detail.value.dollar); //将input组件的value值转化为浮点数类型并赋值给C
    y = parseFloat(e.detail.value.pounds); //将input组件的value值转化为浮点数类型并赋值给C
    g = parseFloat(e.detail.value.hangkong); //将input组件的value值转化为浮点数类型并赋值给C
    o = parseFloat(e.detail.value.euro); //将input组件的value值转化为浮点数类型并赋值给C
    h = parseFloat(e.detail.value.won); //将input组件的value值转化为浮点数类型并赋值给C
    r = parseFloat(e.detail.value.yen); //将input组件的value值转化为浮点数类型并赋值给C
    this.setData({
      M: (C / m).toFixed(4), //货币转换为美元并保留小数点后4位
      Y: (C / y).toFixed(4), //货币转换为英镑并保留小数点后4位
      G: (C / g).toFixed(4), //货币转换为港元并保留小数点后4位
      O: (C / o).toFixed(4), //货币转换为欧元并保留小数点后4位
      H: (C / h).toFixed(4), //货币转换为韩元并保留小数点后4位
      R: (C / r).toFixed(4), //货币转换为日元并保留小数点后4位        
    })    
  },
  reset: function() { //清空按钮事件函数
    this.setData({ //将变量设置为空字符并渲染到视图层
      M: '',
      Y: '',
      G: '',
      O: '',
      R: '',
      H: ''
    })
  }
})