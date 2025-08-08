const aiService = require('../services/ai.service')

module.exports.getReview = async (req, res) => {
    const code = req.body.code;

    if (!code) {
        return res.status(400).send("Prompt is required");
    }

    try {
        const aiResponse = await aiService(code); // Changed variable name
        res.send(aiResponse); // Now using res (Express response object)
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send("Internal server error");
    }
};