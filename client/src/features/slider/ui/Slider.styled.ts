import styled from "styled-components";

const SliderContainer = styled.div`
  .container {
  width: 21.875rem;
  height: 15.625rem;
  position: relative;
  overflow: hidden;
  }
  .pic-container {
  height: inherit;
  width: inherit;
  }
  .container, 
  .pic-container, 
  .pic{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .pic {
  position: absolute;
  background-position: center;
  background-size: cover;
  transition: all 500ms cubic-bezier(.42, .84, 0, 1.06);
  }
  

  .slider-btns {
  display: flex;
  justify-content: center;
  gap: 8rem;
  }


  .btn-left,
  .btn-right {
  transition: all 0.1s ease-in-out;
  cursor: pointer;
  background-color: transparent;
  opacity: 60%;
  border: none;
  font-size: 2rem;
  font-weight: 700;
  z-index: 10;
  }

  .btn-left:hover,
 .btn-right:hover{
  transform: scale(1.4);
  opacity:100%;
}

`;

export { SliderContainer };