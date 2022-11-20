import PropTypes from 'prop-types';

import {
  SearchHeader,
  SearchForm,
  SearchFormBtn,
  SearchFormBtnLabel,
  SarchFormInput,
} from 'components/Searchbar/Searchbar.styled';

export default function SearchBar({ onSubmit }) {
  return (
    <SearchHeader>
      <SearchForm>
        <SearchFormBtn>
          <SearchFormBtnLabel>Search</SearchFormBtnLabel>
        </SearchFormBtn>

        <SarchFormInput
          onSubmit={onSubmit}
          class="input"
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchHeader>
  );
}
SearchBar.propTypes = {
  onSubmit: PropTypes.func,
};
