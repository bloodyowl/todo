var tape = require("tape")
  , colors = require("../utils/colors")
  , todo = require("../")
  , fs = require("fs")

tape("todo", function(test){
  
  test.equal(todo.add("foo"), colors.yellow("+ foo"))
  test.deepEqual(todo.data[0], {task:"foo", checked:false, canceled:false})
  test.equal(todo.check(0), colors.green("✔︎ foo"))
  test.deepEqual(todo.data[0], {task:"foo", checked:true, canceled:false})
  test.equal(todo.add("bar"), colors.yellow("+ bar"))
  test.equal(todo.remove(1), colors.blue("✗ bar"))
  test.deepEqual(todo.data[1], {task:"bar", checked:false, canceled:true})
  test.equal(todo.list(), "0  " + colors.green("✔︎ foo") + "\n1  " + colors.blue("✗ bar"))
  test.equal(todo.clear(), "")
  test.deepEqual(todo.data, [])
  todo.close()
  test.equal(fs.readFileSync("./data.json", "utf-8"), "[]")
  test.end()

})
