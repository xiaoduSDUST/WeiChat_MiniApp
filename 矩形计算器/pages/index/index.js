// pages/zj/index.js/demo202-TriangleArea/index.js
Page({
  formSubmit: function(e) {
    var a = parseFloat(e.detail.value.a); //将input组件的value值转换为实数类型并赋值给变量a
    var b = parseFloat(e.detail.value.b); //将input组件中的value值转换为实数类型并赋值给变量b
    var area; //定义存放面积的变量
    var cir;//定义存放周长的变量
    { //计算矩形面积
      area = a * b
    }
    { //计算矩形周长
      cir = (a + b) * 2
    }
    this.setData({
      result1: area ,//将矩形面积渲染到视图层
      result2: cir //将矩形周长渲染到视图层
    });
  },
  clear: function () { //清空input组件中输入的数据
    this.setData({
      a: '',
      b: '',
      c: '',
      result1: '',
      result2: ''
    })
  }
})