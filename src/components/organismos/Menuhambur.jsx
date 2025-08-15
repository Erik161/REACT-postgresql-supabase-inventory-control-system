import styled from "styled-components";
export function MenuHambur() {
  return (<Container>
<NavBar>
    <section>
        <HamburguerMenu>
          <input id="checkbox2" type="checkbox"/>
          <label class="toggle toggle2" for="checkbox2">
            <div id="bar4" class="bars"></div>
            <div id="bar5" class="bars"></div>
            <div id="bar6" class="bars"></div>
          </label>
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

position:fixed;
top:2rem;
z-index:100;

#checkbox2 {
  display: none;
}

.toggle2 {
  position: relative;
  width: 25px;
  height: 25px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  transition-duration: .5s;
}

.bars {
  width: 100%;
  height: 6px;
  background-color: rgb(92, 176, 255);
  border-radius: 6px;
}

#bar5 {
  transition-duration: .8s;
}

#bar4,#bar6 {
  width: 80%;
}

#checkbox2:checked + .toggle2 .bars {
  position: absolute;
  transition-duration: .5s;
}

#checkbox2:checked + .toggle2 #bar5 {
  transform: scaleX(0);
  transition-duration: .5s;
}

#checkbox2:checked + .toggle2 #bar4 {
  width: 100%;
  transform: rotate(45deg);
  transition-duration: .5s;
}

#checkbox2:checked + .toggle2 #bar6 {
  width: 100%;
  transform: rotate(-45deg);
  transition-duration: .5s;
}

#checkbox2:checked + .toggle2 {
  transition-duration: .5s;
  transform: rotate(180deg);
}
`

