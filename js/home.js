/**
 * 作品页面交互逻辑
 * Portfolio Page Interaction Logic
 */

$(document).ready(function () {
  // 加载动画
  setTimeout(function () {
    $('#loader').addClass('hidden');
  }, 600);

  // 移动端菜单切换
  $('#navToggle').on('click', function () {
    $(this).toggleClass('active');
    $('#navLinks').toggleClass('open');
  });

  // 导航栏滚动效果
  var lastScrollTop = 0;
  var navbar = $('#navbar');

  $(window).on('scroll', function () {
    var scrollTop = $(this).scrollTop();

    if (scrollTop > 50) {
      navbar.css('box-shadow', '0 4px 20px rgba(0, 0, 0, 0.3)');
    } else {
      navbar.css('box-shadow', 'none');
    }

    lastScrollTop = scrollTop;
  });

  // 作品筛选功能
  $('.filter-btn').on('click', function () {
    var filter = $(this).data('filter');

    // 更新按钮状态
    $('.filter-btn').removeClass('active');
    $(this).addClass('active');

    // 筛选作品
    var $works = $('.work-card');

    if (filter === 'all') {
      $works.fadeIn(300);
    } else {
      $works.each(function () {
        var category = $(this).data('category');
        if (category === filter) {
          $(this).fadeIn(300);
        } else {
          $(this).fadeOut(200);
        }
      });
    }
  });

  // 图片查看模态框
  var imageModal = $('#imageModal');
  var modalImage = $('#modalImage');
  var closeModal = $('#closeModal');

  // 点击作品卡片打开图片
  $('.work-card__image').on('click', function () {
    var imgSrc = $(this).find('img').attr('src');
    var imgAlt = $(this).find('img').attr('alt');

    modalImage.attr('src', imgSrc);
    modalImage.attr('alt', imgAlt);
    imageModal.addClass('open');
    $('body').css('overflow', 'hidden');
  });

  // 关闭模态框
  function closeImageModal() {
    imageModal.removeClass('open');
    $('body').css('overflow', '');
  }

  closeModal.on('click', closeImageModal);

  // 点击背景关闭
  imageModal.on('click', function (e) {
    if (e.target === this) {
      closeImageModal();
    }
  });

  // ESC 键关闭
  $(document).on('keydown', function (e) {
    if (e.key === 'Escape' && imageModal.hasClass('open')) {
      closeImageModal();
    }
  });
});
