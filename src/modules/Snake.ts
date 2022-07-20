import Setting from "./Setting";

class Snake {
  // 蛇头
  headElement: HTMLElement;
  //舍身体
  bodyElement: HTMLCollection;
  //   蛇容器
  element: HTMLElement;
  constructor() {
    this.element = document.getElementById("snake")!;
    this.headElement = document.querySelector("#snake > div") as HTMLElement;
    this.bodyElement = this.element.getElementsByTagName("div")!;
  }
  //获取蛇的坐标
  get X() {
    return this.headElement.offsetLeft;
  }
  get Y() {
    return this.headElement.offsetTop;
  }
  //   设置蛇的坐标
  set X(value: number) {
    if (this.X === value) return;
    if (value < 0 || value > Setting.widthValue) {
      // 蛇撞墙了
      throw new Error("蛇撞墙了");
    }

    // 检查蛇有没有第二节身体而且不能掉头
    if (
      this.bodyElement[1] &&
      (this.bodyElement[1] as HTMLElement).offsetLeft === value
    ) {
      // console.log("水平方向发生掉头");
      if (value > this.X) {
        value = this.X - 10;
      } else {
        value = this.X + 10;
      }
    }
    this.moveBody();
    this.headElement.style.left = `${value}px`;
    this.checkHeadBody();
  }
  set Y(value: number) {
    if (this.Y === value) return;
    if (value < 0 || value > Setting.heightValue) {
      // 蛇撞墙了
      throw new Error("蛇撞墙了");
    }
    if (
      this.bodyElement[1] &&
      (this.bodyElement[1] as HTMLElement).offsetTop === value
    ) {
      // console.log("水平方向发生掉头");
      if (value > this.Y) {
        value = this.Y - 10;
      } else {
        value = this.Y + 10;
      }
    }
    this.moveBody();
    this.headElement.style.top = `${value}px`;
    this.checkHeadBody();
  }
  // 增加身体
  addBody() {
    let div = document.createElement("div");
    this.element.insertAdjacentElement("beforeend", div);
  }
  // 移动身体
  moveBody() {
    // console.log(this.bodyElement.length);
    for (let i = this.bodyElement.length - 1; i > 0; i--) {
      let X = (this.bodyElement[i - 1] as HTMLElement).offsetLeft;
      let Y = (this.bodyElement[i - 1] as HTMLElement).offsetTop;

      // 将值设置到当前身体上
      (this.bodyElement[i] as HTMLElement).style.left = `${X}px`;
      (this.bodyElement[i] as HTMLElement).style.top = `${Y}px`;
    }
  }
  // 防止碰撞身体
  checkHeadBody() {
    for (let i = 1; i < this.bodyElement.length; i++) {
      let bd = this.bodyElement[i] as HTMLElement;
      if (this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
        throw new Error("身体撞到了");
      }
    }
  }
}
export default Snake;
