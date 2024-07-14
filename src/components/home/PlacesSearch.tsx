import React, { useState } from 'react';
import styled from 'styled-components';
import Typography from '../common/Typography';

// Component
const PlaceSearch: React.FC = () => {
  const [keyword, setKeyword] = useState('');
  const [places, setPlaces] = useState<any[]>([]);

  const searchPlaces = (event: React.FormEvent) => {
    event.preventDefault();

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
      setPlaces(data);
      console.log(data);
    } else if (status === window.kakao.maps.services.Status.ZERO_RESULT) {
      alert('검색 결과가 존재하지 않습니다.');
      setPlaces([]);
    } else if (status === window.kakao.maps.services.Status.ERROR) {
      alert('검색 결과 중 오류가 발생했습니다.');
      setPlaces([]);
    }
  };

  return (
    <Container>
      <SearchForm onSubmit={searchPlaces}>
        <Input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="키워드 입력"
        />
        <Button type="submit">검색하기</Button>
      </SearchForm>
      <PlacesList>
        {places.map((place, index) => (
          <PlaceItem key={index}>
            {place.place_name}
            <Typography $variant={'caption1'}>{place.address_name}</Typography>
          </PlaceItem>
        ))}
      </PlacesList>
    </Container>
  );
};

export default PlaceSearch;
// styled-components
const Container = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  width: 200px;
`;

const Button = styled.button`
  padding: 10px 15px;
  font-size: 16px;
  margin-left: 10px;
`;

const PlacesList = styled.ul`
  list-style: none;
  padding: 0;
`;

const PlaceItem = styled.li`
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;
