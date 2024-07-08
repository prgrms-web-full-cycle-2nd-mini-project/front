import React from 'react';

import Typography from '../common/Typography';
import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

export type Tab = 'ongoing' | 'completed';

type TabProps = {
  tab: Tab;
  activeTab: Tab;
  onClick: (tab: Tab) => void;
  label: string;
};

type TabListProps = {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
};

const Tab = ({ tab, activeTab, onClick, label }: TabProps) => {
  return (
    <TabItem onClick={() => onClick(tab)} active={activeTab === tab}>
      <Typography
        $variant={`${activeTab === tab ? 'active' : 'body1'}`}
        $color={`${activeTab === tab ? 'secondary' : 'gray40'}`}
      >
        {label}
      </Typography>
    </TabItem>
  );
};

const TabItem = styled.li<{ active: boolean }>`
  position: relative;
  cursor: pointer;

  ${({ active }) =>
    active &&
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
export const TabList = ({ activeTab, setActiveTab }: TabListProps) => {
  const handleClick = (tab: Tab) => {
    setActiveTab(tab);
  };

  return (
    <ul style={{ marginBottom: '40px' }}>
      <Tab
        tab="ongoing"
        activeTab={activeTab}
        onClick={handleClick}
        label="계획 중인 여행"
      />
      <Tab
        tab="completed"
        activeTab={activeTab}
        onClick={handleClick}
        label="완료된 여행"
      />
    </ul>
  );
};
