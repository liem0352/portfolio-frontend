/**
 * 首页脚本
 * 包含首页特定的交互功能
 */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    initHeroParallax();
    initStatsCounter();
  });

  /**
   * 初始化 Hero 区域视差效果
   * 鼠标移动时背景轻微偏移
   */
  function initHeroParallax() {
    var hero = document.querySelector('.hero');
    if (!hero) return;

    var heroBg = hero.querySelector('.hero__bg');
    if (!heroBg) return;

    var isHovering = false;

    hero.addEventListener('mouseenter', function () {
      isHovering = true;
    });

    hero.addEventListener('mouseleave', function () {
      isHovering = false;
      heroBg.style.transform = 'translate(0, 0) scale(1.05)';
    });

    hero.addEventListener('mousemove', function (e) {
      if (!isHovering) return;

      var rect = hero.getBoundingClientRect();
      var x = (e.clientX - rect.left) / rect.width - 0.5;
      var y = (e.clientY - rect.top) / rect.height - 0.5;

      var moveX = x * 20;
      var moveY = y * 20;

      heroBg.style.transform = 'translate(' + moveX + 'px, ' + moveY + 'px) scale(1.05)';
    });
  }

  /**
   * 初始化统计数字计数动画
   * 数字从 0 滚动到目标值
   */
  function initStatsCounter() {
    var statNumbers = document.querySelectorAll('.stat-card__number');
    if (statNumbers.length === 0) return;

    if (!('IntersectionObserver' in window)) {
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateNumber(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.5
    });

    statNumbers.forEach(function (el) {
      observer.observe(el);
    });
  }

  /**
   * 数字滚动动画
   * @param {HTMLElement} el - 数字元素
   */
  function animateNumber(el) {
    var text = el.textContent.trim();
    var isInfinity = text === '∞';

    if (isInfinity) {
      el.style.opacity = '0';
      el.style.transform = 'scale(0.5)';
      el.style.transition = 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
      requestAnimationFrame(function () {
        el.style.opacity = '1';
        el.style.transform = 'scale(1)';
      });
      return;
    }

    var match = text.match(/(\d+)(.*)/);
    if (!match) return;

    var target = parseInt(match[1], 10);
    var suffix = match[2] || '';
    var duration = 1500;
    var startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);

      // 使用 easeOutQuart 缓动函数
      var eased = 1 - Math.pow(1 - progress, 4);
      var current = Math.floor(eased * target);

      el.textContent = current + suffix;

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  }
})();
