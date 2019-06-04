import pmList from './pmList.js'
import foodList from './foodList.js'
import foodDic from './foodDic.js'
var globalObject = {
  pmList: pmList,
  foodList: foodList,
  foodDic: foodDic,
  getById: function(id){
    for (var i = 0, size = this.pmList.length; i < size; i++) {
      var item = this.pmList[i];
      if (id == item.id) {
        return item;
      }
    }
  },
  getFood: function(foodType){
    for(var i = 0, size = this.foodList.length;i<size;i++){
      var food = this.foodList[i];
      if(foodType == food.food){
        return food
      }
    }
  },
  getIngredient: function(receipe,quality){
    for (var i = 0, size = receipe.length; i < size; i++) {
      var r = receipe[i];
      if (quality == r.quality) {
        return r.ingredient
      }
    }
  },
  getFoodCName: function(name){
    return this.foodDic[name]
  }
}
module.exports = globalObject;