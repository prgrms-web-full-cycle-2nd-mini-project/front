import React, { useState, useEffect } from 'react';
import Typography from '../../common/Typography';
import styled from 'styled-components';
import { Alert, Button, Snackbar, TextField } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Input } from '../styledComponent/Input';
import usePlacesSearch, { Place } from '../../../hooks/usePlacesSearch';
import { COLORS } from '../../../styles/colors';
import { useMapStore } from '../../../stores/mapStore';
import { useCreateTripSchedule } from '../../../hooks/useTripDetail';
import { useDebounce } from '../../../hooks/useDebounce';

interface FormData {
  location: string;
  todo: string;
  startTime: string;
}

export default function AddScheduleForm({ tripId }: { tripId: string }) {
  const { register, handleSubmit, setValue, watch, reset } =
    useForm<FormData>();
  const { searchPlaces, places, isListVisible, setIsListVisible, wrapperRef } =
    usePlacesSearch();
  const [validLocation, setValidLocation] = useState(false);

  const [open, setOpen] = useState(false);
  const [valid, setValid] = useState(false);
  const { map } = useMapStore();
  const [position, setPosition] = useState({ lat: 0, lng: 0 });
  const { createTripSchedule } = useCreateTripSchedule(tripId);

  const locationValue = watch('location');
  const todoValue = watch('todo');
  const startTimeValue = watch('startTime');

  const debounceValue = useDebounce({ value: locationValue, delay: 500 });

  useEffect(() => {
    if (debounceValue && !validLocation) {
      searchPlaces(debounceValue);
    }
  }, [debounceValue]);

  useEffect(() => {
    if (locationValue && todoValue && startTimeValue) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [locationValue, todoValue, startTimeValue]);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const onSubmit: SubmitHandler<FormData> = (data) => {
    if (!valid || !validLocation) {
      setOpen(true);
      return;
    }

    createTripSchedule({
      location: data.location,
      todo: data.todo,
      startTime: data.startTime,
      endTime: data.startTime,
      xCoordinate: position.lng,
      yCoordinate: position.lat,
    });
    reset();
  };

  const handlePlaceSelect = (place: Place) => {
    setValue('location', place.place_name);
    setPosition({ lat: +place.y, lng: +place.x });
    setIsListVisible(false);
    setValidLocation(true);

    if (!map) return;
    map.panTo({ lat: +place.y, lng: +place.x });
  };

  return (
    <AddScheduleFormStyle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography $variant="body1" $style={{ marginBottom: '20px' }}>
          장소
        </Typography>
        <InputWrapper ref={wrapperRef}>
          <Input
            {...register('location')}
            type="text"
            onChange={(e) => {
              setValue('location', e.target.value);
              setValidLocation(false);
            }}
            style={{ marginBottom: '20px' }}
          />

          {isListVisible && places.length > 0 && (
            <PlacesList>
              {places.map((place, index) => (
                <PlaceItem key={index} onClick={() => handlePlaceSelect(place)}>
                  {place.place_name}
                  <Typography $variant={'caption1'}>
                    {place.address_name}
                  </Typography>
                </PlaceItem>
              ))}
            </PlacesList>
          )}
        </InputWrapper>
        <Typography $variant="body1" $style={{ marginBottom: '20px' }}>
          메모
        </Typography>
        <Input {...register('todo')} type="text" />
        <Typography $variant="body1">시간</Typography>
        <TimeInputContainer>
          <TextField
            {...register('startTime')}
            type="time"
            InputLabelProps={{ shrink: true }}
            fullWidth
            style={{ marginBottom: '20px' }}
          />
          <div></div>
        </TimeInputContainer>
        <SubmitButtonStyle
          type="submit"
          style={{
            backgroundColor: valid ? '#678c6e' : COLORS.gray30,
          }}
        >
          +
        </SubmitButtonStyle>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
            {!valid && '모든 항목을 입력해주세요.'}
            {valid && !validLocation && '장소를 정확히 지정해주세요!'}
          </Alert>
        </Snackbar>
      </form>
    </AddScheduleFormStyle>
  );
}

const AddScheduleFormStyle = styled.div`
  padding: 0 30px 30px 30px;
  align-self: flex-start;
  width: 100%;
`;

export const TimeInputContainer = styled.div`
  width: 200px;
  display: flex;
  gap: 10px;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const SubmitButtonStyle = styled.button`
  position: absolute;
  color: white;
  font-size: 40px;
  background-color: #678c6e;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  bottom: 60px;
  right: 60px;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const PlacesList = styled.ul`
  width: 80%;
  position: absolute;
  top: 30px;
  list-style: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 0 0 30px 30px;
  background-color: ${COLORS.white};
  z-index: 1;
`;

const PlaceItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  cursor: pointer;
  padding: 15px;
  border-bottom: 1px solid #e0e0e0;
  &:last-child {
    border-bottom: none;
    padding-bottom: 30px;
  }
`;
