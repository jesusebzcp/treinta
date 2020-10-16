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

  useEffect(() => {
    // remove all 'maps.googleapis.com' scripts injected into the document
    // hat tip: https://stackoverflow.com/a/9469983/5045662
    // to do: i am uncertain whether this actually removes the scripts from memory,
    // but if they create everything on `window.google.maps` i think we'll be ok
    const tags = document.getElementsByTagName("script");
    for (let i = tags.length; i >= 0; i--) {
      //search backwards within nodelist for matching elements to remove
      if (
        tags[i] &&
        tags[i].getAttribute("src") != null &&
        tags[i].getAttribute("src").includes("maps.googleapis.com")
      )
        tags[i].parentNode.removeChild(tags[i]); //remove element by calling parentNode.removeChild()
    }
    // set the google.maps instance on the window to null
    window.google = null;
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
