var fs = require("fs")
  , data = fs.existsSync("./data.json") ? require("./data.json") : []
  , colors = require("./utils/colors")
  , pad = function(integer){
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
    return colors.yellow("+ " + task)
  },
  list : function(){
    return data.map(function(item, index){
      return pad(index) +
      (item.canceled ?
        colors.blue("✗ " + item.task) :
        (item.checked ?
          colors.green("✔︎ " + item.task) :
          colors.yellow("  " + item.task))
        )
    }).join("\n")
  },
  check : function(task){
    data[task].checked = true
    return colors.green("✔︎ " + data[task].task)
  },
  remove : function(task){
    data[task].canceled = true
    return colors.blue("✗ " + data[task].task)
  },
  clear : function(){
    data = this.data = data.filter(function(item){
      return !item.canceled && !item.checked
    })
    return this.list()
  },
  close : function(){
    fs.writeFileSync("./data.json", new Buffer(JSON.stringify(data)), "utf-8")
  }
}
