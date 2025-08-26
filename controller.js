
// This is the only function that will be called by the endpoint.
function print(req, res){
    res.send("Bye world!!");
}

module.exports = print;