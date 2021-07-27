module.exports = {
    getHome: (req, res) => {
        res.status(200).json({mssg: 'Hello, World!'})
    }
}