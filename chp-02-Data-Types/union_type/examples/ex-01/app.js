/**
 * ************************
 * UNION TYPE  [PIPE SYMBOL IS USED TO CREATE A UNION TYPE]
 * ************************
 */
var getReqMessage = function (statusCode) {
    var message;
    if (statusCode === "200" || statusCode === 200) {
        message = "Request was successfully processed!";
    }
    else if (statusCode === "404" || statusCode === 404) {
        message = "Requested resource was not found!";
    }
    else if (statusCode === "500" || statusCode === 500) {
        message = "Internal server error!";
    }
    else if (statusCode === "403" || statusCode === 403) {
        message = "Access was forbidden!";
    }
    else {
        message = "Bad request!";
    }
    return message;
};
console.log(getReqMessage(200));
console.log(getReqMessage("404"));
console.log(getReqMessage(403));
console.log(getReqMessage("400"));
