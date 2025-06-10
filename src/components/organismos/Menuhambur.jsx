import styled from "styled-components";
export function MenuHambur() {
  return (<Container>
<NavBar>
    <section>
        
    </section>

</NavBar>
  </Container>);
}
const Container =styled.div`
  background-color: ${({props})=>props.theme.body};
`

const NavBar =styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height:100vh;
`