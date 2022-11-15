import styled from 'styled-components';

const SearchBarStyle = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;

  button {
    border-radius: 15%;
    margin-left: 5px;
  }
  
  input {
  margin-right: 5px;
  }

  .search-icon {
    height: 1.5em;
    position: relative;
    left: 3px;
    top: -3px;
    /* padding-bottom: 10px; */
    width: 1.5em;
    pointer-events: all;
  }

  .search-icon:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export default SearchBarStyle;
