import { Configuration, OpenAIApi } from "openai";

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

  const name = req.body.name || '';
  if (name.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "Please enter a valid name",
      }
    });
    return;
  }

  const industry = req.body.industry || '';
  if (industry.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "Please enter a valid industry",
      }
    });
    return;
  }
  const demograph = req.body.demograph || '';
  if (demograph.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "Please enter a valid demograph",
      }
    });
    return;
  }

  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatePrompt(name,industry,demograph),
      temperature: 1,
    });
    res.status(200).json({ result: completion.data.choices[0].text });
  } catch(error) {
    // Consider adjusting the error handling logic for your use case
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

function generatePrompt(name,industry,demograph) {
  
    return `Suggest 5 different headlines for this company

Business: They are called baby ribs they are in the restaurant space there customers are men age 25-40
Response: 1. Super sweet ribs
          2. men love our meat
          3. baby got ribs
          4. Come eat our meat
          5. these ribs aint for

Business: They are called ${name} they are in the ${industry} space there customers are ${demograph} 
Response:`;
}


