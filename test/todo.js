var tape = require("tape")
  , colors = require("../utils/colors")
  , figures = require("../utils/figures")
  , todo = require("../")
  , fs = require("fs")

tape("todo", function(test){
  
  test.equal(todo.add("foo"), colors.yellow("+ foo"))
  test.deepEqual(todo.data[0], {task:"foo", checked:false, canceled:false})
  test.equal(todo.check(0), colors.green(figures.tick + " foo"))
  test.deepEqual(todo.data[0], {task:"foo", checked:true, canceled:false})
  test.equal(todo.add("bar"), colors.yellow(figures.plus + " bar"))
  test.equal(todo.remove(1), colors.blue(figures.cross + " bar"))
  test.deepEqual(todo.data[1], {task:"bar", checked:false, canceled:true})
  test.equal(todo.list(), "0  " + colors.green(figures.tick + " foo") + "\n1  " + colors.blue(figures.cross + " bar"))
  test.equal(todo.clear(), "")
  test.deepEqual(todo.data, [])
  todo.close()
  test.equal(fs.readFileSync("./TODO.json", "utf-8"), "[]")
  test.end()

})
