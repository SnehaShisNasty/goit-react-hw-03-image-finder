import { Component } from 'react';

import { Main } from './App.styled';

import { Searchbar } from './searchbar/Searchbar';
import { ImageGallery } from './imageGallery/ImageGallery';

import { searchImgs } from './api/server';
import { ImageItem } from './imageGallery/imageItem/ImageItem';
import { Button } from './button/Button';
import { Loading } from './loading/Loading';

class App extends Component {
  state = {
    search: '',
    page: 1,
    loading: false,
    list: [],
    total: null,
  };

  async componentDidUpdate(_, prevState) {
    const { search, page } = this.state;
    if (search && (search !== prevState.search || page !== prevState.page)) {
      this.serverImgs();
    }
  }

  async serverImgs() {
    const { search, page } = this.state;
    try {
      this.setState({
        loading: true,
      });
      const { data } = await searchImgs(search, page);

      this.setState(({ list, total }) => ({
        total: data.total,
        list: [...list, ...data.hits],
      }));
    } catch (error) {
      this.setState({
        error: error.message,
      });
    } finally {
      this.setState({
        loading: false,
        search: '',
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
  loadMore = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  render() {
    const { list, total, page } = this.state;

    const isImg = Boolean(list.length) && 12 * page < total;

    return (
      <Main>
        <Searchbar onSubmit={this.handleSearch}></Searchbar>

        <ImageGallery>
          <ImageItem data={list}></ImageItem>
        </ImageGallery>
        {this.state.loading && <Loading></Loading>}
        {isImg && <Button onClick={this.loadMore}></Button>}
      </Main>
    );
  }
}
export { App };
