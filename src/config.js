module.exports = {
    api: {
        port: process.env.PORT || 3000
    },
    mongodb: {
        connString: process.env.MONGODB || 'mongodb://localhost:27017/commerce',
        configs: { useNewUrlParser: true }
    }
}