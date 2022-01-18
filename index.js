"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(url).then(function (response) {
    var todo = response.data;
    var Id = todo.Id;
    var title = todo.Title;
    var Finished = todo.Finished;
    console.log("\n    The ID of :".concat(Id, "\n    Has a Title of :").concat(title, "\n    which is : ").concat(Finished, " .\n  "));
});
