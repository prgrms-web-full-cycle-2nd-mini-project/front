import React, { useState } from 'react';
import { TextInput } from '../common/Input/TextInput';
import { DateInput } from '../common/Input/DateInput';
import styled from 'styled-components';
import { AddButton } from '../common/button/AddButton';
import { TripData } from '../../types/trip';
import { createTrip } from '../../apis/trip.api';

export const AddTripForm = () => {
  const [tripData, setTripData] = useState<TripData>({
    title: '',
    date: '',
    location: '',
    xCoordinate: 0,
    yCoordinate: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTripData({ ...tripData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const dummy = {
      title: '여행1',
      date: '2024-07-17',
      location: '마린보이수영장',
      xCoordinate: 37.52227112904044,
      yCoordinate: 127.19057861054482,
    };

    createTrip(dummy);

    setTripData({
      ...tripData,
      title: '',
      date: '',
      location: '',
      xCoordinate: 0,
      yCoordinate: 0,
    });
  };

  return (
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
              <TextInput
                name="location"
                label="location"
                value={tripData.location}
                onChange={handleChange}
                placeholder="어디로 떠나시나요?"
                button
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
        <AddButton />
      </AddTripFormStyle>
    </form>
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
const MapAddButton = styled(AddButton)`
  position: absolute;
`;
