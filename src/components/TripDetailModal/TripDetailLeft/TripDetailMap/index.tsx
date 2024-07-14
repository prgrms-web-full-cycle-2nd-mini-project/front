import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useMapStore } from '../../../../stores/mapStore';
import MarkerContainer from './MarkersContainer.tsx';

interface ITripDetailMapProps {
  lat: number;
  lng: number;
}

export default function TripDetailMap({ lat, lng }: ITripDetailMapProps) {
  const { setMap } = useMapStore();

  useEffect(() => {
    const mapOptions = {
      center: new naver.maps.LatLng({ lat, lng }),
      zoom: 15,
    };
    const map = new naver.maps.Map('map', mapOptions);
    naver.maps.Event.addListener(map, 'click', () => {
      console.log('click');
    });

    setMap(map);
  }, []);

  return (
    <>
      <TripDetailMapStyle>
        <div id="map"></div>
      </TripDetailMapStyle>
      <MarkerContainer />
    </>
  );
}

const TripDetailMapStyle = styled.div`
  height: 200px;
  width: 100%;
  /* background-color: lightgreen; */
  #map {
    height: 100%;
    width: 100%;
  }
`;
