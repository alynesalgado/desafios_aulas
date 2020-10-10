import React, { Component } from 'react';

import User from '../../Repository/User';
import userIcon from '../../assets/img/user.svg';
import * as s from './styles';

type UserCardProps = User;

export default class UserCard extends Component<UserCardProps, {}> {

  render() {
    return (
      <s.Container>
        <s.Title><s.UserIcon src={userIcon} />{this.props.id}<strong>  {this.props.name}</strong></s.Title>
        <s.Email>{this.props.email}</s.Email>
        <s.Address>{this.props.address.street}, {this.props.address.city} - {this.props.address.zipcode}</s.Address>
      </s.Container>
    );
  }
}