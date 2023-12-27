const axios = require("axios");

async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      res.status(405).json({ message: "Method should be POST" });
    } else {
      const { body } = req;
      const url = "https://api.openai.com/v1/chat/completions";
      const headers = {
        "Content-type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      };

      const response = await axios.post(url, body, { headers });

      res.status(200).json(response.data);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
}

module.exports = handler;
