import styled from '@emotion/styled/macro';

const ListContactEl = styled.li`
  display: flex;
  justify-content: space-between;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export default ListContactEl;
