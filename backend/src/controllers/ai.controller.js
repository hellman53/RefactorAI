const aiService = require("../services/ai.service");

module.exports.getReview = async (req, res) => {
  const code = req.body.code;

  if (!code) {
    return res.status(400).json({ error: "Code is required" });
  }

  try {
    const response = await aiService(code);
     // Remove extra escape sequences
   const cleanResponse = response.replace(/\\n/g, "\n").replace(/\\"/g, '"');

    res.type("text/markdown"); // Content-Type: text/markdown
    res.send(cleanResponse);
    

  } catch (error) {
    console.error("AI Service Error:", error);
    res.status(500).json({ error: "AI Service failed" });
  }
};
