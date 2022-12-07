import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header.js";
import FilterBox from "./components/FilterBox.js";
import Jobs from "./components/Jobs.js";
import Data from "./data/Jobs.json";

function App() {
  const [tags, setTags] = useState([]);
  const [data, setData] = useState(Data);

  const AddTags = (tag) => {
    if (tags.indexOf(tag) === -1) {
      const arrtags = [...tags, tag];
      setTags(arrtags);
      showData(arrtags);
    }
  };
  const RemoveAllTags = () =>{
    setTags([]);
    showData([]);
  }
  const RemoveTags = (tag) => {
      let alltags = tags;
      const index = alltags.indexOf(tag);
      alltags.splice(index, 1);
      setTags(alltags);
      showData(alltags);
    }

  const showData = (arrtags) =>{
    setData(
      Data.filter((job) => {
        let togle = true;
        const languages =  job.languages || [];
        const tools = job.tools || [];
        const taglist = [job.role, job.level, ...languages, ...tools];
        for (let i = 0; i < arrtags.length; i++) {
          if (taglist.indexOf(arrtags[i]) === -1 ){
            togle = false;
          }
        }
        return togle;
      })
    );
  }

  return (
    <div id="Div_App_JSX" className="Div_App_CSS">
      <Header />
      <FilterBox removeAllTags={RemoveAllTags} removeTage={RemoveTags} arrayTags={tags} />
      <Jobs jobsInfo={data} addTags={AddTags} />
    </div>
  );
}

export default App;
