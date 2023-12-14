import React, { useState } from 'react'
import { InfoContainer, InfoWrapper, InfoTopic, InfoRow, Column1, Column2, TextWrapper, Heading, Subtitle, BtnWrap,
ImgWrap, Img} from './InfoElements'
import { Button, ArrowForward, ArrowRight } from './../WlcomeSection/WelcomeElements'

const InfoSection = ({imgStart1, headLine1, description1, buttonLabel1, img1, alt1 ,
                        imgStart2, headLine2, description2, buttonLabel2, img2, alt2, 
                        imgStart3, headLine3, description3, buttonLabel3, img3, alt3}) => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
  return (
    <>
        <InfoContainer>
            <InfoTopic>Family Changes Everything</InfoTopic>
            <InfoWrapper>
                <InfoRow imgStart={imgStart1}>
                    <Column1>
                        <TextWrapper>
                            <Heading>{headLine1}</Heading>
                            <Subtitle>{description1}</Subtitle>
                            <BtnWrap>
                                <Button to="/contact" onMouseEnter={onHover} onMouseLeave={onHover}>
                                    {buttonLabel1} {hover ? 
                                    <ArrowForward /> :
                                    <ArrowRight />}
                                </Button>
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img1} alt={alt1}/>
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
            <InfoWrapper>
                <InfoRow imgStart={imgStart2}>
                    <Column1>
                        <TextWrapper>
                            <Heading>{headLine2}</Heading>
                            <Subtitle>{description2}</Subtitle>
                            <BtnWrap>
                                <Button to="/signup" onMouseEnter={onHover} onMouseLeave={onHover}>
                                    {buttonLabel2} {hover ? 
                                    <ArrowForward /> :
                                    <ArrowRight />}
                                </Button>
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img2} alt={alt2}/>
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
            <InfoWrapper>
                <InfoRow imgStart={imgStart3}>
                    <Column1>
                        <TextWrapper>
                            <Heading>{headLine3}</Heading>
                            <Subtitle>{description3}</Subtitle>
                            <BtnWrap>
                                <Button to="/donate" onMouseEnter={onHover} onMouseLeave={onHover}>
                                    {buttonLabel3} {hover ? 
                                    <ArrowForward /> :
                                    <ArrowRight />}
                                </Button>
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img3} alt={alt3}/>
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    </>
  )
}

export default InfoSection