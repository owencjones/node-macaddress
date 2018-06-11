var exec = require('child_process').exec;

module.exports = function (iface, callback) {
    if (iface.test(/[^a-z0-9]/gi)) {
        return callback('Invalid characters in string');
    }
    exec("cat /sys/class/net/" + iface + "/address", function (err, out) {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, out.trim().toLowerCase());
    });
};
