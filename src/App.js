import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import styles from "./components/styles.module.css"

function App() {

  const [tabs, setTabs] = useState([
    {id: 1, title: "Tab 1", body: "The content of Tab 1"},
    {id: 2, title: "Tab 2", body: "The content of Tab 2"},
    {id: 3, title: "Tab 3", body: "The content of Tab 3"}
  ]);

  const [indicator, setIndicator] = useState(tabs[0]);

  function handleClick (mytab){
    if (indicator.id != mytab.id){
      setIndicator(mytab); 
    }
  }

  return (
    <div className={styles.mycontainer}>
        {tabs.map((tab) => <button onClick= {() => handleClick(tab)} className={styles.mytabs}>{tab.title}</button>)}

      <div className={styles.mybox}>
          {indicator.body}
      </div>

    </div>
  );
}

export default App;
