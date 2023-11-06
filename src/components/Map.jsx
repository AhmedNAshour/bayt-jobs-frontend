import {
  GoogleMap,
  Marker,
  useJsApiLoader,
  InfoWindow,
} from '@react-google-maps/api';
import PropTypes from 'prop-types';
import { useState } from 'react';

const containerStyle = {
  height: '100%',
  width: '100%',
};

const center = {
  lat: 25.354826,
  lng: 51.183884,
};

Map.propTypes = {
  jobData: PropTypes.any,
};

function Map(props) {
  const [selectedJob, setSelectedJob] = useState(null);
  //get jobData from props
  const { jobData } = props;
  // const [jobData, setJobData] = useState([]);
  const { isLoaded } = useJsApiLoader({
    id: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={3}>
      {jobData.map((job, index) => (
        <div key={index}>
          <Marker
            position={job.location}
            onClick={() => {
              console.log(job.title);
              setSelectedJob(job);
            }}
          ></Marker>
        </div>
      ))}
      {selectedJob && (
        <InfoWindow
          position={selectedJob.location}
          onCloseClick={() => setSelectedJob(null)}
        >
          <div>
            <h2 className=' text-base font-bold '>{selectedJob.title}</h2>
            <a href={selectedJob.link}>{selectedJob.link}</a>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  ) : (
    <></>
  );
}

export default Map;
