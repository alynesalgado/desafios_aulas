import React, { Component } from 'react';

import * as s from './styles';

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
    return (
      <s.Container>
        <s.InputWrapper type="text" placeholder="Digite para buscar" onChange={this.handleSearch} />
      </s.Container>
    );
  }
}
