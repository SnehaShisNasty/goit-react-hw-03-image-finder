import { Component } from 'react';

import { Main } from './App.styled';

import { Searchbar } from './searchbar/Searchbar';

import { searchImgs } from './api/server';

class App extends Component {
  state = {
    search: '',
    page: 1,
    loading: false,
    list: [],
  };

  async componentDidUpdate(_, prevState) {
    const { search, page } = this.state;
    if (search && (search !== prevState.search || page !== prevState.page)) {
      this.serverImgs();
    }
    console.log(this.state);
  }

  async serverImgs() {
    const { search, page } = this.state;
    try {
      this.setState({
        loading: true,
      });
      const { data } = await searchImgs(search, page);
      console.log(data.hits);
      this.setState(({ list }) => ({
        list: [...list, ...data.hits],
      }));
    } catch (error) {
      this.setState({
        error: error.message,
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  handleSearch = ({ search }) => {
    this.setState({
      search,
      list: [],
      page: 1,
    });
  };

  render() {
    return (
      <Main>
        <Searchbar onSubmit={this.handleSearch}></Searchbar>
      </Main>
    );
  }
}
export { App };
