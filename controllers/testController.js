const testService = require("../services/testService")

const test = async (req, res) => {
    try {
        res.status(200).json({
            message: "Erfollgreich test.",
            data: { user: "masar", token: null },
          });
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    test
}