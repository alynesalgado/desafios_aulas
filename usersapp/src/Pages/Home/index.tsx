import React, { Component } from 'react';
import APIService from '../../Services/APIService';
import AxiosHandler from '../../Services/AxiosHandler';
import IUsers from '../../Interfaces/IUsers';
import User from '../../Repository/User';
import InputSearch from '../../Components/InputSearch';
import UserCard from '../../Components/UserCard';
import * as s from './styles';

const apiService: APIService = new APIService(new AxiosHandler());

type HomeState = {
  users: User[];
  searchValue: string;
};

export default class Home extends Component<{}, HomeState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      users: [],
      searchValue: ''
    };

    this.setSearchValue = this.setSearchValue.bind(this);
  }

  componentDidMount() {
    apiService.getUsers().then((users: IUsers) => {
      this.setState({ users: users.data });
    });
  }

  setSearchValue(searchValue: string) {
    this.setState({
      searchValue
    });
  }

  render() {
    const { users } = this.state;

    return (
      <s.Container>
        <s.PageTitle>Search User List</s.PageTitle>
        <InputSearch onChange={this.setSearchValue} />
        <s.UsersList>
          {users
            .filter((user: User) => {
              return user.name
                .toLowerCase()
                .includes(this.state.searchValue.toLowerCase());
            })
            .map((user: User) => (
              <UserCard key={user.id} {...user} />
            ))}
        </s.UsersList>
      </s.Container>
    );
  }
}
