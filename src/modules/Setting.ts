// 设置类
class Setting {
  // 游戏活动宽度
  static widthValue: number =
    document.getElementById("stage")!.clientWidth -
    document.getElementById("food")!.clientWidth;
  // 游戏活动高度
  static heightValue: number =
    document.getElementById("stage")!.clientHeight -
    document.getElementById("food")!.clientHeight;
  // 设置游戏最高等级
  static maxLevel: number = 10;
  //  设置分数升级间隔值 10分升一级
  static upgradeValue: number = 10;
}
export default Setting;
