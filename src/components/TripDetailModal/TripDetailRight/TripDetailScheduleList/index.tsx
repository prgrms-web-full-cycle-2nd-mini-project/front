import styled from 'styled-components';
import { ISchedule } from '../../../../apis/tripDetail';
import TripDetailScheduleItem from './TripDetailScheduleItem';
import Typography from '../../../common/Typography';
import { TbMoodEmpty } from 'react-icons/tb';
interface ITripDetailScheduleListProps {
  scheduleListData: ISchedule[];
  tripId: string;
}

export default function TripDetailScheduleList({
  scheduleListData,
  tripId,
}: ITripDetailScheduleListProps) {
  return (
    <TripDetailScheduleListStyle>
      {scheduleListData.length === 0 && (
        <EmptyBox>
          <Image src="/front/assets/empty.png" alt="empty" />
          {/*  <TbMoodEmpty /> */}
          <Typography $variant={'title1'} $color="gray50">
            추가된 일정이 없습니다.
          </Typography>
        </EmptyBox>
      )}
      {scheduleListData.map((schedule, idx) => (
        <TripDetailScheduleItem
          idx={idx}
          key={schedule.id}
          scheduleData={schedule}
          tripId={tripId}
        />
      ))}
    </TripDetailScheduleListStyle>
  );
}

const TripDetailScheduleListStyle = styled.div`
  height: 100%;
  overflow-y: auto;
`;

const EmptyBox = styled.div`
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  svg {
    font-size: 100px;
    color: #878d96;
  }
`;

const Image = styled.img`
  width: 100px;
  opacity: 0.3;
`;
