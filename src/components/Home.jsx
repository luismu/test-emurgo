import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import { inject, observer } from 'mobx-react/index';
import ModalVideo from 'react-modal-video';
import { FormattedHTMLMessage } from 'react-intl';
import styled from 'styled-components';

import { Container, Overflow, SectionTitle } from './../css';
import Collaborators from './Collaborators';
import Blog from './Blog';
import ContactUs from './ContactUs';

const MainTitle = styled.div`
  color: #FFFFFF;	
  font-family: Rubik;	
  font-size: 62px;	
  font-weight: bold;	
  line-height: 72px;
  letter-spacing: 2px;

  @media (max-width: 700px) {
    text-align: center;
  }
`;

const SubTitle = styled.div`
  height: 24px;	
  color: #FFFFFF;	
  font-family: Rubik;	
  font-size: 20px;	
  line-height: 24px;
  margin-top: 20px;
  margin-bottom: 10px;

  @media (max-width: 700px) {
    text-align: center;
  }
`;

const SubSubTitle = styled.div`
  font-size: 20px;
  color: white;
  font-weight: 300;
  margin-top: 6px;
  display: flex;
  align-items: center;
  margin-top: 15px;
`;

const MainText = styled.div`
  flex: 1;
`;

const MainImage = styled.div`
  @media (max-width: 700px) {
    display: none;
  }
  flex: 1;
  height: 783px;
  width: 1003px;
  background-image: url('./assets/picture_simple.svg');
  background-repeat: no-repeat;
  background-size: contain;
  margin-top: -280px;
  margin-left: 242px;
`;

const Right = styled.div`
  @media (min-width: 700px) {
    margin: 50px 0 0 8%;
  }
  @media (max-width: 700px) {
    margin: 0 8px 0 8px;
    min-height: 280px;
  }
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Left = styled.div`
  @media (min-width: 700px) {
    margin: 50px 50% 0 0;
  }
  @media (max-width: 700px) {
    margin: 0 8px 0 8px;
    min-height: 320px;
  }
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Square = styled.div`
  width: 320px;
  height: 300px;
`;

const SquareImage = styled.img`
  height: 330px;
  width: 350px;

  @media (max-width: 700px) {
    display: none;
  }
`;

const SquareText = styled.div`
  flex: 1;

  @media (max-width: 700px) {
    margin: 0
  }
`;

const SquareTextTitle = styled.div`
  height: 36px;	
  width: 98px;	
  color: #353535;	
  font-family: Rubik;	
  font-size: 30px;	
  line-height: 36px;
  margin-bottom: 20px;
`;

const SquareTextText = styled.div`
  font-size: 14px;
  color: #9B9B9B;
  line-height: 28px;
  height: 168px;
  width: 400px;
`;

const MainButtons = styled.div`
  display: flex;
  @media (min-width: 700px) {
    flex-direction: row;
    max-width: 410px;
    margin-top: 60px;
  }
  @media (max-width: 700px) {
    margin-top: 40px;

    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  align-items: center;
  justify-content: center;
  a{
    text-decoration: none;
  }
  a:visited {
    color: white;
  }

  a:link {
    color: white;
  }
`;

const DownloadB = styled.div`
  @media (min-width: 700px) {
    flex: 1;
  }
  @media (max-width: 700px) {
    width: 210px;
  }
  align-items: center;
  justify-content: center;
  height: 50px;
  margin-right: 10px;
  border-radius: 4px;
  width: 200px;
  box-shadow: 0 2px 48px 0 #184dcf;
  padding-left: 8px;
  padding-right: 8px;
  background: #17d1aa;
  color: #ffffff;
  cursor: pointer;
  display: flow;
  flow-orientation: row;
  
  transition: all .2s;
  &:hover {
    background: rgba(23, 209, 170, .8);
    box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.3);
  }
`;

const DownloadBChrome = styled.img`
  width: 26px;
  height: 26px;
  margin-right: 10px;
`;

const DownloadBChromeTextA = styled.div`
  text-transform: uppercase;
  font-size: 15px;
`;

const DownloadBChromeTextB = styled.div`
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 300;
`;

const WatchVideo = styled.div`
  @media (min-width: 700px) {
    flex: 1;
  }
  @media (max-width: 700px) {
    width: 190x;
    margin-top: 16px;
  }
  text-transform: uppercase;
  align-items: center;
  justify-content: center;
  line-height: 50;
  height: 46px;
  border-radius: 0;
  width: 190px;
  box-shadow: 0 2px 48px 0 rgba(83,81,81,0.5);
  padding-left: 8px;
  padding-right: 8px;

  border: solid 2px white;
  background: #ffffff00;
  color: #ffffff;
  cursor: pointer;
  display: flex;
  flex-direction: row;

  transition: all .2s;
  &:hover{    
    background: rgba(255,255,255,0.15);
    box-shadow: 0 2px 48px 0 rgba(83,81,81,0.5);
  }
`;

const WatchVideoImage = styled.span`
  width: 20px;
  height: 20px;
  float: left;
  margin-top: 15px;
  margin-left: 15px;
  margin-right: 5px;
  background: url('./assets/playbtn.svg') center no-repeat;
  background-size: 20px 20px;
  border: 0;
`;

const WatchVideoText = styled.div`
  font-size: 15px;
`;

const YoroiInfo = styled.span`
  margin-right: none;
`;

const CheckMark = styled.img`
  width: 12px;
  height: 12px;
  margin-right: 8px;
  padding-bottom: 3px;
`;

const CheckMark2 = styled(CheckMark)`
  margin-left: 14px;
  padding-bottom: 3px;
`;

const EmurgoLogo = styled.img`
  margin-left: 6px;
  width: 115px;

  @media (max-width: 700px) {
    margin: 0 auto;
  }
`;

const ContainerBottom = styled(Container)`
  padding-bottom: 60px;
  max-height: 2400px;
`;

const DropdownButton = styled.div`
  cursor: pointer;
  clear: both;
  height: 49px;	
  width: 190px;	
  min-width: 160px;
  border-radius: 0;	
  background-color: transparent;	
  border: solid 2px white;
  text-align: center;
  margin-bottom:5px;
  color: #ffffff;
  display: block;
  overflow:hidden;
  box-shadow: 0 2px 48px 0 rgba(83,81,81,0.5);
  &:hover{    
    background: rgba(255,255,255,0.15);
    box-shadow: 0 2px 48px 0 rgba(83,81,81,0.5);
  }
`;

const DropdownContent = styled.div`
  position: absolute;
  background-color: #17d1aa;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  border-radius: 8px;	
  z-index: 3;
  
  margin-bottom: 5px;
  overflow: auto;
  text-transform:initial;
  text-align: justify;
  width: 190px;

  a {
    background-color: #17d1aa;
    padding: 5px 5px;
    display: block;
    font-size: 14px;
    
  }
`;

const Download = styled.div`
  position: relative;
  display: inline-block;
  color: #FFFFFF;	
  font-family: Rubik;	
  font-size: 15px;	
  font-weight: initial;	
  line-height: 40px; 
  flex: 1;
`;

const DownloadItemImage = styled.img`
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin-right: 5px;
`;

const DownloadLabel = styled.div`
  font-size: 15px;
  font-weight: 400;
  margin-top: 5px;
  text-transform: uppercase;
`;

const ImageContainer = styled.img`
  background: url('./assets/guy.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 600px;
`;

/**
 *  This Component is to be able to pass isOpen
 *  to ModalVideo. Example did not work as intenteded:
 *  Prop was passed by isOpen={this.state.video} but
 *  not binded to state isOpen.
 */
class Video extends ModalVideo {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: this.props.isOpen,
    };
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video: false,
      showSupportModal: false,
      showDownloadDropdown: false,
    };
    this.openVideo = this.openVideo.bind(this);
  }

  hideDropdownMenu = () => {
    this.setState({ showDownloadDropdown: false });
  };

  showDropdownMenu = () => {
    this.setState({ showDownloadDropdown: true });
  };
  openVideo() {
    this.setState({ video: true });
  }

  render() {
    const _Home = ({ intl: { formatMessage } }) => (
      <span>
        <ContainerBottom>
          <Video isOpen={this.state.video} channel="youtube" videoId="DHtEgLMslIQ" onClose={() => this.setState({ video: false })} />
          <Overflow style={{marginTop: '194px', marginLeft: '-37px'}}>
            <MainText>
              <MainTitle>
                <YoroiInfo>
                  <FormattedHTMLMessage id={'home.title.Yoroi'} />
                </YoroiInfo>
              </MainTitle>
              <SubTitle>
                {formatMessage({id: 'home.title.YoroiDescription'})}
              </SubTitle>
              <SubSubTitle>
                By <EmurgoLogo src="./assets/emurgo_logo.png" alt="Emurgo - Creating a more connected and equitable world through Cardano blockchain" border="0" />
              </SubSubTitle>
              <MainButtons>
                <Download style={{marginRight: '20px'}}>
                  <DropdownButton onClick={this.showDropdownMenu}>
                    <DownloadLabel>{formatMessage({id: 'header.learn-more'})}</DownloadLabel>
                  </DropdownButton>
                </Download>
                <Download style={{marginRight: '20px'}}>
                  <DropdownButton onClick={this.showDropdownMenu}>
                    <WatchVideoImage />
                    <DownloadLabel>{formatMessage({id: 'home.title.watch-the-video'})}</DownloadLabel>
                  </DropdownButton>
                </Download>
              </MainButtons>
            </MainText>
          </Overflow>
          <SectionTitle>{formatMessage({id: 'home.title.About'})}</SectionTitle>
          <Left>
            <SquareText style={{marginLeft: '502px'}}>
              <SquareTextTitle >{formatMessage({ id: 'home.properties.secure' })}</SquareTextTitle>
              <SquareTextText >
              <span style={{ color: '#353535', fontWeight: '400' }}>{formatMessage({ id: 'home.properties.secure-text-highlight' })}</span><br/>
                {formatMessage({ id: 'home.properties.secure-text' })}
              </SquareTextText>
            </SquareText>
            <square style={{marginLeft: '150px'}}>
              <SquareImage src="./assets/icon_secure.svg" alt="Yoroi is a Web Light Wallet for Cardano Secure Fast Simple" />
            </square>
          </Left>
          <Right>
            <square>
              <SquareImage src="./assets/icon_fast.svg" alt="Yoroi - Fast Our innovation" />
            </square>
            <SquareText style={{marginLeft: '190px'}}>
              <SquareTextTitle >{formatMessage({ id: 'home.properties.fast' })}</SquareTextTitle>
              <SquareTextText>
              <span style={{ color: '#353535', fontWeight: '400' }}>{formatMessage({ id: 'home.properties.fast-text-highlight' })}</span><br/>
                {formatMessage({ id: 'home.properties.fast-text' })}
              </SquareTextText>
            </SquareText>
          </Right>
          <Left>
            <SquareText style={{marginLeft: '502px'}}>
              <SquareTextTitle>{formatMessage({ id: 'home.properties.simple' })}</SquareTextTitle>
              <SquareTextText>
              <span style={{ color: '#353535', fontWeight: '400' }}>{formatMessage({ id: 'home.properties.simple-text-highlight' })}</span><br/>
                {formatMessage({ id: 'home.properties.simple-text' })}
              </SquareTextText>
            </SquareText>
            <square style={{marginLeft: '150px'}}>
              <SquareImage src="./assets/icon_simple.svg" alt="Yoroi - Simple Our passion" />
            </square>
          </Left>
        </ContainerBottom>
        <ImageContainer />
        <Collaborators />
        <Blog />
        <ContactUs />
      </span>
    );

    const Home = inject('locale')(injectIntl(observer(_Home)));

    return <Home />;
  }
}

export default App;
