(function () {
  initActive() // 初始化活动状态
  bindEvenInit() // 绑定事件初始化
  var mycard = $('#mycard') // 获取ID为mycard的元素
  
  // 获取mycard元素的顶部偏移量
  let mycardTop = mycard && mycard.offset() && mycard.offset().top;

  // 添加滚动事件监听
  window.onscroll = function () {
    var e = e || window.event; // 兼容性处理
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop; // 获取当前滚动条位置
    console.log(scrollTop); // 打印当前滚动位置
    // 判断滚动位置是否超过mycard的顶部位置
    // if (scrollTop > mycardTop && window.innerWidth > 1200) {
    if (window.innerWidth > 1200) {
      mycard.addClass('scroll'); // 如果超过，添加scroll类
    } else{
      mycard.removeClass('scroll'); // 否则，移除scroll类
    }
  }

  // 初始化活动状态的函数
  function initActive () {
    let root = document.querySelector(':root'); // 获取根元素
    var active = sessionStorage.getItem('wttandroid'); // 从sessionStorage中获取活动状态
    
    // 判断用户是否为非第一次登录且状态为开启灯（白色）
    if (active && active == 'true') {
      $('#myRadio').removeClass('active'); // 移除myRadio的active类
      $('.navigation').removeClass('active'); // 移除navigation的active类

      // 设置CSS变量为白色主题
      root.style.setProperty('--backColor', '#fff');
      root.style.setProperty('--borderline', '#fff');
      root.style.setProperty('--headerCOlor', '#fff');
      root.style.setProperty('--headerhover', 'rgb(255, 255, 255,.8)');
      root.style.setProperty('--headerFont', '#00283A' );
      root.style.setProperty('--fontColor', '#fff' );
      root.style.setProperty('--mainColor', '#ff8181' );
      root.style.setProperty('--bagColor', '#f4f5f7');
    } else { // 第一次登录或是黑色主题时，设置为黑色主题
      $('#myRadio').addClass('active'); // 添加myRadio的active类
      $('.navigation').addClass('active'); // 添加navigation的active类
      
      // 设置CSS变量为黑色主题
      root.style.setProperty('--backColor', '#fff');
      root.style.setProperty('--borderline', '#00283A');
      root.style.setProperty('--headerCOlor', '#00283A');
      root.style.setProperty('--headerhover', 'rgb(0, 40, 58,.8)');
      root.style.setProperty('--headerFont', '#fff' );
      root.style.setProperty('--fontColor', '#00283A' );
      root.style.setProperty('--mainColor', '#ff8181' );
      root.style.setProperty('--bagColor','#02162b');
    }
  }

  // 绑定myRadio点击事件
  $('#myRadio').click(function () {
    let root = document.querySelector(':root'); // 获取根元素

    // 判断myRadio是否有active类
    if ($('#myRadio').hasClass('active')) { // 如果是黑色，将其更改为白色
      sessionStorage.setItem('wttandroid', true); // 保存状态为true
      
      $('#myRadio').removeClass('active'); // 移除active类
      $('.navigation').removeClass('active'); // 移除导航的active类

      // 设置CSS变量为白色主题
      root.style.setProperty('--backColor', '#fff');
      root.style.setProperty('--borderline', '#fff');
      root.style.setProperty('--headerCOlor', '#fff');
      root.style.setProperty('--headerhover', 'rgb(255, 255, 255,.8)');
      root.style.setProperty('--headerFont', '#00283A' );
      root.style.setProperty('--fontColor', '#fff' );
      root.style.setProperty('--mainColor', '#ff8181' );
      root.style.setProperty('--bagColor', '#f4f5f7');

    } else { // 如果是白色，将其更改为黑色
      sessionStorage.setItem('wttandroid', false); // 保存状态为false
      
      $('#myRadio').addClass('active'); // 添加active类
      $('.navigation').addClass('active'); // 添加导航的active类
      
      // 设置CSS变量为黑色主题
      root.style.setProperty('--backColor', '#fff');
      root.style.setProperty('--borderline', '#00283A');
      root.style.setProperty('--headerCOlor', '#00283A');
      root.style.setProperty('--headerhover', 'rgb(0, 40, 58,.8)');
      root.style.setProperty('--headerFont', '#fff' );
      root.style.setProperty('--fontColor', '#00283A' );
      root.style.setProperty('--mainColor', '#ff8181' );
      root.style.setProperty('--bagColor','#02162b');
    }
  })

  // 绑定遮罩层关闭事件
  $('#zhezhao>.close').click(function () {
    console.log('遮罩层'); // 打印遮罩层点击信息
    if ($('#zhezhao').hasClass('active')) { // 如果遮罩层是激活状态
      $('#zhezhao').removeClass('active'); // 移除激活状态
      document.getElementById('videoResumeC').pause(); // 暂停视频
    } else {
      $('#zhezhao').addClass('active'); // 添加激活状态
    }
  })
  
  // 绑定最小菜单点击事件
  $('#minmenu').click(function () {
    console.log('遮罩层'); // 打印菜单点击信息
    if ($('#minmenu').hasClass('active')) { // 如果最小菜单是激活状态
      $('#minmenu').removeClass('active'); // 移除激活状态
      $('.menu_list').removeClass('active'); // 移除菜单列表激活状态
    } else {
      $('#minmenu').addClass('active'); // 添加激活状态
      $('.menu_list').addClass('active'); // 添加菜单列表激活状态
    }
  })
  
  // 页面加载完成后的处理
  document.onreadystatechange = function () {
    if (document.readyState == 'complete') {
      let opacity = $('.lodding-wrap').css('opacity'); // 获取加载框的透明度
      let timer = null;
      timer = opacity && setInterval(() => {
        opacity -= 0.1; // 每次减少透明度
        $('.lodding-wrap').css('opacity', opacity); // 更新透明度
        console.log(opacity); // 打印透明度
        if (opacity <= 0) { // 如果透明度小于等于0
          $('.lodding-wrap').css('display', 'none'); // 隐藏加载框
          clearInterval(timer); // 清除定时器
        }
      }, 100); // 设置每100毫秒执行一次
    }
  }

  // 锚点定位初始化
  function bindEvenInit(){
    $('.navbtn').bind("click touch", function () {
      // 滚动到与$(this).attr('href')锚点关联的id所在位置
      $('html,body').animate({scrollTop: ($($(this).attr('href')).offset().top - 100)}, 500);
      return false; // 阻止默认事件
    });
  }

  // 获取模态框
  var modal = document.getElementById("image-modal");
  var modalImg = document.getElementById("modal-image");
  // 获取关闭按钮
  var closeBtn = document.getElementById("close-modal");

  // 为每个图片添加点击事件
  var images = document.querySelectorAll('.li1-box-item img');
  images.forEach(function(image) {
    image.onclick = function() {
      modal.style.display = "block";
      modalImg.src = this.src;
    }
  });

  if(modal != null){
    // 当点击关闭按钮时，隐藏模态框
closeBtn.onclick = function() {
  modal.style.display = "none";
}
}

  // 当在模态框以外的地方点击时也隐藏模态框
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  function openImage(element) {
    const img = element.querySelector('img').src; // 获取点击的图片路径
    const magnifiedImg = document.getElementById('magnifiedImg');
    magnifiedImg.src = img; // 设置放大镜中的图片
    document.getElementById('magnifier').style.display = 'flex'; // 显示放大镜
}

function closeMagnifier() {
    document.getElementById('magnifier').style.display = 'none'; // 关闭放大镜
}
})();

// 控制星星洒落的函数
function scatterStars(event) {
    for (var i = 0; i < 5; i++) { // 每次鼠标移动洒下5颗星星，可调整数量
        var star = createStar();
        star.style.left = event.pageX + 'px';
        star.style.top = event.pageY + 'px';
        moveStar(star);
    }
}

// 控制单个星星动画的函数
function moveStar(star) {
    var speedX = (Math.random() - 0.5) * 5; // 水平速度有正有负
    var speedY = 1 + Math.random() * 3; // 垂直速度向下
    function animate() {
        star.style.left = parseFloat(star.style.left) + speedX + 'px';
        star.style.top = parseFloat(star.style.top) + speedY + 'px';
        star.style.opacity -= 0.02; // 逐渐消失
        if (star.style.opacity <= 0) {
            star.remove();
        } else {
            requestAnimationFrame(animate);
        }
    }
    animate();
}

// 创建星星的函数
function createStar() {
    var star = document.createElement('div');
    star.className = 'star'; // 给星星添加样式类
    star.style.position = 'absolute'; // 设置定位
    star.style.opacity = 1; // 初始不透明度
    document.body.appendChild(star);
    return star;
}

// 添加事件监听器
document.addEventListener('mousemove', scatterStars);

