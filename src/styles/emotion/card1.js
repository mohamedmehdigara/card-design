



import styled from "@emotion/styled";

export const Card_1 = styled.div`
    height: 220px;
    width: 390px;
    display: grid;
    grid-template-columns: 2% 96% 2%;
    grid-template-rows: 4% 92% 4%;
    position: relative;
    margin-left: 15%;
    overflow: hidden;
    box-shadow: 2px 5px 15px 0px #17161694;
    background-color: #122529;
    &:hover {
        transform: scale(1.1);
        transition: 0.3s;
      }
`;



export const ColorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 150px);
  grid-template-rows: repeat(8, 50px);
  grid-gap: 8px;
  width: 150px;
  height: 400px;
  transform: rotate(-45deg);
`;




export const Black = styled.div`
  margin-left: 30%;
  background-color: #343536;
  grid-column: 2 / span 2;
  grid-row: 1 / span 3;
`;

export const Red1 = styled.div`
  background-color: #e45e4f;
  grid-row: 2 / span 5;
`;

export const Red2 = styled.div`
  background-color: #e45e4f;
  grid-column: 2 / span 2;
  grid-row: 4/7;
`;

export const Green = styled.div`
  background-color: #007e67;
  grid-column: 2/4;
  grid-row: 7/9;
`;