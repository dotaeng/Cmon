import React from "react";
import styled from 'styled-components';
import { FontAwesome } from '@expo/vector-icons';
import Feather from "react-native-vector-icons/Feather";

const Header = ({ title, icon }) => {
    return (
        <Wrapper>
            <Title>{title}</Title>
            <IconWrapper>
                {icon && <FontAwesome name={icon} size={24} color="black" />}
            </IconWrapper>
        </Wrapper>
    );
}

export default Header;

const Wrapper = styled.View`
  height: 95px;
  flex-direction: row;
  background-color: white;
  align-items: flex-end;
  padding-bottom: 10px;
`;

const Title = styled.Text`
  font-size: 25px;
  padding-horizontal: 15px;
`;

const IconWrapper = styled.View`
  flex: 1;
  padding-horizontal: 25px;
  align-items: flex-end;
`;
