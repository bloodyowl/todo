# 📋 todo

[![Build Status](https://travis-ci.org/bloodyowl/todo.svg)](https://travis-ci.org/bloodyowl/todo)

```bash
npm install -g bloody-todo
```

a simple cli todo list, saves a `TODO.json` file with the current task list.

```bash
td add do some stuff # add `do some stuff`
# + do some stuff
td list
# 0    do some stuff
td check 0
# ✔︎ do some stuff
td list
# 0  ✔︎ do some stuff
td add foo
# + foo
td list
# 0  ✔︎ do some stuff
# 1    foo
td remove 1
td list
# 0  ✔︎ do some stuff
# 1  ✗ foo
td clear
td list
#
```
