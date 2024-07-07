import React, { useState } from 'react';
import { TextInput } from '../common/Input/TextInput';
import { DateInput } from '../common/Input/DateInput';
import styled from 'styled-components';
import { AddButton } from '../common/AddButton';
import { TripData } from '../../types/trip';

export const AddTripForm = () => {
  const [tripData, setTripData] = useState<TripData>({
    title: '',
    date: '',
    location: '',
    xCoordinates: 0,
    yCoordinates: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTripData({ ...tripData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(tripData);
    setTripData({
      ...tripData,
      title: '',
      date: '',
      location: '',
      xCoordinates: 0,
      yCoordinates: 0,
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
            <TextInput
              name="location"
              label="location"
              value={tripData.location}
              onChange={handleChange}
              placeholder="어디로 떠나시나요?"
            />
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
