import React, { useEffect, useRef, useState } from "react";
import { LoadScript, GoogleMap, Marker } from "@react-google-maps/api";
import { white } from "../../config/mapStyles/white";
import PropTypes from "prop-types";

const Map = ({ pins }) => {
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
          googleMapsApiKey={process.env.APIMAP ? process.env.APIMAP : null}
          language="es"
          region="co"
        >
          <GoogleMap
            mapContainerClassName="App-map"
            center={
              coordinate
                ? coordinate
                : {
                    lat: 4.6263644,
                    lng: -74.0697175,
                  }
            }
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
              <Marker position={coordinate} title={"Mi ubicación"} />
            )}

            {pins &&
              pins.length > 0 &&
              pins.map((item) => {
                return (
                  <Marker
                    key={item.id}
                    position={item.coordinate}
                    title={item.name}
                    animation={2}
                    icon={{
                      url:
                        "https://www.google.com/s2/favicons?domain=https://www.treinta.co/",
                      size: {
                        height: 35,
                        width: 35,
                      },
                      scaledSize: {
                        height: 35,
                        width: 35,
                      },
                    }}
                  />
                );
              })}
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};
Map.propTypes = {
  pins: PropTypes.array,
};

export default Map;
