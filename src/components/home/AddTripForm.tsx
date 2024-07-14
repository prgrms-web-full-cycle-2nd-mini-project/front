import React, { useState } from 'react';
import { TextInput } from '../common/Input/TextInput';
import { DateInput } from '../common/Input/DateInput';
import styled from 'styled-components';
import { AddButton } from '../common/button/AddButton';
import { TripData, TripDetail } from '../../types/trip';
import { useCreateTrip } from '../../hooks/useCreateTrip';
import LocationInput, { Place } from '../common/Input/LocationInput';

export const AddTripForm = ({
  mainTrips,
}: {
  mainTrips?: TripDetail[] | undefined;
}) => {
  const [tripData, setTripData] = useState<TripData>({
    title: '',
    date: '',
    location: '',
    xCoordinate: 0,
    yCoordinate: 0,
  });
  const [keyword, setKeyword] = useState('');
  const [places, setPlaces] = useState<Place[]>([]);

  const mutation = useCreateTrip();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTripData({ ...tripData, [name]: value });
  };

  const handlePlaceSelect = (place: Place) => {
    setTripData({
      ...tripData,
      location: place.place_name,
      xCoordinate: parseFloat(place.x),
      yCoordinate: parseFloat(place.y),
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchPlaces(e);
    const dummy = {
      title: tripData.title,
      date: tripData.date,
      location: tripData.location,
      xCoordinate: 37.52227112904044,
      yCoordinate: 127.19057861054482,
    };

    const newTrip: TripData = dummy;
    mutation.mutate(newTrip);

    setTripData({
      ...tripData,
      title: '',
      date: '',
      location: '',
      xCoordinate: 0,
      yCoordinate: 0,
    });
  };

  const searchPlaces = (e: React.FormEvent) => {
    e.preventDefault();

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
      setPlaces(data.slice(0, 4));
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
    <>
      <form onSubmit={handleSubmit}>
        <AddTripFormStyle>
          <div className="addTripForm">
            <TextInput
              name="title"
              label="title"
              value={tripData.title}
              onChange={handleChange}
              placeholder="떠날 여행의 제목을 정해보세요"
              style={{ marginBottom: '24px' }}
            />
            <div className="locationDateWrapper">
              <div style={{ position: 'relative', width: '100%' }}>
                <LocationInput
                  name="location"
                  label="location"
                  value={tripData.location}
                  onChange={handleChange}
                  onPlaceSelect={handlePlaceSelect}
                  places={places}
                />
              </div>
              <DateInput
                name="date"
                label="date"
                value={tripData.date}
                onChange={handleChange}
              />
            </div>
          </div>

          <AddButton disabled={mainTrips && mainTrips.length >= 5} />
        </AddTripFormStyle>
      </form>
    </>
  );
};

const AddTripFormStyle = styled.div`
  display: flex;
  align-items: end;
  justify-content: flex-end;
  gap: 24px;

  .addTripForm {
    width: 85%;
    max-width: 500px;
  }

  .locationDateWrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
  }
`;
