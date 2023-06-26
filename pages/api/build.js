import  { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
    if (!configuration.apiKey) {
        res.status(500).json({
            error: {
                message: "OpenAI API key not configured, please follow instructions in README.md",
            }
        });
        return;
    }

    const result = req.body.buyv || '';
      if (result.length === 0) {
      res.status(400).json({
        error: {
          message: "Please create a buying vidison first",
        }
      });
      return;
    }

    try {
        const completer = await openai.createCompletion({ 
            model: "text-davinci-003",
            prompt: generateAds(result),
            temperature: 0.6,
  
        });
        res.status(200).json({ result: completer.data.choices[0].text });
    } catch (error) {
        if (error.response) {
            console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: 'An error occurred during your request.',
        }
      });
    }
    }
}

function generateAds(result) {
    return `You are an google adwords pay per click specialist create a google ad using the companys ${result} story narrative as inspiration for the advertisements



Business: You are an google adwords pay per click specialist create a google ad using the companys ${result} story narrative as inspiration for the advertisements
Response:`;
}