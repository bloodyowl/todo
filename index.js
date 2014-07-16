var fs = require("fs")
var data = fs.existsSync("./TODO.json") ? JSON.parse(fs.readFileSync("./TODO.json", "utf-8")) : []
var colors = require("./utils/colors")
var figures = require("./utils/figures")
var pad = function(integer){
  var string = String(integer)
  return string + Array(4 - string.length).join(" ")
}

module.exports = {
  data : data,
  add : function(task){
    data.push({
      task : task,
      checked : false,
      canceled : false
    })
    return colors.yellow(figures.plus + " " + task)
  },
  list : function(){
    return data.map(function(item, index){
      return pad(index) +
      (item.canceled ?
        colors.blue(figures.cross + " " + item.task) :
        (item.checked ?
          colors.green(figures.tick + " " + item.task) :
          colors.yellow("  " + item.task))
        )
    }).join("\n")
  },
  check : function(task){
    data[task].checked = true
    return colors.green(figures.tick + " " + data[task].task)
  },
  remove : function(task){
    data[task].canceled = true
    return colors.blue(figures.cross + " " + data[task].task)
  },
  clear : function(){
    data = this.data = data.filter(function(item){
      return !item.canceled && !item.checked
    })
    return this.list()
  },
  close : function(){
    fs.writeFileSync("./TODO.json", new Buffer(JSON.stringify(data, null, 2)), "utf-8")
  }
}
