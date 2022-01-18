import styled from 'styled-components';

export const StyledDiv = styled.div`
  padding: 1rem;
  width: 250px;
  .danger {
    background-color: red;
  }
  .success {
    background-color: green;
  }
  .list-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
