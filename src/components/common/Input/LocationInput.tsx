import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

type InputProps = {
  name: string;
  label: string;
  apiKey: string;
};
const LocationInput = ({ label, name, apiKey }: InputProps) => {
  const mapRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&libraries=services,clusterer,drawing`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      const { kakao } = window;
      const map = new kakao.maps.Map(mapRef.current, {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      });

      const ps = new kakao.maps.services.Places();
      const infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

      const input = inputRef.current;

      const searchPlaces = () => {
        const keyword = input.value;
        if (!keyword.replace(/^\s+|\s+$/g, '')) {
          return false;
        }
        ps.keywordSearch(keyword, placesSearchCB);
      };

      const placesSearchCB = (data, status, pagination) => {
        if (status === kakao.maps.services.Status.OK) {
          const bounds = new kakao.maps.LatLngBounds();

          for (let i = 0; i < data.length; i++) {
            displayMarker(data[i]);
            bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
          }

          map.setBounds(bounds);
        }
      };

      const displayMarker = (place) => {
        const marker = new kakao.maps.Marker({
          map: map,
          position: new kakao.maps.LatLng(place.y, place.x),
        });

        kakao.maps.event.addListener(marker, 'click', () => {
          infowindow.setContent(
            `<div style="padding:5px;font-size:12px;">${place.place_name}</div>`,
          );
          infowindow.open(map, marker);
        });
      };

      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          searchPlaces();
        }
      });
    };

    return () => script.remove();
  }, [apiKey]);

  return (
    <InputWrapper>
      <Label htmlFor={name}>{label}</Label>
      <Input
        type="text"
        id={name}
        name={name}
        ref={inputRef}
        placeholder="어디로 떠나시나요?"
      />
      <MapContainer id="map" ref={mapRef}></MapContainer>
    </InputWrapper>
  );
};

export default LocationInput;

const InputWrapper = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  visibility: hidden;
  height: 0;
  margin: 0;
  padding: 0;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  margin-bottom: 10px;
`;

const MapContainer = styled.div`
  height: 400px;
  width: 100%;
`;
