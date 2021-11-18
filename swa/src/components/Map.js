
import React, { useState } from 'react';
import { MapContainer, TileLayer, FeatureGroup, Marker, Popup, useMapEvents } from 'react-leaflet';
import { EditControl } from 'react-leaflet-draw';
import 'leaflet-draw';
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';

const Leaflet = ({ data }) => {
    const [editableFG, setEditableFG] = useState(null);
    // const [position, setPosition] = useState(null)
    // const map = useMapEvents({
    //     click() {
    //       map.locate()
    //     },
    //     locationfound(e) {
    //       setPosition(e.latlng)
    //       map.flyTo(e.latlng, map.getZoom())
    //     },
    //   })

    const onCreated = e => {
        console.log(e);
        console.log(editableFG);

        const drawnItems = editableFG.leafletElement._layers;
        console.log(drawnItems);
        if (Object.keys(drawnItems).length > 1) {
            Object.keys(drawnItems).forEach((layerid, index) => {
                if (index > 0) return;
                const layer = drawnItems[layerid];
                editableFG.leafletElement.removeLayer(layer);
            });
            console.log(drawnItems);
        }
    };
    const whenCreated = e => {
        const drawnItems = editableFG.leafletElement._layers;
        if (Object.keys(drawnItems).length > 1) {
            Object.keys(drawnItems).forEach((layerid, index) => {
                if (index > 0) return;
                const layer = drawnItems[layerid];
                editableFG.leafletElement.removeLayer(layer);
            });
        }
    };

    const onFeatureGroupReady = reactFGref => {
        // store the ref for future access to content
        setEditableFG(reactFGref);
    };

    return (
        data && data.latitude && data.longitude ?
            <MapContainer
                // center={[52.2317008972168, 21.018339157104492]}
                center={[data.latitude, data.longitude]}
                whenCreated={e => console.error(e)}
                zoom={13}
                style={{ height: '30vh' }}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                />
                <FeatureGroup
                    ref={featureGroupRef => {
                        onFeatureGroupReady(featureGroupRef);
                    }}>
                    <EditControl position="topright" onCreated={onCreated} />
                </FeatureGroup>
                <Marker src={"https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png"} position={[data.latitude, data.longitude]}>
                {/* <Marker src={"https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png"} position={position}> */}
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                        <img src={"https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png"} alt="V" />
                    </Popup>
                </Marker>
                {console.log('%c Oh my all data 3! ', 'background: #765', data)}
                {/* {JSON.stringify(data)} */}
            </MapContainer> : " no data yet"
    );
};

export default Leaflet;
