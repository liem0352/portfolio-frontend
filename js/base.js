(function () {
  initActive() // 初始化活动状态
  bindEvenInit() // 绑定事件初始化

  // 初始化活动状态（主题）的函数
  // 简化：仅设置 data-theme 属性，所有颜色变量由 base.css 中的 :root[data-theme="..."] 块统一管理
  function initActive () {
    let root = document.documentElement; // 根元素
    var active = sessionStorage.getItem('wttandroid'); // 读取已保存的主题状态

    // active === 'true' 表示浅色主题；其他（null / 'false'）走深色默认
    if (active && active == 'true') {
      $('#myRadio').removeClass('active');
      $('.navigation').removeClass('active');
      root.setAttribute('data-theme', 'light');
    } else {
      $('#myRadio').addClass('active');
      $('.navigation').addClass('active');
      root.setAttribute('data-theme', 'dark');
    }
  }

  // 绑定主题切换按钮（myRadio）点击事件
  // 简化逻辑：只切换 data-theme，并派发自定义事件 'theme:changed' 供 canvas 等监听
  $('#myRadio').click(function () {
    let root = document.documentElement;

    // 当前是深色（有 active 类） → 切换为浅色
    if ($('#myRadio').hasClass('active')) {
      sessionStorage.setItem('wttandroid', true); // 持久化
      $('#myRadio').removeClass('active');
      $('.navigation').removeClass('active');
      root.setAttribute('data-theme', 'light');
    } else {
      // 当前是浅色 → 切换为深色
      sessionStorage.setItem('wttandroid', false);
      $('#myRadio').addClass('active');
      $('.navigation').addClass('active');
      root.setAttribute('data-theme', 'dark');
    }

    // 派发自定义事件：canvas.js 监听后会重建星星 / 花瓣，使其颜色跟随主题
    document.dispatchEvent(new CustomEvent('theme:changed', {
      detail: { theme: root.getAttribute('data-theme') }
    }));
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

// 控制星星洒落的函数：每次鼠标移动生成少量柔和光点
function scatterStars(event) {
    // 降低生成频率：每 3 帧最多生成一次，避免过密
    scatterStars._frame = (scatterStars._frame || 0) + 1;
    if (scatterStars._frame % 3 !== 0) return;

    // 每次只生成 1-2 颗，更自然
    var count = Math.random() > 0.5 ? 2 : 1;
    for (var i = 0; i < count; i++) {
        var star = createStar();
        star.style.left = event.pageX + 'px';
        star.style.top = event.pageY + 'px';
        moveStar(star);
    }
}

// 控制单个星星动画的函数：更柔和的飘落轨迹
function moveStar(star) {
    var speedX = (Math.random() - 0.5) * 3; // 水平漂移更轻微
    var speedY = 0.5 + Math.random() * 1.5; // 垂直下落更慢
    var decay = 0.015 + Math.random() * 0.015; // 随机淡出速度

    function animate() {
        star.style.left = parseFloat(star.style.left) + speedX + 'px';
        star.style.top = parseFloat(star.style.top) + speedY + 'px';
        star.style.opacity = parseFloat(star.style.opacity) - decay;
        if (star.style.opacity <= 0) {
            star.remove();
        } else {
            requestAnimationFrame(animate);
        }
    }
    animate();
}

// 创建星星的函数：随机大小、透明度、圆角，营造柔和光点
function createStar() {
    var star = document.createElement('div');
    var size = 2 + Math.random() * 3; // 2-5px 随机大小
    var opacity = 0.4 + Math.random() * 0.5; // 0.4-0.9 随机透明度
    var hueShift = (Math.random() - 0.5) * 20; // 轻微色相偏移

    star.className = 'star'; // 给星星添加样式类
    star.style.position = 'absolute'; // 设置定位
    star.style.width = size + 'px';
    star.style.height = size + 'px';
    star.style.borderRadius = '50%';
    star.style.opacity = opacity; // 初始不透明度
    star.style.filter = 'blur(' + (Math.random() > 0.6 ? '1px' : '0px') + ')';
    document.body.appendChild(star);
    return star;
}

// 添加事件监听器
document.addEventListener('mousemove', scatterStars);

