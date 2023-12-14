import styled from "styled-components";
import { colors } from "../../colors";

export const InfoContainer = styled.div`
  color: ${colors.primary};
  background: ${colors.dark1};

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;
export const InfoTopic = styled.h1`
  color: ${colors.primary};
  padding-top: 25px;
  font-size: 36px;
  font-weight: 700;
  text-align: center;

  @media screen and (max-width: 768px) {
    padding-bottom: 20px;
  }
`;
export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 380px;
  width: 100%;
  padding: 0 3%;
  justify-content: center;

  @media screen and (max-width: 768px) {
    height: 750px;
  }

  @media screen and (max-width: 400px) {
    height: 550px;
  }
`;
export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `"col2 col1"` : `"col1 col2"`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;
export const Column1 = styled.div`
  margin-bottom: 10px;
  padding: 0 15px;
  grid-area: col1;
  border: 2px solid ${colors.primary};
  border-radius: 10px;
`;

export const Column2 = styled.div`
  margin-bottom: 10px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 20px;
`;
export const Heading = styled.h1`
  margin-top: 20px;
  margin-bottom: 24px;
  font-size: 38px;
  line-height: 1.1;
  font-weight: 600;
  color: ${colors.primary};

  @media screen and (max-width: 480px) {
    font-size: 26px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 20px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  color: ${colors.primary};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  border-radius: 10px;
  margin: 0 0 10px 0;
  padding-right: 0;
`;
