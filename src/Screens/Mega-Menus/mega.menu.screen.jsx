import React from "react";
import {
  MainContainer,
  LogoSection,
  RightSection,
  ActualLogo,
  LogoTagLine,
  HamburgerMenu,
  Bars1,
  Bars2,
  Bars3,
  SearchBar,
  SearchInput,
  CategoriesButton,
  CategoriesContainer,
} from "./mega.menu.styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faInfinity,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
class MegaMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      toggle: false,
    };
  }
  //Functions
  toggleMenu = () => {
    this.setState({ toggle: !this.state.toggle });
  };
  render() {
    return (
      <>
        <MainContainer>
          <LogoSection>
            <ActualLogo>It's Nice That</ActualLogo>
            <LogoTagLine>
              <span>Championing Creativity</span>
              <span>Since 2007</span>
            </LogoTagLine>
          </LogoSection>

          <SearchBar>
            <SearchInput placeholder="search for something" />
            <span>
              <FontAwesomeIcon icon={faSearch} />
            </span>
          </SearchBar>

          <CategoriesButton>
            <span>Categories</span>
            <span>
              <FontAwesomeIcon icon={faChevronDown} />
            </span>
          </CategoriesButton>

          <RightSection>
            <span>
              <FontAwesomeIcon icon={faInfinity} />
            </span>
            <HamburgerMenu onClick={this.toggleMenu} toggle={this.state.toggle}>
              <Bars1 />
              <Bars2 />
              <Bars3 />
            </HamburgerMenu>
          </RightSection>
        </MainContainer>

        <CategoriesContainer></CategoriesContainer>
      </>
    );
  }
}

export default MegaMenu;
