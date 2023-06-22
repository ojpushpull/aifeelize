
import { useState } from "react";
import styles from "./index.module.css";
import GadView from "/components/GadView.js"


//set input states for form
export default function Home() {
  const [nameInput, setNameInput] = useState("");
  const [prodservInput, setProdservInput] = useState("");
  const [visionInput, setVisionInput] = useState("");
  const [missionInput, setMissionInput] = useState("");
  const [problemInput, setProblemInput] = useState("");
  const [solutionInput, setSolutionInput] = useState("");
  const [futureInput, setFutureInput] = useState("");
  const [colorInput, setColorInput] = useState("");
  const [villianInput, setVillianInput] = useState("");
  const [heroInput, setHeroInput] = useState("");
  const [descripInput, setDescripInput] = useState("");
  const [result, setResult] = useState();

  const [ isAlertVisible, setIsAlertVisible ] = useState(false);

   const handleButtonClick = () => {
      setIsAlertVisible(true);

      setTimeout(() => {
                   setIsAlertVisible(false);
                }, 30000);
         
    }
 

  //submit data to generate function
  async function onSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: nameInput, prodserv: prodservInput, vision: visionInput, mission: missionInput, problem: problemInput, solution: solutionInput,
        future: futureInput, colors: colorInput, villian: villianInput, hero: heroInput, descrip: descripInput }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }

      setResult(data.result);
      setNameInput("");
      setProdservInput("");
      setVisionInput("");
      setMissionInput("");
      setProblemInput("");
      setSolutionInput("");
      setFutureInput("");
      setColorInput("");
      setVillianInput("");
      setHeroInput("");
      setDescripInput("");
    } catch(error) {
      // error handling logic here
      console.error(error);
      alert(error.message);
    }

    
    
  }

  //pass result to child component
  const pToChild = () => { 
    console.log(result);
  }

  


  return (
    <div>
        
        <title>Business Narrative Generator</title>
       
        
        <GadView result={result} />
      
      <main className={styles.main}>
      <h2>AdPerfect.Ai prototype</h2>
        <img src="/logo192.png" className={styles.icon} />
        <h3>Create your narrative</h3>
        <p> Answer the questions in the form below with how they pertain to your company/organization</p>
        <p> When finished click the Generate narrative Button </p>
        <form onSubmit={onSubmit}>
          <textarea
            rows="5" 
            cols="33"
            required
            name="name"
            placeholder="Enter an company name"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
          />
          <textarea 
            rows="5" 
            cols="33"
            required
            name="prodserv"
            placeholder="Enter your product or service"
            value={prodservInput}
            onChange={(e) => setProdservInput(e.target.value)}
          />
          <textarea 
            rows="5" 
            cols="33"
            required
            name="vision"
            placeholder="Enter the vision of the organization"
            value={visionInput}
            onChange={(e) => setVisionInput(e.target.value)}
          />
          <textarea 
            rows="5" 
            cols="33"
            required
            name="mission"
            placeholder="Enter the mission of the organization"
            value={missionInput}
            onChange={(e) => setMissionInput(e.target.value)}
          />
          <textarea 
            rows="5" 
            cols="33"
            required
            name="problem"
            placeholder="What problem are you solving"
            value={problemInput}
            onChange={(e) => setProblemInput(e.target.value)}
          />
          <textarea 
            rows="5" 
            cols="33"
            required
            name="solution"
            placeholder="What is the solution to the problem"
            value={solutionInput}
            onChange={(e) => setSolutionInput(e.target.value)}
          />
          <textarea 
            rows="5" 
            cols="33"
            required
            name="future"
            placeholder="what is the future you are fighting for"
            value={futureInput}
            onChange={(e) => setFutureInput(e.target.value)}
          />
          <textarea 
            rows="5" 
            cols="33"
            required
            name="descrip"
            placeholder="Enter descriptive words that best describe your organization"
            value={descripInput}
            onChange={(e) => setDescripInput(e.target.value)}
          />
          <textarea 
            rows="5" 
            cols="33"
            required
            name="colors"
            placeholder="What core values represent your organization"
            value={colorInput}
            onChange={(e) => setColorInput(e.target.value)}
          />
          <textarea 
            rows="5" 
            cols="33"
            required
            name="villian"
            placeholder="What is the villian of your organization"
            value={villianInput}
            onChange={(e) => setVillianInput(e.target.value)}
          />
          <textarea
            rows="5" 
            cols="33"
            required
            name="hero"
            placeholder="If your organization had a hero who would it be"
            value={heroInput}
            onChange={(e) => setHeroInput(e.target.value)}
          />
          <input onClick={handleButtonClick} type="submit" value="Generate narrative" />
        </form>
        {isAlertVisible && <div className='alert-container'>
               <div className='alert-inner'>Loading Please Wait</div>
          </div>}
        <div name="buyv" className={styles.result}>{result}</div>
        <button onClick={pToChild}>Generate ads</button>
      </main>
      
    </div>
    
  );
}
