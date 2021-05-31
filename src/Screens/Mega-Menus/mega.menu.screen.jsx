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
  CategorySubHeading,
  CategoryItemsDiv,
  CategoryItems,
  MainBackDrop,
  CompleteMenuContainer,
  CompleteContainerDivs,
  CompleteContainerItems,
} from "./mega.menu.styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faInfinity,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
class MegaMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      toggle: false,
      toggleCategories: false,
    };
  }
  //Functions
  toggleMenu = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  toggleCategoriesWindow = () => {
    this.setState({
      toggle: false,
      toggleCategories: !this.state.toggleCategories,
    });
  };
  render() {
    return (
      <>
        <MainBackDrop toggle={this.state.toggle} />
        <MainContainer toggle={this.state.toggle}>
          <LogoSection>
            <ActualLogo>It's Nice That</ActualLogo>
            <LogoTagLine toggle={this.state.toggle}>
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

          <CategoriesButton
            onClick={this.toggleCategoriesWindow}
            toggle={this.state.toggle}
          >
            <span>Categories</span>
            <span>
              <FontAwesomeIcon
                icon={this.state.toggleCategories ? faChevronUp : faChevronDown}
              />
            </span>
          </CategoriesButton>

          <RightSection toggle={this.state.toggle}>
            <span toggle={this.state.toggle}>
              <FontAwesomeIcon icon={faInfinity} />
            </span>
            <HamburgerMenu onClick={this.toggleMenu} toggle={this.state.toggle}>
              <Bars1 />
              <Bars2 />
              <Bars3 />
            </HamburgerMenu>
          </RightSection>
        </MainContainer>

        {/* Categpries Container */}

        <CategoriesContainer toggleCategories={this.state.toggleCategories}>
          <CategorySubHeading>
            <span>Disciplines</span>
            <CategoryItemsDiv>
              <CategoryItems>Advertising</CategoryItems>
              <CategoryItems>Animation</CategoryItems>
              <CategoryItems>Architecture</CategoryItems>
              <CategoryItems>Art</CategoryItems>
              <CategoryItems>Creative Industry</CategoryItems>
              <CategoryItems>Digital</CategoryItems>
              <CategoryItems>Advertising</CategoryItems>
              <CategoryItems>Animation</CategoryItems>
              <CategoryItems>Architecture</CategoryItems>
              <CategoryItems>Art</CategoryItems>
              <CategoryItems>Creative Industry</CategoryItems>
              <CategoryItems>Digital</CategoryItems>
              <CategoryItems>Advertising</CategoryItems>
              <CategoryItems>Animation</CategoryItems>
              <CategoryItems>Architecture</CategoryItems>
              <CategoryItems>Art</CategoryItems>
              <CategoryItems>Creative Industry</CategoryItems>
              <CategoryItems>Digital</CategoryItems>
              <CategoryItems>Advertising</CategoryItems>
              <CategoryItems>Animation</CategoryItems>
            </CategoryItemsDiv>
          </CategorySubHeading>
          <CategorySubHeading>
            <span>Popular Tags</span>
            <CategoryItemsDiv>
              <CategoryItems>Advertising</CategoryItems>
              <CategoryItems>Animation</CategoryItems>
              <CategoryItems>Architecture</CategoryItems>
              <CategoryItems>Art</CategoryItems>
              <CategoryItems>Creative Industry</CategoryItems>
              <CategoryItems>Digital</CategoryItems>
              <CategoryItems>Advertising</CategoryItems>
              <CategoryItems>Animation</CategoryItems>
              <CategoryItems>Architecture</CategoryItems>
              <CategoryItems>Art</CategoryItems>
              <CategoryItems>Creative Industry</CategoryItems>
              <CategoryItems>Digital</CategoryItems>
              <CategoryItems>Advertising</CategoryItems>
              <CategoryItems>Animation</CategoryItems>
              <CategoryItems>Architecture</CategoryItems>
              <CategoryItems>Art</CategoryItems>
              <CategoryItems>Creative Industry</CategoryItems>
              <CategoryItems>Digital</CategoryItems>
              <CategoryItems>Advertising</CategoryItems>
              <CategoryItems>Animation</CategoryItems>
              <CategoryItems>Advertising</CategoryItems>
              <CategoryItems>Animation</CategoryItems>
              <CategoryItems>Architecture</CategoryItems>
              <CategoryItems>Art</CategoryItems>
              <CategoryItems>Creative Industry</CategoryItems>
              <CategoryItems>Digital</CategoryItems>
            </CategoryItemsDiv>
          </CategorySubHeading>
        </CategoriesContainer>

        {/* Complete Menu which gets Displayed on Toggle */}

        <CompleteMenuContainer toggle={this.state.toggle}>
          <CompleteContainerDivs>
            Content
            <CompleteContainerItems>Work</CompleteContainerItems>
            <CompleteContainerItems>Work</CompleteContainerItems>
            <CompleteContainerItems>Work</CompleteContainerItems>
            <CompleteContainerItems>Work</CompleteContainerItems>
          </CompleteContainerDivs>

          <CompleteContainerDivs>
            Content
            <CompleteContainerItems>Work</CompleteContainerItems>
            <CompleteContainerItems>Work</CompleteContainerItems>
            <CompleteContainerItems>Work</CompleteContainerItems>
            <CompleteContainerItems>Work</CompleteContainerItems>
          </CompleteContainerDivs>

          <CompleteContainerDivs>
            Content
            <CompleteContainerItems>Work</CompleteContainerItems>
            <CompleteContainerItems>Work</CompleteContainerItems>
            <CompleteContainerItems>Work</CompleteContainerItems>
            <CompleteContainerItems>Work</CompleteContainerItems>
          </CompleteContainerDivs>

          <CompleteContainerDivs>
            Content
            <CompleteContainerItems>Work</CompleteContainerItems>
            <CompleteContainerItems>Work</CompleteContainerItems>
            <CompleteContainerItems>Work</CompleteContainerItems>
            <CompleteContainerItems>Work</CompleteContainerItems>
          </CompleteContainerDivs>

          <CompleteContainerDivs>
            Content
            <CompleteContainerItems>Work</CompleteContainerItems>
            <CompleteContainerItems>Work</CompleteContainerItems>
            <CompleteContainerItems>Work</CompleteContainerItems>
            <CompleteContainerItems>Work</CompleteContainerItems>
          </CompleteContainerDivs>
        </CompleteMenuContainer>
      </>
    );
  }
}

export default MegaMenu;
