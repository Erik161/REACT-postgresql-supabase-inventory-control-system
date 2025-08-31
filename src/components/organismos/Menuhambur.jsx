import styled from "styled-components";
import {LinksArray,SecondarylinksArray, ToggleTema} from "../../index";
import { NavLink } from "react-router-dom";
import { v } from "../../styles/variables";
import { useState } from "react";
export function MenuHambur() {
  const [click, setClick] = useState(false);
  return (<Container>
<NavBar>
    <section>
        <HamburguerMenu onClick={()=>setClick(!click)}>
         
          <label className={click ?"toggle active":"toggle"} for="checkbox">
            <div id="bar4" class="bars"></div>
            <div id="bar5" class="bars"></div>
            <div id="bar6" class="bars"></div>
          </label>
        </HamburguerMenu>
    </section>

    <Menu $click={click.toString()}>
        {LinksArray.map(({ icon, label, to }) => (
          <div onClick={()=>setClick(!click)}
            className="LinkContainer"
            key={label}
          >
            <NavLink
              to={to}
              className="Links"
            >
              <div className="Linkicon">{icon}</div>
              <span>{label} </span>
              
            </NavLink>
          </div>
        ))}
        <Divider />
        {SecondarylinksArray.map(({ icon, label, to }) => (
          <div
            className="LinkContainer"
            key={label}
            onClick={()=>setClick(!click)}
          >
            <NavLink
              to={to}
              className="Links"
            >
              <div className="Linkicon">{icon}</div>
              <span>{label}</span>
            </NavLink>
          </div>
        ))}
        <ToggleTema/>
        <Divider />
        
      
    </Menu>
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

#checkbox {
  display: none;
}

.toggle {
  position: relative; 
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition-duration: .5s;
  &.active {
    .bars {
      position: absolute;
      transition-duration:0.5s;
    }
  }
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

#checkbox:checked + .toggle .bars {
  position: absolute;
  transition-duration: .5s;
}

#checkbox:checked + .toggle #bar5 {
  transform: scaleX(0);
  transition-duration: .5s;
}

#checkbox:checked + .toggle #bar4 {
  width: 100%;
  transform: rotate(45deg);
  transition-duration: .5s;
}

#checkbox:checked + .toggle #bar6 {
  width: 100%;
  transform: rotate(-45deg);
  transition-duration: .5s;
}

#checkbox:checked + .toggle2 {
  transition-duration: .5s;
  transform: rotate(180deg);
}
`

const Menu = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  list-style:none;
  z-index:100;

`;
const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: ${(props) => props.theme.bg4};
  margin: ${() => v.lgSpacing} 0;
`;

