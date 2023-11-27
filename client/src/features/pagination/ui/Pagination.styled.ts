import styled from "styled-components";


const PaginationContainer = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: center;
`;

const PaginationItem = styled.li`
  padding: 0 12px;
  height: 32px;
  text-align: center;
  margin: auto 4px;
  color: rgba(255,255,242, 0.8);
  display: flex;
  box-sizing: border-box;
  align-items: center;
  letter-spacing: 0.01071em;
  border-radius: 1rem;
  line-height: 1.43;
  font-size: 13px;
  min-width: 2rem;

  &.dots:hover{
    background-color: transparent;
    cursor: default;
  }
  &:hover{
    background-color: #313127;
  }
  &.selected{
    background-color: rgba(255,255,242, 0.3);
  }
  &:disabled {
    pointer-events: none;
  }

`;

const Arrow = styled.div`
  &::before{
    position: relative;
    content: '';
    display:inline-block;
    width: 0.4em;
    height: 0.4em;
    border-right: 0.12em solid rgba(255,255,242, 0.8);
    border-top: 0.12em solid rgba(255,255,242, 0.8);
  }
  &.left {
    transform: rotate(-135deg) translate(-50%);
  }
  &.right {
    transform: rotate(45deg);
  }
  &.disabled{
    ::before{
      border-right: 0.12em solid rgba(255,255,242, 0.4);
    border-top: 0.12em solid rgba(255,255,242, 0.4);
    }
    &:hover{
      background-color: transparent;
      cursor: default;
    }
  }
  `;


export { PaginationContainer, PaginationItem, Arrow };