import React, {useState} from 'react'
import { DonationContainer, TextWrapper, Heading, Description, SubHeading, Motivation, 
    BtnWrap} from './DonationElements'
import { Button, ArrowForward, ArrowRight } from './../WlcomeSection/WelcomeElements'

const DonationSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
  return (
    <DonationContainer>
        <TextWrapper>
            <Heading>
                The World Can Be Difficult and Unjust
            </Heading>
            <Description>
                Today, 140 million kids don't have a permanent home. That's unacceptable. 
                At Bethany, we witness what happens when people choose love. 
                Not theoretical, unblemished love, but the real, messy, imperfect kind.

                Love that empowers vulnerable kids and families everywhere.  
                The children hurting at home, and the ones unprotected at a border. 
                The orphans and vulnerable children who feel alone, and the refugees 
                living in a world of uncertainty. Everyone deserves to be loved. 
                Together, we can change the world through family.

            </Description>
            <BtnWrap>
                <Button to="/donate" onMouseEnter={onHover} onMouseLeave={onHover}>
                    Donate {hover ? <ArrowForward /> :
                         <ArrowRight />}
                </Button>
            </BtnWrap>
            <SubHeading>
                140 million reasons to help
            </SubHeading>
            <Motivation>
                Today, 140 million kids don't have a permanent home. To us, that's simply unacceptable.
                Together, we can change the world through family.
            </Motivation>
        </TextWrapper>
    </DonationContainer>
  )
}

export default DonationSection