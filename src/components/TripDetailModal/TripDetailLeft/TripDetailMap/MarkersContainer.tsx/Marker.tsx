import React, { useEffect } from 'react';
import './Marker.css';

interface IMakerProps {
  map: naver.maps.Map;
  position: {
    lat: number;
    lng: number;
  };
  content: string;
  onClick?: () => void;
}

export default function Marker({
  map,
  position,
  content,
  onClick,
}: IMakerProps) {
  useEffect(() => {
    let marker: naver.maps.Marker | null = null;

    if (map) {
      marker = new naver.maps.Marker({
        map,
        position: new naver.maps.LatLng(position),
        icon: {
          content,
        },
      });

      // console.log('마커');
      if (onClick) {
        naver.maps.Event.addListener(marker, 'click', onClick);
        map.panTo(position);
      }

      return () => {
        if (marker) {
          marker.setMap(null);
        }
      };
    }
  }, [map]);

  return null;
}
