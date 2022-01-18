import styled from 'styled-components';

export const StyledDiv = styled.div`
  width: 70%;
  max-width: 450px;
  margin: auto;
  margin-top: 2rem;
  padding: 2rem 2rem 1rem 2rem;
  background: #fff5ff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  transition: 0.3s;
  &:hover {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
  .wrapper {
    position: relative;
    h2 {
      margin-top: 0.5rem;
      text-align: center;
    }
    form {
      display: flex;
      justify-content: center;
      margin-bottom: 2rem;
      input {
        width: 80%;
      }
      .submit-btn {
        width: 5rem;
      }
    }
    .alert {
      position: absolute;
      top: -45px;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
    }
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
  }
`;
