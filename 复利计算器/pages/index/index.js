var pcp, rat, sum; //定义本金数、利率数和求和结果三个全局变量
Page({
  principal: function(e) {
    pcp = parseInt(e.detail.value); //将input组件value值转换为整数并赋值
  },
  rate: function(e) {
    rat = parseFloat(e.detail.value); //将input组件value值转换为整数并赋值
  },
  calc: function() {
    sum = pcp;
    for (var i = 0; i < 5; i ++) {
      sum += sum * rat; //利用for循环求和
    }
    this.setData({
      sum: sum //将全局变量sum的值渲染到视图层
    })
  }
})