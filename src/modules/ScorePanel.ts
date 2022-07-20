import Setting from "./Setting";
// 定义加分类
class ScorePanel {
  score = 0;
  level = 1;
  scoreElement: HTMLElement;
  levelElement: HTMLElement;
  constructor() {
    // 记录分数和等级
    this.scoreElement = document.getElementById("score")!;
    this.levelElement = document.getElementById("level")!;
  }
  //   设置加分等级方法
  addScore() {
    this.scoreElement.innerHTML = `${++this.score}`;
    if (this.score % Setting.upgradeValue === 0) this.addLevel();
  }
  addLevel() {
    // 十分一个等级
    if (this.level < Setting.maxLevel) {
      this.levelElement.innerHTML = `${++this.level}`;
    }
  }
  // 归零初始化
  resetValue() {
    this.score = 0;
    this.level = 1;
    this.levelElement.innerHTML = "1";
    this.scoreElement.innerHTML = "0";
  }
}
export default ScorePanel;
