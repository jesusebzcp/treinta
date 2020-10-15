import React, { useEffect, useRef, useState } from "react";
import { LoadScript, GoogleMap, Marker } from "@react-google-maps/api";
import { white } from "../../config/mapStyles/white";

const Map = () => {
  const [coordinate, setCoordinate] = useState(null);
  const isMountedRef = useRef(null);

  const activeLocation = () => {
    isMountedRef.current = true;
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setCoordinate({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    } else {
      console.log("location not enabled");
    }
  };

  useEffect(() => {
    activeLocation();
    return () => {
      return () => (isMountedRef.current = false);
    };
  }, []);
  return (
    <div>
      <div className="App">
        <LoadScript
          id="script-loader"
          googleMapsApiKey={"AIzaSyArVhfk_wHVACPwunlCi1VP9EUgYZcnFpQ"}
          language="en"
          region="us"
        >
          <GoogleMap
            mapContainerClassName="App-map"
            center={{
              lat: 4.6263644,
              lng: -74.0697175,
            }}
            zoom={12}
            version="weekly"
            on
            options={{
              zoomControl: true,
              mapTypeControl: false,
              scaleControl: false,
              streetViewControl: false,
              rotateControl: false,
              fullscreenControl: false,
              styles: white,
            }}
          >
            {coordinate && (
              <Marker
                position={coordinate}
                title={"Mi ubicación"}
                animation={1}
                //icon={{ url: "https://www.google.com/s2/favicons?domain=https://www.treinta.co/",size: {height: 35,width: 30, },scaledSize: { height: 35,},}}
              />
            )}
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default Map;
