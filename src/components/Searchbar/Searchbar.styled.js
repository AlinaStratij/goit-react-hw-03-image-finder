import styled from '@emotion/styled';

export const SearchHeader = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #b53f76;
  box-shadow: 0px 4px 4px -1px rgba(17, 16, 16, 0.51),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(15, 14, 14, 0.4);
`;

export const SearchForm = styled.form`
  display: flex;
`;

export const SearchFormBtn = styled.button`
  font: inherit;
  font-size: 15px;
  width: 140px;
  height: 30px;
  border-radius:10px:
 background-color: #e8cbe7;
  margin-right: 20px;

  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #8989a2;
    color: #111;
    cursor: pointer;
  }
`;
export const SearchFormBtnLabel = styled.span``;
export const SarchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 15px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
`;
