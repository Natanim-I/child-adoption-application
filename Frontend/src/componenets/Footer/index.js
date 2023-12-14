import React from "react";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinksItem,
  FooterLinkTittle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  FooterDescription,
  FooterDescriptionContainer,
} from "./FooterElements";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
  FaTelegram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterDescriptionContainer>
              <FooterLinkTittle>About</FooterLinkTittle>
              <FooterDescription>
                Our Adoption Agency is a beacon of hope for both children
                seeking loving homes and prospective parents eager to embrace
                them. With a steadfast commitment to ethical adoption practices,
                they meticulously guide families through every step of the
                adoption journey, offering invaluable support, counseling, and
                educational resources. Their compassionate approach ensures that
                each child's well-being remains paramount, matching them with
                caring guardians who provide nurturing environments for growth
                and development.
              </FooterDescription>
            </FooterDescriptionContainer>
            <FooterLinksItem>
              <FooterLinkTittle>Important Links</FooterLinkTittle>
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/signin">Sign In</FooterLink>
              <FooterLink to="/donate">Donate</FooterLink>
              <FooterLink to="/contact">Contact Us</FooterLink>
            </FooterLinksItem>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">Child Adoption MS</SocialLogo>
            <WebsiteRights>
              child-adoption &copy; {new Date().getFullYear()} All rights
              reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="https://www.facebook.com/"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.instagram.com/"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.youtube.com/"
                target="_blank"
                aria-label="Youtube"
              >
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink
                href="https://twitter.com/?lang=en"
                target="_blank"
                aria-label="Twitter"
              >
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.linkedin.com/"
                target="_blank"
                aria-label="Linkedin"
              >
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink
                href="https://web.telegram.org/k/"
                target="_blank"
                aria-label="Telegram"
              >
                <FaTelegram />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
