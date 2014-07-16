#!/usr/bin/env node

var todo = require("./")
var command = process.argv[2]
var args = process.argv.slice(3).join(" ")

switch(command) {
  case "l":
  case "list":
    console.log(todo.list())
  break
  case "a":
  case "add":
    console.log(todo.add(args))
  break
  case "c":
  case "check":
    console.log(todo.check(args))
  break
  case "clear":
    console.log(todo.clear())
  break
  case "r":
  case "remove":
    todo.remove(args)
  break
  default:
    console.log("commands")
    console.log("l, list")
    console.log("a, add")
    console.log("c, check")
    console.log("r, remove")
}

todo.close()
