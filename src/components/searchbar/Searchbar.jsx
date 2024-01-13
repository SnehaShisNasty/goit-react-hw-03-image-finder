import { Component } from 'react';
import { Header, Form, Button, ButtonLabel, Input } from './Searchbar.styled';

class Searchbar extends Component {
  state = {
    search: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({ ...this.state });
    this.setState({ search: '' });
  };
  render() {
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
