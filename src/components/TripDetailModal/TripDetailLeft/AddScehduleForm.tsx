import React from 'react';
import Typography from '../../common/Typography';
import styled from 'styled-components';
import { Button, TextField } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Input } from '../styledComponent/Input';

interface FormData {
  location: string;
  todo: string;
  startTime: string;
  endTime: string;
}

export default function AddScheduleForm() {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    // endTime 없앴는데 일단 api 수정안해서 그냥 startTime으로 넣자
    console.log(data);
  };

  return (
    <AddScheduleFormStyle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography $variant="subtitle2">장소</Typography>
        <Input {...register('location')} type="text" style={{ width: '80%' }} />
        <Button type="button">
          <Typography $variant="button2" $color="gray50">
            검색
          </Typography>
        </Button>
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
