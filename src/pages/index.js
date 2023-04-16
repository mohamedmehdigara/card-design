
import { forwardRef,  createRef} from 'react';




export default function Home(){
    const Card1 = forwardRef((props, ref) => (
    <Card_1 ref={refOne} >
       <ColorGrid>
        <Red1 />
        <Red2 />
        <Green />
       </ColorGrid>
    </Card_1>
  ));
    return(
        <>
            <Card1 ref={refOne} />
        </>
    )
}



export const FormContainer = styled.div`
  position: relative;
  width: 350px;
  height: 100%;
  border-radius: 20px;
  padding: 40px;
  background: #ecf0f3;
  box-shadow: 14px 14px 20px #cbced1, -14px -14px 20px white;
`;
export const Inputs = styled.div`
  text-align: left;
  margin-top: 10px;
`;

export const Label = styled.h4`
  display: block;
  width: 100%;
  padding: 0;
  border: none;
  outline: none;
  box-sizing: border-box;
  margin-bottom: 4px;
  margin-top: 12px;
  font-family: 'Josefin Sans', sans-serif;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  padding: 0;
  border: none;
  outline: none;
  box-sizing: border-box;
  background: #ecf0f3;
  padding: 10px;
  padding-left: 20px;
  height: 45px;
  font-size: 14px;
  border-radius: 50px;
  box-shadow: inset 6px 6px 6px #cbced1, inset -6px -6px 6px white;
  &:placeholder {
    color: gray;
  }
`;




<FormContainer>
                <Inputs>
                  <Label>Name</Label>
                  <Input
                    id="name"
                    placeholder="Full Name"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                  <Label>Company / Business Name</Label>
                  <Input
                    id="brandname"
                    placeholder="company / brand / name"
                    onChange={(e) => {
                      setBrand(e.target.value);
                    }}
                  />
                  <Label>Phone Number</Label>
                  <Input
                    id="phonenumber"
                    placeholder="070000000"
                    onChange={(e) => {
                      setPhoneNumber(e.target.value);
                    }}
                  />
                  <Label>Email</Label>
                  <Input
                    id="email"
                    placeholder="example@test.com"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  <Label >Location</Label>
                  <Input
                    id="location"
                    type="location"
                    placeholder="location"
                    onChange={(e) => {
                      setLocation(e.target.value);
                    }}
                  />
                  <Label >Website</Label>
                  <Input
                    id="website"
                    type="website"
                    placeholder="website"
                    onChange={(e) => {
                      setWebsite(e.target.value);
                    }}
                  />
               
                </Inputs>
              </FormContainer>




  const Card2 = forwardRef((props, ref) => (
    <Card_2 ref={refTwo} onClick={card2Handler} >
      <Purple />
      <Yellow2 />
      <Pink2 />
      <Dots2 />
    </Card_2>
  ));