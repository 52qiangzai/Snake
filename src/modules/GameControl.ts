import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";
class GameControl {
  snake: any;
  food: Food;
  scorePanel: ScorePanel;
  direction: string;
  // 记录游戏是否结束
  isLeave: boolean = true;
  constructor() {
    this.snake = new Snake();
    this.food = new Food();
    this.scorePanel = new ScorePanel();
    this.direction = "";
    this.init();
  }
  // 游戏初始化
  init() {
    document.addEventListener("keydown", this.getDirection.bind(this));
    this.run();
  }
  // 获取前进的方向
  getDirection(e: KeyboardEvent) {
    this.direction = e.key;
    console.log(this.direction);
    // this.run();
  }
  // 判断方向
  run() {
    /*
    ArrowRight 向右
    ArrowDown 向下
    ArrowUp 向上
    ArrowLeft  向左
    
    */
    //  获取蛇的位置
    let X = this.snake.X;
    let Y = this.snake.Y;
    switch (this.direction) {
      case "ArrowRight":
      case "Right":
        X += 10;
        break;
      case "ArrowLeft":
      case "Left":
        X -= 10;
        break;
      case "ArrowDown":
      case "Down":
        Y += 10;
        break;
      case "ArrowUp":
      case "Up":
        Y -= 10;
        break;
    }

    // 检查是否迟到食物
    this.checkEat(X, Y);

    try {
      this.snake.X = X;
      this.snake.Y = Y;
    } catch (e: any) {
      alert(e.message);

      this.isLeave = false;
      this.snake.X = 0;
      this.snake.Y = 0;
      // 初始化面板
      this.scorePanel.resetValue();
      window.location.reload();
    } // 开启定时调用
    this.isLeave &&
      setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30);
  }

  // 检查蛇是否吃到食物
  checkEat(X: number, Y: number) {
    if (X === this.food.x && Y === this.food.y) {
      console.log("吃到食物了");
      // 改变食物位置
      this.food.change();
      // 分数增加
      this.scorePanel.addScore();
      // 蛇增加一节
      this.snake.addBody();
    }
  }
}
export default GameControl;
