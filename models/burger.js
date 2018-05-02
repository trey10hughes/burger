var orm = require("../config/orm.js");

var burger = {
    all: function (cb) {
        orm.selectAll(function (res) {
            cb(res);
        });
    },
    create: function (name, cb) {
        orm.insertOne(name, cb);
    },
    update: function (id, cb) {
        orm.updateOne(id, cb);
    }
};

module.exports = burger;
