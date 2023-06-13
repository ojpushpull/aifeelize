import { useState } from "react";
import styles from "./index.module.css";
import { useRouter } from "next/router";



{/*
export default function Building() {
    const [narrative, setNarrative] = useState("");
    
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
} */}

export default function Building() {

localStorage.getItem('narrative');

}

