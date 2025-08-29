
// This is the only function that will be called by the endpoint.
function test(req, res){
    res.send("This is home");
}

module.exports = test;