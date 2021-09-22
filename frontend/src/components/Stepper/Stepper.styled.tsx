import styled from 'styled-components/macro';

export const Container = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  margin: 0 10px;
  font-weight: inherit;
  > button {
    font-weight: inherit;
    color: inherit;
    height: 100%;
    padding: 1px 6px;
  }
  > button:first-child {
      padding-bottom: 4px;
  }
`;