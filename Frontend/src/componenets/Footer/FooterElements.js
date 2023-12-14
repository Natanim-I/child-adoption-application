import styled from "styled-components";
import { colors } from "../../colors";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
  background: ${colors.dark1};
`;

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  max-width: 1100px;
  margin: 0 auto;
`;
export const FooterLinksContainer = styled.div`
  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
  @media screen and (max-width: 600px) {
    padding-top: 16px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 650px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const FooterLinksItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  width: 30%;
  box-sizing: border-box;
  color: ${colors.primary};

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTittle = styled.h1`
  font-size: 18px;
  text-align: center;
  margin-bottom: 12px;

  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;

export const FooterLink = styled(Link)`
  color: ${colors.primary};
  text-decoration: none;
  margin-bottom: 0.6rem;
  font-size: 14px;

  &:hover {
    color: ${colors.theme};
    transition: 0.3s ease-out;
  }
`;
export const FooterDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  width: 50%;
  box-sizing: border-box;
  color: ${colors.primary};

  @media screen and (max-width: 750px) {
    width: 60%;
  }
  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 5px;
    width: 100%;
  }
`;
export const FooterDescription = styled.p`
  color: ${colors.primary};
  font-size: 13px;
  text-align: center;
  font-weight: 100;
`;
export const SocialMedia = styled.section`
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: ${colors.primary};
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`;

export const WebsiteRights = styled.small`
  color: ${colors.primary};
  margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: ${colors.primary};
  font-size: 24px;
`;
