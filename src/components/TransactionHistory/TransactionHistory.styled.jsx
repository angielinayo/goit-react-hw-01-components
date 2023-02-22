import styled from '@emotion/styled';

export const TransactionsTable = styled.table`
  max-width: 70%;
  padding: 0;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  width: 500px;
  margin: 20px auto 20px;

  th {
    background-color: #9fd3c7;
    font-weight: 500;
  }
  td,
  th {
    border: 1px solid #9fd3c7;
    padding: 8px;
    text-align: center;
    border-radius: 5px;
  }
`;
