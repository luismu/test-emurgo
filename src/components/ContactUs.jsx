import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import { inject, observer } from 'mobx-react/index';
import styled from 'styled-components';

import { ContainerFluid, SectionTitle } from '../css';

const ContainerGreyForm = styled.div`
  width: 50%;
  background-color: #F1F7FA;
  font-size: 14px;
  text-align: left;
  color: #8C8C8C;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 632;
`;

const FormTitle = styled.p`
  font-size: 18;
  color: #1D1E21;
  text-align: left;
  margin-top: 50;
  margin-bottom: 15;
`;

const Input = styled.input`
  width: 97%;
  height: 54;
  padding: 16 23;
  color: #1D1E21;
  background: transparent;
  border: 1px solid #215F68;
  margin-bottom: 36;
`;

const TextArea = styled.textarea`
  width: 97%;
  height: 170;
  padding: 16 23;
  color: #1D1E21;
  background: transparent;
  border: 1px solid #215F68;
  margin-bottom: 36;
`;

const ImageContactUs = styled.img`
  background: url('./assets/office.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 50%;
  height: 632;

  @media (max-width: 960px) {
    width: 100%;
  }
`;

const LearnMoreButton = styled.button`
  width: 216;
  height: 48;
  background: transparent;
  border: 2px solid #215F68;
  margin: 0 auto;
  cursor: pointer;
  &:hover{    
    background: rgba(255,255,255,0.15);
    box-shadow: 0 2px 48px 0 rgba(83,81,81,0.5);
  }
`;

const LearnMoreLabel = styled.p`
  color: #215F68;
  font-size: 14;
  text-transform: uppercase;
  font-weight: 700;
`;

class ContactUs extends Component {
  render() {
    const _ContactUs = ({ intl: { formatMessage } }) => (
        <ContainerFluid>
          <SectionTitle>{formatMessage({ id: 'home.contact-us' })}</SectionTitle>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              marginTop: '50px',
            }}
          >
              <ContainerGreyForm>
                <div style={{margin: '0 auto'}}>
                  <FormTitle>{formatMessage({ id: 'home.ask-us' })}</FormTitle>
                  <Input placeholder="Name" type="text" />
                  <Input placeholder="E-mail" type="text" />
                  <FormTitle style={{marginTop: 15}}>{formatMessage({ id: 'home.ask-us-help' })}</FormTitle>
                  <TextArea placeholder="Your message" type="textarea" />
                </div>
                <LearnMoreButton onClick={this.showDropdownMenu}>
                  <LearnMoreLabel>{formatMessage({id: 'header.learn-more'})}</LearnMoreLabel>
                </LearnMoreButton>
              </ContainerGreyForm>
              <ImageContactUs />
          </div>
        </ContainerFluid>
    );

    const ContactUs = inject('locale')(injectIntl(observer(_ContactUs)));

    return <ContactUs />;
  }
}

export default ContactUs;
