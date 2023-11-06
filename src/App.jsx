import { useState, useEffect } from 'react';
import axios from 'axios';
import Map from './components/Map';
import JobList from './components/JobList';
import { PacmanLoader } from 'react-spinners';

function App() {
  const [jobData, setJobData] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://bayt-service.onrender.com/api/jobs')
      .then((response) => {
        setJobData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return loading == false ? (
    <div className='flex flex-col items-center justify-center w-screen p-12'>
      <h1 className='text-5xl font-bold text-blue-700'>Bayt Job Listings</h1>
      <div className='flex justify-center w-full h-screen'>
        <div className='m-4 w-1/3 h-3/4'>
          <Map jobData={jobData} />
        </div>
        <div className='m-4 h-3/4 overflow-scroll'>
          <JobList jobData={jobData} />
        </div>
      </div>
    </div>
  ) : (
    <div className='flex flex-col items-center justify-center h-screen w-screen'>
      <PacmanLoader color='#2784FC' margin={15} size={99} />{' '}
      <h2 className='text-2xl'>Fetching data & Geocoding countries</h2>
    </div>
  );
}

export default App;
