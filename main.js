"use strict"

const port = 3000, 
    http = require("http"),
    httpStatus = require("http-status-codes"),
    router = require("./router"),
    contentTypes = require("./contentTypes"),
    utils = require("./utils");

router.get("/", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/index.html", res);
});

router.get("/courses", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/courses.html", res);
});

router.get("/contact", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/contact.html", res);
});

router.post("/", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/thanks.html", res);
});

http.createServer(router.handle).listen(port);
console.log(`the server is listening on port number ${port}`);