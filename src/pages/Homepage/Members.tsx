import React from 'react';
import Container from '../../components/Container';
import styled from '../../styling/styled';
import { colors, media } from '../../styling/theme';
import Member from './Member';

import imgBB from '../../assets/images/members/blueberry.svg';
import imgBooktookcz from '../../assets/images/members/booktookcz.svg';
import imgBootiq from '../../assets/images/members/bootiq.jpg';
import imgEuromedia from '../../assets/images/members/euromedia.jpg';
import imgFingo from '../../assets/images/members/fingo.png';
import imgFinnology from '../../assets/images/members/finnology.jpg';
import imgGoldenOakCapital from '../../assets/images/members/golden-oak-capital.jpg';
import imgGoldenOakTrust from '../../assets/images/members/golden-oak-trust.jpg';
import imgLuxor from '../../assets/images/members/luxor.jpg';
import imgNovasoft from '../../assets/images/members/novasoft.jpg';


const members = [
  {
    alt: 'BOOT!Q',
    image: imgBootiq,
    width: 108,
    link: '//www.bootiq.io/',
  },
  {
    alt: 'Novasoft',
    image: imgNovasoft,
    width: 150,
  },
  {
    alt: 'Euromedia',
    image: imgEuromedia,
    width: 140,
    link: '//www.euromedia.cz',
  },
  {
    alt: 'Knihkupectví Luxor',
    image: imgLuxor,
    width: 113,
    link: '//luxor.cz',
  },
  {
    alt: 'Booktook.cz',
    image: imgBooktookcz,
    width: 142,
    link: '//www.booktook.cz',
  },
  {
    alt: 'Golden Oak Capital',
    image: imgGoldenOakCapital,
    width: 106,
    link: '//www.goldenoakcapital.sk',
  },
  {
    alt: 'Golden Oak Trust',
    image: imgGoldenOakTrust,
    width: 109,
    link: '//www.goldenoaktrust.cz',
  },
  {
    alt: 'Fingo',
    image: imgFingo,
    width: 94,
    link: '//www.fingo.cz',
  },
  {
    alt: 'blueberry.io',
    image: imgBB,
    width: 125,
    link: '//www.blueberry.io',
  },
  {
    alt: 'FINNOLOGY',
    image: imgFinnology,
    width: 125,
    link: '//www.finnology.com',
  },
]

const StyledWrapper = styled('div')({
  padding: '33px 0 1px',
  background: colors.greyLightest,
  [media.m]: {
    padding: '65px 0 48px',
  }
});

const StyledHeading = styled('h2')({
  margin: '0 0 38px',
  fontWeight: 300,
  fontSize: 23,
  lineHeight: 1.25,
  textAlign: 'center',
  textTransform: 'uppercase',
  [media.m]: {
    marginBottom: 53,
    fontSize: 30,
  },
  ' strong': {
    fontWeight: 600,
    display: 'block',
    [media.m]: {
      display: 'inline',
    }
  }
});

const StyledMembers = styled('ul')({
  margin: 0,
  padding: 0,
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  listStyle: 'none',
})

class Members extends React.Component {
  render() {
    return (
      <StyledWrapper>
        <Container>
          <StyledHeading>
            Členové skupiny <strong>Intefi</strong>
          </StyledHeading>

          <StyledMembers>
            {members.map((member) =>
              <Member
                key={`member-${member.alt}`}
                alt={member.alt}
                imagePath={member.image}
                width={member.width}
              />
            )}
          </StyledMembers>

        </Container>
      </StyledWrapper >
    )
  }

}

export default Members;
