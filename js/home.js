/**
 * 作品页面交互逻辑
 * 包含项目筛选、图片模态框等功能
 */

$(document).ready(function () {
  // 作品筛选功能
  initPortfolioFilter();

  // 图片查看模态框
  initImageModal();
});

/**
 * 初始化作品筛选功能
 * 根据分类筛选展示项目
 */
function initPortfolioFilter() {
  $('.filter-btn').on('click', function () {
    var filter = $(this).attr('data-filter');

    // 更新按钮状态
    $('.filter-btn').removeClass('active');
    $(this).addClass('active');

    // 筛选作品
    var $works = $('.work-card');

    if (filter === 'all') {
      $works.each(function () {
        $(this).css('display', '');
      });
    } else {
      $works.each(function () {
        var category = $(this).attr('data-category');
        if (category === filter) {
          $(this).css('display', '');
        } else {
          $(this).css('display', 'none');
        }
      });
    }
  });
}

/**
 * 初始化图片查看模态框
 * 点击作品图片放大查看
 */
function initImageModal() {
  var imageModal = $('#imageModal');
  var modalImage = $('#modalImage');
  var closeModal = $('#closeModal');

  // 点击作品卡片打开图片
  $('.work-card__image').on('click', function (e) {
    e.preventDefault();
    var imgSrc = $(this).find('img').attr('src');
    var imgAlt = $(this).find('img').attr('alt');

    if (!imgSrc) return;

    modalImage.attr('src', imgSrc);
    modalImage.attr('alt', imgAlt || '');
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
    if (e.keyCode === 27 && imageModal.hasClass('open')) {
      closeImageModal();
    }
  });
}
