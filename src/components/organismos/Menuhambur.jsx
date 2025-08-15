import styled from "styled-components";
export function MenuHambur() {
  return (<Container>
<NavBar>
    <section>
        <HamburguerMenu>
          
        </HamburguerMenu>
    </section>

</NavBar>
  </Container>);
}
const Container =styled.div`
  background-color: ${(props)=>props.theme.body};
`

const NavBar =styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height:100vh;
`

const HamburguerMenu =styled.span`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 20px;
  height: 20px;
`
