import React, { Component } from 'react';
import APIService from '../../Services/APIService';
import AxiosHandler from '../../Services/AxiosHandler';
import IUsers from '../../Interfaces/IUsers';
import User from "../../Repository/User";

const apiService: APIService = new APIService(new AxiosHandler());

type HomeState = {
    users: User[],
    filteredUsers: User[]
}

export default class Home extends Component<{}, HomeState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            users: [],
            filteredUsers: []
        }
    }

    componentDidMount() {
        apiService.getUsers().then((users: IUsers) => {
            this.setState({ users: users.data });
        });
    }

    render() {
        const { users } = this.state;

        return (
            <div>
                <h1>Hello world</h1>
                <ul>
                    {
                        users.map((user: User) => <li key={user.id}>{user.name}</li>)
                    }
                </ul>
            </div>
        )
    }
}