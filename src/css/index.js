import styled from 'styled-components';

const Overflow = styled.div `
  @media (max-width: 700px) {
    margin-top: 46px;
  }
  
  @media (min-width: 700px) {
    margin-top: 86px;
  }
  height: 600px;
  display: flex;
`;

const OverflowS = styled.div `
  @media (max-width: 700px) {
    margin-top: 43px;
  }
  
  @media (min-width: 700px) {
    margin-top: 43px;
  }
  height:280px;
  display: flex;
`;

const Container = styled.div `
  @media (max-width: 700px) {
    margin-right: 8px;
    margin-left: 8px;
  }
  margin: 0 auto;
  max-width: 1040px;
  
  padding-left: 20px;
  padding-right: 20px;
`;

const ContainerFluid = styled(Container) `
   max-width: none;
   padding: 0;
`;

const ContainerB = styled.div `
  margin-left: -430px;
  max-width: 1920px;
`;

const ContainerGrey = styled.div `
  background-color: #f4f4f7;
  margin-top: -75;
  padding-top: 75;
`;

const ContainerBlue = styled.div `
  color: white;
  background-image: url('./assets/background_square.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
`;

const SectionTitle = styled.div `
  font-size: 24px;
  text-align: center;
  color: #215F68;
  font-weight: 700;
  margin-top: 75px;
`;

const SectionTitleColored = styled.p `
  font-size: 24px;
  text-align: center;
  color: #215F68;
  font-weight: 700;
  margin-top: 70px;
`;

const SectionTitleLight = styled(SectionTitle)`
  color: white;
`;

const SectionSubTitleDark = styled(SectionTitle)`
  color: #1D1E21;
  font-size: 18;
  max-width: 430;
  margin: 0 auto;
  font-weight: initial;
  padding-top: 12;
  padding-bottom: 39;
`;

export {
  Container,
  ContainerB,
  ContainerGrey,
  ContainerBlue,
  Overflow,
  OverflowS,
  SectionTitle,
  SectionTitleLight,
  SectionTitleColored,
  SectionSubTitleDark,
  ContainerFluid,
}
