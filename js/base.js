/**
 * 基础通用脚本
 * 包含导航栏、加载动画、移动端菜单、滚动动画等通用功能
 */
(function () {
  'use strict';

  // DOM 加载完成后初始化
  document.addEventListener('DOMContentLoaded', function () {
    initLoader();
    initNavbar();
    initMobileMenu();
    initScrollAnimations();
    initSmoothScroll();
  });

  /**
   * 初始化页面加载动画
   * 页面加载完成后渐隐加载遮罩
   */
  function initLoader() {
    var loader = document.getElementById('loader');
    if (!loader) return;

    if (document.readyState === 'complete') {
      hideLoader();
    } else {
      window.addEventListener('load', hideLoader);
    }
  }

  /**
   * 隐藏加载动画
   */
  function hideLoader() {
    var loader = document.getElementById('loader');
    if (!loader) return;

    loader.style.opacity = '0';
    loader.style.transition = 'opacity 0.5s ease';
    setTimeout(function () {
      loader.style.display = 'none';
    }, 500);
  }

  /**
   * 初始化导航栏滚动效果
   * 滚动时添加背景和阴影
   */
  function initNavbar() {
    var navbar = document.getElementById('navbar');
    if (!navbar) return;

    var lastScroll = 0;
    var scrollThreshold = 50;

    window.addEventListener('scroll', function () {
      var currentScroll = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScroll > scrollThreshold) {
        navbar.classList.add('nav--scrolled');
      } else {
        navbar.classList.remove('nav--scrolled');
      }

      lastScroll = currentScroll;
    }, { passive: true });
  }

  /**
   * 初始化移动端菜单切换
   */
  function initMobileMenu() {
    var navToggle = document.getElementById('navToggle');
    var navLinks = document.getElementById('navLinks');
    if (!navToggle || !navLinks) return;

    navToggle.addEventListener('click', function () {
      navToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    // 点击导航链接后关闭移动端菜单
    var links = navLinks.querySelectorAll('.nav__link');
    links.forEach(function (link) {
      link.addEventListener('click', function () {
        navToggle.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  }

  /**
   * 初始化滚动动画
   * 元素进入视口时添加动画类
   */
  function initScrollAnimations() {
    var animatedElements = document.querySelectorAll('.card, .section__header, .skill-card, .work-card, .stat-card, .timeline__item');
    if (animatedElements.length === 0) return;

    // 添加初始状态
    animatedElements.forEach(function (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    // 使用 Intersection Observer 检测元素进入视口
    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      });

      animatedElements.forEach(function (el) {
        observer.observe(el);
      });
    } else {
      // 降级方案：直接显示所有元素
      animatedElements.forEach(function (el) {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      });
    }
  }

  /**
   * 初始化平滑滚动
   * 支持锚点链接的平滑滚动
   */
  function initSmoothScroll() {
    var anchorLinks = document.querySelectorAll('a[href^="#"]');
    if (anchorLinks.length === 0) return;

    anchorLinks.forEach(function (link) {
      link.addEventListener('click', function (e) {
        var targetId = this.getAttribute('href');
        if (targetId === '#' || targetId.length < 2) return;

        var target = document.querySelector(targetId);
        if (!target) return;

        e.preventDefault();
        var offsetTop = target.offsetTop - 80; // 减去导航栏高度
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      });
    });
  }

  // 暴露全局函数
  window.showToast = function (message, duration) {
    duration = duration || 2000;

    var toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toast.style.cssText = [
      'position: fixed',
      'top: 20px',
      'left: 50%',
      'transform: translateX(-50%) translateY(-100px)',
      'background: var(--bg-tertiary, #1a2330)',
      'color: var(--text-primary, #f0f4f8)',
      'padding: 12px 24px',
      'border-radius: 8px',
      'font-size: 14px',
      'z-index: 9999',
      'box-shadow: 0 4px 12px rgba(0,0,0,0.3)',
      'transition: transform 0.3s ease, opacity 0.3s ease',
      'opacity: 0'
    ].join(';');

    document.body.appendChild(toast);

    // 显示
    requestAnimationFrame(function () {
      toast.style.transform = 'translateX(-50%) translateY(0)';
      toast.style.opacity = '1';
    });

    // 自动隐藏
    setTimeout(function () {
      toast.style.transform = 'translateX(-50%) translateY(-100px)';
      toast.style.opacity = '0';
      setTimeout(function () {
        if (toast.parentNode) {
          toast.parentNode.removeChild(toast);
        }
      }, 300);
    }, duration);
  };

  window.hideLoader = hideLoader;
})();
