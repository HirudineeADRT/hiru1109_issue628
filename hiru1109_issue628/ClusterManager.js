module.exports = function() {
    this.clusters = [];

    this.clusters["hiru"] = {
        host: process.env.EndPoint_redisHiru,
        port: 6379,
        clusterModeEnabled: false
    };
};