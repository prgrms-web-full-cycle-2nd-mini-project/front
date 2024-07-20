import { useEffect, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

type Props = {
  totalPage: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

const Pagination = ({ totalPage, currentPage, setCurrentPage }: Props) => {
  const [currentPageArr, setCurrentPageArr] = useState<number[]>([]);
  const [totalPageArr, setTotalPageArr] = useState<number[]>([]);

  useEffect(() => {
    const pageArray = Array.from({ length: totalPage }, (_, i) => i + 1);
    setTotalPageArr(pageArray);
    setCurrentPageArr(pageArray.slice(0, 5));
  }, [totalPage]);

  return (
    <PaginationStyle>
      <ButtonStyle
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
      >
        <IoIosArrowBack />
      </ButtonStyle>
      {currentPageArr.map((page) => (
        <ButtonStyle
          key={page}
          onClick={() => setCurrentPage(page)}
          disabled={page === currentPage}
        >
          {page}
        </ButtonStyle>
      ))}
      <ButtonStyle
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPage))}
        disabled={currentPage === totalPage}
      >
        <IoIosArrowForward />
      </ButtonStyle>
    </PaginationStyle>
  );
};

export default Pagination;

const PaginationStyle = styled.div`
  margin-top: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const ButtonStyle = styled.button<{ disabled: boolean }>`
  font-size: 30px;
  color: ${(props) => (props.disabled ? COLORS.secondary : COLORS.gray40)};
  background: none;
  border: none;
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};

  &:disabled {
    cursor: not-allowed;
  }
`;
