import { Component } from 'react';
import { Header, Form, Button, ButtonLabel, Input } from './Searchbar.styled';

class Searchbar extends Component {
  state = {
    search: '',
    preSearch: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.preSearch !== this.state.search) {
      this.props.onSubmit({ ...this.state });
    }
    this.setState({
      preSearch: this.state.search,
    });
    this.setState({ search: '' });
  };
  render() {
    console.log(this.state);
    return (
      <Header>
        <Form onSubmit={this.handleSubmit}>
          <Button type="submit">
            <ButtonLabel>Search</ButtonLabel>
          </Button>

          <Input
            type="text"
            placeholder="Search images and photos"
            name="search"
            onChange={this.handleChange}
            value={this.state.search}
          />
        </Form>
      </Header>
    );
  }
}
export { Searchbar };
