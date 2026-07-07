// 导入paper库
paper.install(window);

// 定义常量SQRT_3
var SQRT_3 = Math.pow(3, 0.5);
// 声明变量
var triangle, D, mousePos, position;
var count = 20; // 降低星星数量
var petalsCount = 10; // 创建10个半径为10的花瓣

// 页面加载完成后执行的函数
window.onload = function () {
  // 初始化paper
  paper.setup('triangle-lost-in-space');

  // 初始化鼠标位置
  mousePos = paper.view.center.add([view.bounds.width / 3, 100]);
  position = paper.view.center;

  // 绘制背景
  var background = new Path.Rectangle(view.bounds);

  // 创建星星
  buildStars();
  // 创建三角形
  triangle = new Triangle(50);

  // 创建花瓣
  var petals = [];
  for (var i = 0; i < petalsCount; i++) {
    petals.push(new Petal(10)); // 使用新的花瓣数量
  }

  // 刷新视图
  paper.view.draw();

  // 每帧执行的函数
  paper.view.onFrame = function (event) {
    // 更新三角形位置
    position = position.add((mousePos.subtract(position).divide(50))); // 降低移动速度以降低负担
    var vector = (view.center.subtract(position)).divide(50); // 降低速度

    // 移动星星
    moveStars(vector.multiply(3));
    // 更新三角形
    triangle.update();

    // 更新花瓣
    for (var petal of petals) {
      petal.update();
    }
  };
};

// 窗口resize事件
window.onresize = function () {
  // 清空当前项目
  project.clear();

  // 绘制背景
  var background = new Path.Rectangle(view.bounds);

  // 重新创建星星
  buildStars();
  // 重新构建三角形
  triangle.build(50);
};

// 生成随机数的函数
var random = function (minimum, maximum) {
  return Math.round(Math.random() * (maximum - minimum) + minimum);
};

// 数值映射函数
var map = function (n, start1, stop1, start2, stop2) {
  return (n - start1) / (stop1 - start1) * (stop2 - start2) + start2;
};

// 三角形构造函数
var Triangle = function (a) {
  this.build(a);
};

// 构建三角形
Triangle.prototype.build = function (a) {
  var segments = [
    new paper.Point(0, -a / SQRT_3),
    new paper.Point(-a / 2, a * 0.5 / SQRT_3),
    new paper.Point(a / 2, a * 0.5 / SQRT_3),
  ];

  this.flameSize = a / SQRT_3;
  var flameSegments = [
    new paper.Point(0, this.flameSize),
    new paper.Point(-a / 3, a * 0.4 / SQRT_3),
    new paper.Point(a / 3, a * 0.4 / SQRT_3),
  ];

  // 创建三角形组
  this.group = new Group({
    children: [],
    position: view.center,
  });
};

// 更新三角形的状态
Triangle.prototype.update = function () {
  // 更新火焰的位置（代码注释掉了可用部分）
};

// 旋转三角形
Triangle.prototype.rotate = function () {
  // 旋转三角形位置（代码注释掉了可用部分）
};

// 鼠标移动事件
window.onmousemove = function (event) {
  if (!event) return;
  // 更新鼠标位置
  mousePos.x = event.x;
  mousePos.y = event.y;

  // 旋转三角形（如果不需要旋转，可以注释掉以减少计算）
  triangle.rotate();
};

// 创建星星的函数
var buildStars = function () {
  // 创建一个圆形作为星星的符号
  var path = new Path.Circle({
    center: [0, 0],
    radius: 3,
    fillColor: 'white',
    strokeColor: 'white',
  });

  // 创建符号
  var symbol = new Symbol(path);

  // 创建多个星星的实例
  for (var i = 0; i < count; i++) {
    var center = Point.random().multiply(paper.view.size);
    var placed = symbol.place(center);
    placed.scale(i / count + 0.01);
    placed.data = {
      vector: new Point({
        angle: Math.random() * 360,
        length: (i / count) * Math.random() / 5,
      }),
    };
  }
};

// 保持星星在视图内的函数
var keepInView = function (item) {
  var position = item.position;
  var viewBounds = paper.view.bounds;
  if (position.isInside(viewBounds)) return;
  var itemBounds = item.bounds;

  if (position.x > viewBounds.width + 5) {
    position.x = -item.bounds.width;
  }

  if (position.x < -itemBounds.width - 5) {
    position.x = viewBounds.width;
  }

  if (position.y > viewBounds.height + 5) {
    position.y = -itemBounds.height;
  }

  if (position.y < -itemBounds.height - 5) {
    position.y = viewBounds.height;
  }
};

// 移动星星的函数
var moveStars = function (vector) {
  var layer = project.activeLayer;
  for (var i = 1; i < count + 1; i++) {
    var item = layer.children[i];
    var size = item.bounds.size;
    var length = vector.length / 10 * size.width / 10;
    item.position = item.position.add(vector.normalize(length).add(item.data.vector));
    keepInView(item);
  }
};

// 花瓣构造函数
var Petal = function (radius) {
  this.group = new Group();

  var petalPath = new Path.Ellipse({
    center: [0, 0],
    radius: [radius, radius / 3],
    fillColor: 'pink',
  });

  this.group.addChild(petalPath);
  this.group.position = Point.random().multiply(paper.view.size);

  this.vector = new Point({
    angle: Math.random() * 360,
    length: Math.random() * 2 + 1, // 随机长度
  });
};

// 更新花瓣状态
Petal.prototype.update = function () {
  this.group.position = this.group.position.add(this.vector);
  keepInView(this.group);
};



