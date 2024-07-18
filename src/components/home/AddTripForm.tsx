import React, { useEffect, useState } from 'react';
import { TextInput } from '../common/Input/TextInput';
import { DateInput } from '../common/Input/DateInput';
import styled from 'styled-components';
import { AddButton } from '../common/button/AddButton';
import { TripDetail } from '../../types/trip';
import { useCreateTrip } from '../../hooks/useCreateTrip';
import useTripForm from '../../hooks/useTripForm';
import { useTripStore } from '../../stores/tripTapStore';
import LocationInput from '../common/Input/LocationInput';
import { Alert, Snackbar } from '@mui/material';

export const AddTripForm = ({
  mainTrips,
}: {
  mainTrips?: TripDetail[] | undefined;
}) => {
  const { tripData, handleChange, resetForm, setTripData } = useTripForm();
  const { activeTab, setActiveTab } = useTripStore();
  const [open, setOpen] = useState(false);
  const [valid, setValid] = useState(false);
  const [validLocation, setValidLocation] = useState(false);
  const [inputValue, setInputValue] = useState(tripData.location);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const mutation = useCreateTrip();
  const today = new Date();
  const inputDate = new Date(tripData.date);

  const limitTrip =
    activeTab === 'ongoing' && mainTrips && mainTrips.length >= 5;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputDate < today) {
      setActiveTab('completed');
    }
    setActiveTab('ongoing');

    if (!valid || !validLocation || (limitTrip && inputDate >= today)) {
      setOpen(true);
      return;
    }

    mutation.mutate(tripData);
    resetForm();
  };

  const isFormValid = () => {
    // TODO: 세 인풋값이 비어있는지 확인하는 로직 추가
    return (
      tripData.title.trim() !== '' &&
      inputValue !== '' &&
      tripData.date.trim() !== ''
    );
  };

  useEffect(() => {
    setValid(isFormValid());
  }, [tripData]);

  const getAlertMessage = () => {
    if (valid && !validLocation) {
      return '장소를 정확히 지정해주세요!';
    }
    if (!valid) {
      return '모든 항목을 입력해주세요.';
    }
    if (inputDate < today) {
      return;
    }
    if (mainTrips && mainTrips.length >= 5) {
      return '여행은 5개까지만 추가가 가능합니다.';
    }
    return null;
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
                  inputValue={inputValue}
                  setInputValue={setInputValue}
                  value={tripData.location}
                  setTripData={setTripData}
                  validLocation={validLocation}
                  setValidLocation={setValidLocation}
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

          <AddButton $limit={!isFormValid()} />
        </AddTripFormStyle>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
            {getAlertMessage()}
          </Alert>
        </Snackbar>
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
