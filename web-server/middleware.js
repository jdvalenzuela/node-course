//Use module exports middleware
var middleware  = {
    requireAuthentication:  function(req, res, next){
        console.log('private route hit!');
        next();
    },

    logger: function(req, res, next){
        var fechaLog = Date().toString();
        console.log('Request' + fechaLog + ': '  + req.method + ' ' + req.originalUrl);
        next();
    }
};

module.exports = middleware;