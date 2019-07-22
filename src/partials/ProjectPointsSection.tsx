import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import Container from '../components/Container';
import FlexBox from '../components/FlexBox';
import InnerHTML from '../components/InnerHTML';
import NumberItem, { NumberItemType } from '../components/NumberItem';
import Paragraph from '../components/Paragraph';
import Section from '../components/Section';
import SubHeading from '../components/SubHeading';
import styled from '../styling/styled';
import { media } from '../styling/theme';
import { t } from '../translations';
import { DataType } from '../types';

const Wrapper = styled('div')({
  paddingTop: '100px',
  paddingBottom: '100px',
  [media.maxM]: {
    paddingBottom: '50px',
    paddingTop: '50px',
  },
});

const ContentFlexBox = styled(FlexBox)({
  position: 'relative',
  alignItems: 'center',
  flexDirection: 'row-reverse',
  [media.m]: {
    flexDirection: 'row',
  },
  [media.md]: {
    alignItems: 'stretch',
    paddingBottom: '50px',
  },
  [media.l]: {
    paddingBottom: 0,
  },
});

const LeftSide = styled('div')({
  position: 'relative',
  width: '40%',
  boxSizing: 'border-box',
  paddingLeft: '30px',
  paddingTop: '20px',
  [media.maxM]: {
    display: 'none',
  },
});

const RightSide = styled('div')({
  position: 'relative',
  width: '60%',
  boxSizing: 'border-box',
  paddingLeft: '100px',
  [media.maxM]: {
    width: '100%',
    paddingLeft: 0,
  },
});

class ProjectPointsSection extends React.Component {
  render() {
    return (
      <Section>
        <Wrapper>
          <Container>
            <ContentFlexBox>
              <LeftSide>
                <StaticQuery
                  query={graphql`
                    query {
                      project: file(relativePath: { eq: "project.png" }) {
                        childImageSharp {
                          fluid {
                            ...GatsbyImageSharpFluid
                          }
                        }
                      }
                    }
                  `}
                  render={(data: DataType<'project'>) => <Img fluid={data.project.childImageSharp.fluid} />}
                />
              </LeftSide>
              <RightSide>
                <SubHeading>{t('project_heading')}</SubHeading>
                <NumberItem type={NumberItemType.small} num={1}>
                  <Paragraph maxWidth={550}>
                    <InnerHTML content={t('project_paragraph_1')} />
                  </Paragraph>
                </NumberItem>
                <NumberItem type={NumberItemType.small} num={2}>
                  <Paragraph maxWidth={550}>
                    <InnerHTML content={t('project_paragraph_2')} />
                  </Paragraph>
                </NumberItem>
              </RightSide>
            </ContentFlexBox>
          </Container>
        </Wrapper>
      </Section>
    );
  }
}

export default ProjectPointsSection;
