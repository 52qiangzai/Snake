import Setting from "./Setting";
// 定义食物类
class Food {
  // 定义属性表示十五对应的元素
  element: HTMLElement;
  constructor() {
    this.element = document.getElementById("food")!;
  }
  //定义获取食物x轴坐标
  get x() {
    return this.element.offsetLeft;
  }
  get y() {
    return this.element.offsetTop;
  }
  //食物的随机位置
  change() {
    // 蛇移动一次就是一格 10px
    // 食物的坐标必须是整十
    let left = `${
      Math.round((Math.random() * Setting.widthValue) / 10) * 10
    }px`;
    let top = `${
      Math.round((Math.random() * Setting.heightValue) / 10) * 10
    }px`;
    this.element.style.top = top;
    this.element.style.left = left;
  }
}
export default Food;
