import React from 'react';

import Typography from '../common/Typography';
import styled from 'styled-components';
import { COLORS } from '../../styles/colors';
import { useTripStore } from '../../stores/tripTapStore';

export type Tab = 'ongoing' | 'completed';

type TabProps = {
  tab: Tab;

  onClick: (tab: Tab) => void;
  label: string;
};

const Tab = ({ tab, onClick, label }: TabProps) => {
  const { activeTab } = useTripStore();
  return (
    <TabItem onClick={() => onClick(tab)} $active={activeTab === tab}>
      <Typography
        $variant={`${activeTab === tab ? 'active' : 'body1'}`}
        $color={`${activeTab === tab ? 'secondary' : 'gray40'}`}
      >
        {label}
      </Typography>
    </TabItem>
  );
};

const TabItem = styled.li<{ $active: boolean }>`
  position: relative;
  cursor: pointer;

  ${({ $active }) =>
    $active &&
    `
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -10px;
      width: 100%;
      height: 2px;
      background-color: ${COLORS.secondary};
    }
  `}
`;
export const TabList = () => {
  const { setActiveTab } = useTripStore();
  const handleClick = (tab: Tab) => {
    setActiveTab(tab);
  };

  return (
    <ul style={{ marginBottom: '40px' }}>
      <Tab tab="ongoing" onClick={handleClick} label="다가오는 여행" />
      <Tab tab="completed" onClick={handleClick} label="다녀온 여행" />
    </ul>
  );
};
