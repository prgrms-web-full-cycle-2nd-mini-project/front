import { Outlet } from "react-router-dom";
import styled from "styled-components";
// import Header from "../components/pages/rootLayout/Header";

export default function RootLayout() {
  return (
    <>
      {/* <Header /> */}
      <ContentContainer>
        <Outlet />
      </ContentContainer>
    </>
  );
}

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
