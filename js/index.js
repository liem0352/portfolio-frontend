(function () {
  // 获取元素 '.li5box-car' 的宽度，并加上 7 像素的偏移量
  var witdhDefual = parseFloat($('.li5box-car').css('width').replace(/[^0-9\-,]/g, '')) + 7
  // 获取 '.li5box-ul' 下所有 '.li5box-car' 的数量
  let num = $('.li5box-ul .li5box-car').length;
  // 设置 '.li5box-ul' 的宽度为车辆数量乘以单个车辆的宽度
  $('.li5box-ul').css('width', (num) * witdhDefual + 'px');
  // 计算最大偏移量
  var MAX = (num - 1) * witdhDefual

  // 左箭头点击事件
  $('#leftimg').click(function () {
    // 获取当前的偏移量
    let value = parseFloat($('#li5boxul').css("transform").replace(/[^0-9\-,]/g, '').split(',')[4])
    
    // 如果偏移量小于等于 0，取反值
    if (value <= 0) {
      value = value * -1
    }
 
    // 如果偏移量大于或等于最大偏移量，返回
    if (value >= MAX) {
      return false
    }

    // 计算下一个偏移量并应用到 '.li5boxul'
    let result = parseFloat(value + witdhDefual) * -1
    $('#li5boxul').css('transform', 'translate3d(' + result + 'px,0px,0px)');
  })

  // 右箭头点击事件
  $('#rightimg').click(function () {
    // 获取当前的偏移量
    let value = parseFloat($('#li5boxul').css("transform").replace(/[^0-9\-,]/g, '').split(',')[4])
    
    // 如果偏移量大于或等于 0，或小于最大偏移量的负值，返回
    if (value >= 0 || value < MAX * -1) {
      return false
    }
   
    // 计算下一个偏移量并应用到 '.li5boxul'
    let result = parseFloat(value + witdhDefual)
    $('#li5boxul').css('transform', 'translate3d(' + result + 'px,0px,0px)')
  })

  // 播放按钮点击事件
  $('#playbuttom').click(function () {
    // 给 '#zhezhao' 添加 'active' 类
    $('#zhezhao').addClass('active')
    // 播放视频
    document.getElementById('videoResumeC').play();
  })

  // 音乐包装点击事件
  $('#musicwrap').click(function () {
    console.log(14563)
    // 判断音乐是否处于暂停状态
    if ($(this).hasClass('paused')) {
      // 如果暂停，移除 'paused' 类并播放音乐
      $(this).removeClass('paused')
      $('#play1')[0].play()
    } else {
      // 如果正在播放，添加 'paused' 类并暂停音乐
      $(this).addClass('paused')
      $('#play1')[0].pause()
    }
  })

  // // 正则表达式，匹配所有包含 '_min.' 的图片 src 属性
  // var test = /_min\./
  // // 遍历所有的图片节点
  // $("img").each(function(index,obj){	
  // 	if(test.test($(this).attr("src"))){
  // 		var reSrc = $(this).attr("src").replace(test,".");
  // 		$(this).attr("src",reSrc)
  // 	}		
  // })

})()
