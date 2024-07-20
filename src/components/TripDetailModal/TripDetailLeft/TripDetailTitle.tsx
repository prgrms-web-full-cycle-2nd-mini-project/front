import { useState } from 'react';
import styled from 'styled-components';
import Typography from '../../common/Typography';
import { Button } from '@mui/material';
import { formatToDate } from '../../../utils/formatDate';
import { Input } from '../styledComponent/Input';
import { useForm } from 'react-hook-form';
import { FiEdit3, FiSave } from 'react-icons/fi';
import { COLORS } from '../../../styles/colors';
import { useUpdateTripDetail } from '../../../hooks/useTripDetail';
import { ITripDetailResponse } from '../../../apis/tripDetail';

interface ITripDetailTitleProps {
  tripDetailData: ITripDetailResponse;
}
interface FormData {
  title: string;
  date: string;
}

export default function TripDetailTitle({
  tripDetailData,
}: ITripDetailTitleProps) {
  const [isEditting, setIsEditting] = useState(false);
  const { register, handleSubmit } = useForm<FormData>();
  const { updateTripDetail } = useUpdateTripDetail(tripDetailData.id);

  const onTitleSubmit = (data: FormData) => {
    //// console.log(tripDetailData);
    if (isEditting) {
      updateTripDetail({
        title: data.title,
        location: tripDetailData.location,
        date: data.date,
        xCoordinate: tripDetailData.xCoordinate,
        yCoordinate: tripDetailData.yCoordinate,
      });
    }
    setIsEditting((prev) => !prev);
  };
  return (
    <TripDetailTitleStyle>
      <Title onSubmit={handleSubmit(onTitleSubmit)}>
        {isEditting ? (
          <TitleInput
            {...register('title')}
            type="text"
            defaultValue={tripDetailData.title}
          />
        ) : (
          <Typography $variant="title1">{tripDetailData.title}</Typography>
        )}
        <Button type="submit">
          {isEditting ? <FiSave size="1.5rem" /> : <FiEdit3 size="1.5rem" />}
        </Button>
      </Title>
      {isEditting ? (
        <SubtitleContainer>
          <div>
            <Typography $variant="body1" $color="gray70">
              {tripDetailData.location}
            </Typography>
          </div>
          <div>
            <label htmlFor="trip-date">
              <Typography $variant="subtitle2" $style={{ marginRight: '10px' }}>
                날짜:
              </Typography>
            </label>
            <SubtitleInput
              id="trip-date"
              type="date"
              {...register('date')}
              defaultValue={formatToDate(tripDetailData.date)}
            />
          </div>
        </SubtitleContainer>
      ) : (
        <SubtitleContainer>
          <Typography $variant="body1" $color="gray70">
            {tripDetailData.location}
          </Typography>
          <Typography $variant="body1">
            {formatToDate(tripDetailData.date)}
          </Typography>
        </SubtitleContainer>
      )}
    </TripDetailTitleStyle>
  );
}

const TripDetailTitleStyle = styled.div`
  padding: 30px 30px 0 30px;
  height: 130px;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  gap: 10px;

  svg {
    color: ${COLORS.secondary};
  }

  svg:hover {
    color: ${COLORS.success};
  }
`;

const Title = styled.form`
  display: flex;

  align-items: center;
  height: 43px;
`;

const TitleInput = styled(Input)`
  font-size: 28px;
  font-weight: 600;
  width: auto;
`;
const SubtitleInput = styled(Input)`
  font-size: 14px;
  width: 260px;
  margin-bottom: 0px;
  padding: 0;
`;

const SubtitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  div {
    display: flex;
  }
`;
