import { useEffect, useRef, useState } from 'react';
import { Place } from '../components/common/Input/LocationInput';

const usePlacesSearch = () => {
  const [places, setPlaces] = useState<Place[]>([]);
  const [isListVisible, setIsListVisible] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const searchPlaces = (keyword: string) => {
    if (!keyword.trim()) {
      alert('키워드를 입력해주세요!');
      return;
    }
    if (window.kakao && window.kakao.maps && window.kakao.maps.services) {
      const ps = new window.kakao.maps.services.Places();
      ps.keywordSearch(keyword, placesSearchCB);
    } else {
      alert('Kakao Maps API가 로드되지 않았습니다.');
    }
  };

  const placesSearchCB = (data: any, status: any) => {
    if (status === window.kakao.maps.services.Status.OK) {
      setPlaces(data.slice(0, 5));
      setIsListVisible(true);
    } else if (status === window.kakao.maps.services.Status.ZERO_RESULT) {
      alert('검색 결과가 존재하지 않습니다.');
      setPlaces([]);
      setIsListVisible(false);
    } else if (status === window.kakao.maps.services.Status.ERROR) {
      alert('검색 결과 중 오류가 발생했습니다.');
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
