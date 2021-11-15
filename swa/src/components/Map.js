
import React, { useState } from 'react';
import { MapContainer, TileLayer, FeatureGroup, Marker, Popup } from 'react-leaflet';
import { EditControl } from 'react-leaflet-draw';
import 'leaflet-draw';
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';

const Leaflet = () => {
    const [editableFG, setEditableFG] = useState(null);

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

    const onFeatureGroupReady = reactFGref => {
        // store the ref for future access to content
        setEditableFG(reactFGref);
    };

    return (
        <MapContainer
            center={[52.2317008972168, 21.018339157104492]}
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
            <Marker src={"https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png"} position={[52.2317008972168, 21.018339157104492]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                    <img src={"https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png"} alt="V" />
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default Leaflet;
