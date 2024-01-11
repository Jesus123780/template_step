import styled from 'styled-components'

export type RowProps = {
  alignItems?: string;
  justifyContent?: string;
};

export const Row = styled.div<RowProps>`
  display: flex;
  flex-direction: row;
  align-items: ${({ alignItems }) => alignItems ?? 'flex-start'};
  justify-content: ${({ justifyContent }) => justifyContent ?? 'flex-start'};
`;
