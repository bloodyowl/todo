module.exports = {
  green: function (str) {
    return "\033[0m\033[32m" + str + "\033[0m"
  },
  blue: function (str) {
    return "\033[0m\033[34m" + str + "\033[0m"
  },
  yellow: function (str) {
    return "\033[0m\033[33m" + str + "\033[0m"
  }
}