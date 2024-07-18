import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useInfoStore, useMapStore } from '../../../../stores/mapStore';
import MarkerContainer from './MarkersContainer.tsx';

interface ITripDetailMapProps {
  lat: number;
  lng: number;
}

export default function TripDetailMap({ lat, lng }: ITripDetailMapProps) {
  const { setMap, isInitMap, setIsinitMap } = useMapStore();
  const { infos } = useInfoStore();

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
  }, [infos]);

  useEffect(() => {
    if (!isInitMap) return;

    const mapOptions = {
      center: new naver.maps.LatLng({ lat, lng }),
      zoom: 15,
    };
    const map = new naver.maps.Map('map', mapOptions);
    naver.maps.Event.addListener(map, 'click', () => {
      console.log('click');
    });

    setMap(map);
    setIsinitMap(false);
  }, [isInitMap]);

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
