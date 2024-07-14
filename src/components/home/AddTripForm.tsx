import React from 'react';
import { TextInput } from '../common/Input/TextInput';
import { DateInput } from '../common/Input/DateInput';
import styled from 'styled-components';
import { AddButton } from '../common/button/AddButton';
import { TripDetail } from '../../types/trip';
import { useCreateTrip } from '../../hooks/useCreateTrip';
import LocationInput from '../common/Input/LocationInput';
import useTripForm from '../../hooks/useTripForm';
import { Place } from '../../hooks/usePlacesSearch';
import { useTripStore } from '../../stores/tripTapStore';

export const AddTripForm = ({
  mainTrips,
}: {
  mainTrips?: TripDetail[] | undefined;
}) => {
  const { tripData, setTripData, handleChange, resetForm } = useTripForm();
  const { activeTab } = useTripStore();
  const handlePlaceSelect = (place: Place) => {
    setTripData({
      ...tripData,
      location: place.place_name,
      xCoordinate: parseFloat(place.x),
      yCoordinate: parseFloat(place.y),
    });
  };

  const mutation = useCreateTrip();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    mutation.mutate(tripData);
    console.log(tripData, 'x,y 좌표');
    resetForm();
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
                  handlePlaceSelect={handlePlaceSelect}
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

          <AddButton
            disabled={
              activeTab === 'ongoing' && mainTrips && mainTrips.length >= 5
            }
          />
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
