import { useEffect, useRef, useState } from 'react';

export interface Place {
  address_name: string;
  category_group_code: string;
  category_group_name: string;
  category_name: string;
  distance: string;
  id: string;
  phone: string;
  place_name: string;
  place_url: string;
  road_address_name: string;
  x: string;
  y: string;
}

const usePlacesSearch = () => {
  const [places, setPlaces] = useState<Place[]>([]);
  const [isListVisible, setIsListVisible] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const searchPlaces = (keyword: string) => {
    if (!keyword.trim()) {
      return;
    }
    if (window.kakao && window.kakao.maps && window.kakao.maps.services) {
      const ps = new window.kakao.maps.services.Places();
      ps.keywordSearch(keyword, placesSearchCB);
    } else {
    }
  };

  const placesSearchCB = (data: any, status: any) => {
    if (status === window.kakao.maps.services.Status.OK) {
      // console.log(data);
      setPlaces(data.slice(0, 4));
      setIsListVisible(true);
    } else if (status === window.kakao.maps.services.Status.ZERO_RESULT) {
      setPlaces([]);
      setIsListVisible(false);
    } else if (status === window.kakao.maps.services.Status.ERROR) {
      setPlaces([]);
      setIsListVisible(false);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      wrapperRef.current &&
      !wrapperRef.current.contains(event.target as Node)
    ) {
      setIsListVisible(false);
    }
  };

  useEffect(() => {
    if (isListVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isListVisible]);

  return {
    places,
    searchPlaces,
    isListVisible,
    setIsListVisible,
    wrapperRef,
  };
};

export default usePlacesSearch;
