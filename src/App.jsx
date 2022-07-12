import { useState, useEffect } from 'react';
import axios from 'axios';
import "./App.scss";

const backend_url = import.meta.env.VITE_BACKEND_URL
    // 'http://localhost:3045/job-sources';
console.log(backend_url)

function App() {
    const [jobSources, setJobSources] = useState([]);
    useEffect(() => {
        (async () => {
            setJobSources((await axios.get(backend_url)).data);
        })();
    }, []);

  return (
    <div className="App">
      <h1>EJT Job Manager</h1>
        <p>There are {jobSources.length} jobs in Berlin</p>
      <p>Welcome to this site.</p>
        <p>There are {jobSources.length} job sources:</p>
        <ul>
            {jobSources.map((jobSource, i) => {
                return <li key={i}>{jobSource.name}</li>;
            })}
        </ul>
    </div>
  );
}

export default App;
