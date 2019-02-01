module.exports = (router, routes) => {
    routes.forEach((path) => {
        let def = require(path)
        router.register(def.path, def.methods, def.middleware)
    })
}