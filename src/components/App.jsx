import { Component } from 'react';

import { Main } from './App.styled';

import { Searchbar } from './searchbar/Searchbar';
import { ImageGallery } from './imageGallery/ImageGallery';
import { ImageItem } from './imageGallery/imageItem/ImageItem';
import { Button } from './button/Button';
import { Loading } from './loading/Loading';

import { searchImgs } from './api/server';
import { Modal } from './modal/Modal';

class App extends Component {
  state = {
    search: '',
    page: 1,
    loading: false,
    list: [],
    total: null,
    prevSearch: '',
    modal: {
      isModal: false,
      modalImg: '',
    },
  };

  async componentDidUpdate(_, prevState) {
    const { search, page } = this.state;
    if (search && (search !== prevState.search || page !== prevState.page)) {
      this.serverImgs();
      // console.log('this.state', this.state);
    } else {
      // console.log('search', search);
      // console.log('prevState.search', prevState.search);
    }
  }

  async serverImgs() {
    // console.log(1);
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
      });
    }
  }

  handleSearch = ({ search }) => {
    // console.log(2);
    if (search !== '') {
      this.setState({
        search,
        list: [],
        page: 1,
      });
    }
  };
  loadMore = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };
  showModal = link => {
    this.setState({
      modal: {
        isModal: true,
        modalImg: link,
      },
    });
  };
  closeModal = () => {
    this.setState({
      modal: {
        isModal: false,
      },
    });
  };

  render() {
    const { list, total, page, loading, modal } = this.state;

    const isImg = Boolean(list.length) && 12 * page < total;

    return (
      <Main>
        <Searchbar onSubmit={this.handleSearch}></Searchbar>

        <ImageGallery>
          <ImageItem data={list} showModal={this.showModal}></ImageItem>
        </ImageGallery>
        {loading && <Loading></Loading>}
        {isImg && <Button onClick={this.loadMore}></Button>}
        {modal.isModal && <Modal modal={modal} close={this.closeModal}></Modal>}
      </Main>
    );
  }
}
export { App };
