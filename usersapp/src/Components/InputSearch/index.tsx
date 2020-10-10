import React, { Component } from 'react';

type InputSearchProps = {
  onChange(searchValue: string): void;
};

export default class InputSearch extends Component<InputSearchProps, {}> {
  constructor(props: InputSearchProps) {
    super(props);

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    this.props.onChange(event.target.value);
  }

  render() {
    return <input type="text" placeholder="Digite para buscar" onChange={this.handleSearch} />;
  }
}
