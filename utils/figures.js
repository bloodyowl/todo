var main = {
    tick: '✔︎',
    cross: '✗',
    plus: '+'
};

var win = {
    tick: '√',
    cross: '×',
    plus: main.plus
};

module.exports = process.platform === 'win32' ? win : main;