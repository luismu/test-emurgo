import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import { inject, observer } from 'mobx-react/index';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from './../css';

const ContainerFooter = styled.div`
  color: white;
  background: linear-gradient(to right,#0C4146,#48A1B0);
  height: 187px;
  padding-top: 36px;
`;

const RowContainerIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  .links {
    flex: 0;
    margin-left: 20px;  
  }
  .links.links-flex {
    flex: 0;
  }
`;
const FooterText = styled.div`
  font-size: 13px;
  text-align: left; 
  display: flex; 
  flex-direction: row;
  align-items: flex-end; 
  margin-left:-45px;
  margin-top:-24px;
`;
const Spacer = styled.div`
  @media (max-width: 700px) {
    display: none;
  }
  flex: 1;
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 14px; 
  @media (max-width: 700px) {
    flex-direction: column;
  }
  @media (min-width: 700px) {
  }
  a:hover,
  a:visited,
  a:link,
  a:active {
    text-decoration: none !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
  }
`;

const DropdownButton = styled.div`
  cursor: pointer;
  flex: 1;
  height: 49px;	
  width: 190px;	
  min-width: 160px;
  border-radius: 8px;	
  background-color: #17D1AA;	
  margin-bottom:5px;
  box-shadow: 0 2px 48px 0 rgba(83,81,81,0.5);
  color: #ffffff;
  display: block;
  overflow:hidden;
  
  .ArrowUp {
    margin-left: 158px;
    margin-top: -31px;
    transform: rotate(180deg);
  }
 `;

const Logo = styled.img`
  min-width: 190px;
`;

const LinkS = styled.div`
  font-weight: 500;
  font-size: 15px;
  margin: 4px;
  text-align: left;
  text-transform: uppercase;
  margin-top: -22px;
  margin-left: auto;
  
  @media (max-width: 700px) {
  }
  a:visited {
    color: white;
  }

  a:link {
    color: white;
  }
  `;
const ContainerHeight = styled(Container)`
  @media (min-width: 700px) {
    height: 187px;
  }
`;

const FooterItems = styled.span`
  @media (max-width: 700px) {
    display: none;
  }
  position: relative;
  color: white;
  display: flex;
  flex: 1;
  width: 100%;
  margin-top: 15px;
  align-items: center;
  justify-content: center;
`;

const VTitleList = styled.div`
  flex: 1;
  margin: 4px;
  text-align: center;
  text-transform: capitalize;
  font-size: 14px;
  height: 24px;
  font-weight: 400;

  a{
    text-decoration: none;
    display: inline-block;
    height: 23px;
    
    &.active{
      border-bottom: 2px solid white;
      padding-bottom: 0.5px;      
    }

    &:link,   
    &:visited{
      color: white;
    }
  }
`;

const Selector = styled.select`
  background: transparent;
  border-color: transparent;
  text-transform: capitalize;
  border-radius: 8px;
  color: white;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  height: 48px;
  width: 56px;                
  cursor: pointer;
  &:hover{    
    background-color: rgba(255,255,255,0.15);
    box-shadow: 0 2px 48px 0 rgba(83,81,81,0.5);
  }
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      showDownloadDropdown: false,
    };
  }

  closePopUp = () => {
    this.setState({ show: false });
  };

  /* Single page app - scroll to top, to look like a normal webpage */
  scroll = () => {
    window.scrollTo(0, 0);
  };

  hideDropdownMenu = () => {
    this.setState({ showDownloadDropdown: false });
  };

  showDropdownMenu = () => {
    this.setState({ showDownloadDropdown: true });
  };

  render() {
    const _Footer = ({ intl: { formatMessage } }) => (
      <ContainerFooter>
        <ContainerHeight>
          <RowContainer>
            <FooterItems>
              <VTitleList>
                <Link to="/">
                  <Logo style={{marginLeft: '-120px'}} src="./assets/EMURGOTEST-logo.svg" alt="Emurgo test landing page" />
                </Link>
              </VTitleList>
              <div style={{ flex: 2.5 }} />
              <VTitleList style={{ flex: 0.5, marginTop: '10px' }}>
                <NavLink to="/about">{formatMessage({ id: 'header.about' })}</NavLink>
              </VTitleList>
              <VTitleList style={{ flex: 0.5, marginTop: '10px' }}>
                <NavLink to="/blog">{formatMessage({ id: 'header.blog' })}</NavLink>
              </VTitleList>
              <VTitleList style={{ flex: 0.5, marginTop: '10px'}}>
                <NavLink to="/contact">{formatMessage({ id: 'header.contact' })}</NavLink>
              </VTitleList>
              <VTitleList style={{flex: 0.5, zIndex: '15'}}>
                <Selector
                  style={{
                    marginTop: '-12px', 
                  }}
                  value="Eng"
                  onChange={event => (locale.value = event.target.value)}
                >
                  <option style={{color: '#4A5065'}} value="en">Eng</option>
                  <option style={{color: '#4A5065'}} value="ja">日本語</option>
                  {/* <option style={{color: '#4A5065'}} value="ko">한국어</option>
                  <option style={{color: '#4A5065'}} value="zh-Hans">简体中文</option>
                  <option style={{color: '#4A5065'}} value="zh-Hant">繁體中文</option>
                  <option style={{color: '#4A5065'}} value="ru">Pусский</option> */}
                </Selector>
              </VTitleList>
            </FooterItems>
            <Spacer />
            <LinkS style={{display: 'flex', marginTop: 39, alignItems: 'flex-start'}}>
              <RowContainerIcons style={{ paddingTop: '29.74px' }}>
                <a className='links links-flex' target= '_blank' href="https://www.facebook.com/Yoroi-wallet-399386000586822/" rel='noopener'>
                  <img src="./assets/facebook.svg" />
                </a>
                <a className='links' target= '_blank' href="https://twitter.com/YoroiWallet" rel='noopener'>
                  <img src="./assets/twitter.svg" />
                </a>
                <a className='links' target= '_blank' href="https://www.youtube.com/channel/UCgFQ0hHuPO1QDcyP6t9KZTQ" rel='noopener'>
                  <img src="./assets/youtube.svg" />
                </a>
                <a className='links' target= '_blank' href="https://medium.com/@emurgo_io" rel='noopener'>
                  <img src="./assets/medium-size.svg" />
                </a>
                <a className='links' target= '_blank' href="https://www.reddit.com/r/cardano/" rel='noopener'>
                  <img src="./assets/reddit.svg" />
                </a>
                <a className='links' target= '_blank' href="https://www.linkedin.com/company/emurgo_io"  rel='noopener'>
                  <img src="./assets/linkedin.svg" />
                </a>
              </RowContainerIcons>
            </LinkS>
          </RowContainer>
          <RowContainerIcons style={{paddingTop: '-29.74px' }}>
            <FooterText>
              {formatMessage({ id: 'footer.all-rights' })}
            </FooterText>
            <Spacer/>
          </RowContainerIcons>
        </ContainerHeight>
      </ContainerFooter>
    );

    const Footer = inject('locale')(injectIntl(observer(_Footer)));

    return <Footer />;
  }
}

export default App;
