import React, { forwardRef, createRef, useState } from 'react';
import styled from 'styled-components';

// Placeholder components (replace these with your actual component implementations)
const Card_1 = () => <div>Card_1</div>;
const ColorGrid = () => <div>ColorGrid</div>;
const Red1 = () => <div>Red1</div>;
const Red2 = () => <div>Red2</div>;
const Green = () => <div>Green</div>;
const Card_2 = () => <div>Card_2</div>;
const Purple = () => <div>Purple</div>;
const Yellow2 = () => <div>Yellow2</div>;
const Pink2 = () => <div>Pink2</div>;
const Dots2 = () => <div>Dots2</div>;

const Home = () => {
  const [name, setName] = useState('');

  const refOne = createRef();
  const refTwo = createRef();

  const Card1 = forwardRef(function Card1(props, ref) {
    return (
      <Card_1 ref={refOne}>
        <ColorGrid>
          <Red1 />
          <Red2 />
          <Green />
        </ColorGrid>
      </Card_1>
    );
  });

  const card2Handler = () => {
    // Define the logic for card2Handler here
    console.log('Card 2 was clicked!');
  };

  const Card2 = forwardRef(function Card2(props, ref) {
    return (
      <Card_2 ref={refTwo} onClick={card2Handler}>
        <Purple />
        <Yellow2 />
        <Pink2 />
        <Dots2 />
      </Card_2>
    );
  });

  return (
    <>
      <Card1 ref={refOne} />
      <FormContainer>
        <Inputs>
          <Label>Name</Label>
          <Input
            id="name"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {/* Other input fields go here */}
        </Inputs>
      </FormContainer>
      <Card2 ref={refTwo} />
    </>
  );
};

const FormContainer = styled.div`
  position: relative;
  width: 350px;
  height: 100%;
  border-radius: 20px;
  padding: 40px;
  background: #ecf0f3;
  box-shadow: 14px 14px 20px #cbced1, -14px -14px 20px white;
`;

const Inputs = styled.div`
  text-align: left;
  margin-top: 10px;
`;

const Label = styled.h4`
  display: block;
  width: 100%;
  /* Other label styles go here */
`;

const Input = styled.input`
  display: block;
  width: 100%;
  /* Other input styles go here */
`;

export default Home;
