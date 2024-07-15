import React from 'react';
import Typography from '../../common/Typography';
import styled from 'styled-components';
import { Button, TextField } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Input } from '../styledComponent/Input';
import usePlacesSearch, { Place } from '../../../hooks/usePlacesSearch';
import { COLORS } from '../../../styles/colors';

interface FormData {
  location: string;
  todo: string;
  startTime: string;
  endTime: string;
  xCoordinate: number;
  yCoordinate: number;
}

export default function AddScheduleForm() {
  const { register, handleSubmit, setValue, watch } = useForm<FormData>();
  const { searchPlaces, places, isListVisible, setIsListVisible, wrapperRef } =
    usePlacesSearch();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    // endTime 없앴는데 일단 api 수정안해서 그냥 startTime으로 넣자
    console.log(data);
  };
  const handlePlaceSelect = (place: Place) => {
    setValue('location', place.place_name);
    setValue('xCoordinate', +place.x);
    setValue('yCoordinate', +place.y);
    setIsListVisible(false);
  };
  return (
    <AddScheduleFormStyle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography $variant="subtitle2">장소</Typography>
        <InputWrapper ref={wrapperRef}>
          <Input
            {...register('location')}
            type="text"
            style={{ width: '80%' }}
            onChange={(e) => {
              setValue('location', e.target.value);
              searchPlaces(e.target.value);
            }}
          />
          <Button type="button" onClick={() => searchPlaces(watch('location'))}>
            <Typography $variant="button2" $color="gray50">
              검색
            </Typography>
          </Button>
          {isListVisible && places.length > 0 && (
            <PlacesList>
              {places.map((place, index) => (
                <PlaceItem key={index} onClick={() => handlePlaceSelect(place)}>
                  {place.place_name}
                </PlaceItem>
              ))}
            </PlacesList>
          )}
        </InputWrapper>
        <Typography $variant="subtitle2">메모</Typography>
        <Input {...register('todo')} type="text" />
        <Typography $variant="subtitle2">시간</Typography>
        <TimeInputContainer>
          <TextField
            {...register('startTime')}
            type="time"
            InputLabelProps={{ shrink: true }}
            fullWidth
          />
          <div></div>
        </TimeInputContainer>
        <SubmitButtonStyle type="submit">+</SubmitButtonStyle>
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
  cursor: pointer;
  padding: 15px;
  border-bottom: 1px solid #e0e0e0;
  &:last-child {
    border-bottom: none;
    padding-bottom: 30px;
  }
`;
