import React, { useState } from 'react';
import { ISchedule } from '../../../../apis/tripDetail';
import styled from 'styled-components';
import Typography from '../../../common/Typography';
import { formatToTime } from '../../../../utils/formatDate';
import { Input } from '../../styledComponent/Input';
import { useForm } from 'react-hook-form';
import { GoCheckCircleFill, GoCircle } from 'react-icons/go';
import { FiEdit3, FiSave, FiTrash } from 'react-icons/fi';
import { COLORS } from '../../../../styles/colors';
import {
  useDeleteTripSchedule,
  useUpdateTripCheck,
  useUpdateTripSchedule,
} from '../../../../hooks/useTripDetail';
import { useInfoStore, useMapStore } from '../../../../stores/mapStore';

interface ITripDetailScheduleItemProps {
  scheduleData: ISchedule;
  tripId: string;
  idx: number;
}

interface FormData {
  startTime: string;
  todo: string;
}

export default function TripDetailScheduleItem({
  scheduleData,
  tripId,
  idx,
}: ITripDetailScheduleItemProps) {
  const { register, handleSubmit } = useForm<FormData>();
  const [isEditting, setIsEditting] = useState(false);
  const { updateTripCheck } = useUpdateTripCheck(tripId);
  const { updateTripSchedule } = useUpdateTripSchedule(tripId);
  const handleCheckClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    updateTripCheck(scheduleData.id, !scheduleData.isChecked);
  };
  const { map } = useMapStore();
  const { setSelectedInfo, infos } = useInfoStore();
  const { deleteTripSchedule } = useDeleteTripSchedule(tripId);

  const onSubmit = (data: FormData) => {
    updateTripSchedule(scheduleData.id, {
      location: scheduleData.location,
      todo: data.todo,
      startTime: data.startTime,
      endTime: data.startTime,
      xCoordinate: scheduleData.xCoordinate,
      yCoordinate: scheduleData.yCoordinate,
      isChecked: scheduleData.isChecked,
    });

    setIsEditting(false);
  };

  const handleClick = (e: React.MouseEvent) => {
    if (isEditting) return;
    const position = {
      lat: scheduleData.yCoordinate,
      lng: scheduleData.xCoordinate,
    };

    if (!map) return;
    if (!infos) return;
    setSelectedInfo(idx);
    map.panTo(position);

    e.stopPropagation();
  };

  return (
    scheduleData && (
      <TripDetailScheduleItemStyle onSubmit={handleSubmit(onSubmit)}>
        <TimeBox>
          <Typography $variant="subtitle1" $color="gray100">
            {`${idx}.`}
          </Typography>
          {isEditting ? (
            <>
              <div>
                <input
                  {...register('startTime')}
                  type="time"
                  id="start-time"
                  defaultValue={formatToTime(scheduleData.startTime)}
                />
              </div>
              <button type="submit">
                <FiSave style={{ color: COLORS.warning }} />
              </button>
            </>
          ) : (
            <>
              <Typography $variant="subtitle2" $color="gray60">
                {`${formatToTime(scheduleData.startTime)} `}
              </Typography>

              <FiEdit3
                onClick={() => {
                  setIsEditting((prev) => !prev);
                }}
              />
            </>
          )}
        </TimeBox>
        <form
          onSubmit={handleSubmit(onSubmit)}
          onClick={handleClick}
          style={{ cursor: 'pointer' }}
        >
          <ScheduleItemContentListStyle>
            <div>
              <Typography $variant="subtitle2">장소</Typography>
              <Typography $variant="body2">{scheduleData.location}</Typography>
            </div>
            <div>
              <Typography $variant="subtitle2">메모</Typography>
              {isEditting ? (
                <ScheduleInput
                  {...register('todo')}
                  type="text"
                  defaultValue={scheduleData.todo}
                />
              ) : (
                <Typography $variant="body2">{scheduleData.todo}</Typography>
              )}
            </div>

            <ActiveBox onClick={handleCheckClick}>
              <FiTrash
                style={{
                  position: 'absolute',
                  bottom: '65px',
                  color: COLORS.gray100,
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  alert('일정을 삭제하시겠습니까?');
                  deleteTripSchedule(scheduleData.id);
                }}
              />
              {scheduleData.isChecked ? <GoCircle /> : <GoCheckCircleFill />}
            </ActiveBox>
          </ScheduleItemContentListStyle>
        </form>
      </TripDetailScheduleItemStyle>
    )
  );
}

const TripDetailScheduleItemStyle = styled.form`
  padding: 10px;
  /* height: 200px; */
`;

const ScheduleItemContentListStyle = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  outline: 1px solid white;
  box-shadow: 0px 0px 32px -6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 20px;
  margin: 10px 0;
  width: 100%;
  gap: 15px;

  div {
    display: flex;
    flex-direction: column;
    gap: 4px;
    height: 40px;
  }
  div > * {
    padding: 0;
  }
`;

const TimeBox = styled.div`
  display: flex;
  gap: 20px;
  /* margin-bottom: 25px; */
  height: 25px;

  svg {
    cursor: pointer;
    color: ${COLORS.secondary};
    transition: color 0.05s;
  }

  svg:hover {
    color: ${COLORS.success};
  }
`;

const ActiveBox = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  font-size: 20px;

  svg {
    cursor: pointer;
    color: ${COLORS.secondary};
    transition: color 0.05s;
  }

  svg:hover {
    color: ${COLORS.success};
  }
`;
const ScheduleInput = styled(Input)`
  font-size: 15px;
  padding: 5px 5px 10px;
`;
