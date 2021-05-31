import styled, { css } from "styled-components";
import main from "../../Theme/Header-Sticky";

const MainBackDrop = styled.div`
  ${(props) =>
    props.toggle &&
    css`
      display: block;
      position: absolute;
      width: 100%;
      height: 100vh;
      background-color: ${main.backgroundColor.mediumBlue};
      z-index: -5;
    `}
`;
const MainContainer = styled.div`
  width: 80vw;
  height: 80px;
  margin: auto;
  display: grid;
  grid-template-areas: "logo search categories icons";
  column-gap: 20px;
  align-content: center;
  justify-items: center;
  z-index: 9;
  ${(props) =>
    props.toggle &&
    css`
      color: ${main.fontColours.white};
    `}
`;

const LogoSection = styled.div`
  grid-area: logo;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const RightSection = styled.div`
  grid-area: icons;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  ${(props) =>
    props.toggle &&
    css`
      color: ${main.fontColours.white};
    `}
  span {
    color: ${main.fontColours.black};
    font-size: ${main.fontSizes.large};
    cursor: pointer;
    ${(props) =>
      props.toggle &&
      css`
        color: ${main.fontColours.white};
      `}
  }
`;

const ActualLogo = styled.div`
  font-family: ${main.fontFamily.oswald};
  font-size: ${main.fontSizes.extraLarge};
  font-weight: bold;
  margin-right: 10px;
`;
const LogoTagLine = styled.div`
  font-family: ${main.fontFamily.inter};
  font-size: ${main.fontSizes.small};
  color: ${main.fontColours.black};
  ${(props) =>
    props.toggle &&
    css`
      color: ${main.fontColours.white};
    `}
  span {
    display: block;
  }
`;

const SearchBar = styled.div`
  grid-area: search;
  border-bottom: 1px solid rgba(198, 198, 198, 0.5);
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  padding-bottom: 15px;

  span {
    width: 15%;

    text-align: right;
  }
`;
const SearchInput = styled.input`
  border: none;
  width: 85%;
  outline: none;
  background-color: transparent;

  &::placeholder {
    color: ${main.fontColours.silver};
    font-family: ${main.fontFamily.inter};
    font-size: ${main.fontSizes.small};
    text-align: center;
  }
`;

const CategoriesButton = styled.button`
  grid-area: categories;
  background-color: transparent;
  ${(props) =>
    props.toggle
      ? css`
          color: ${main.fontColours.white};
        `
      : css`
          color: ${main.fontColours.black};
        `}
  border: none;
  height: 40px;
  width: 80%;
  cursor: pointer;
  &:hover {
    background-color: ${main.backgroundColor.whiteSmoke};
    color: ${main.fontColours.darkOrchid};
  }
  span {
    margin: 0px 5px;
  }
`;
const HamburgerMenu = styled.div`
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;

  ${(props) =>
    props.toggle
      ? css`
          ${Bars1} {
            transform: translateY(6px) rotate(45deg);
            transition: 300ms ease;
            background-color: ${main.backgroundColor.primary};
          }
          ${Bars2} {
            display: none;
            transition: 500ms ease;
          }
          ${Bars3} {
            transform: translateY(-6px) rotate(-45deg);
            transition: 300ms ease;
            background-color: ${main.backgroundColor.primary};
          }
        `
      : ""}
`;

const Bars1 = styled.span`
  display: block;
  width: 30px;
  height: 2px;
  line-height: 80px;
  background-color: black;
  transition: 300ms ease;
`;

const Bars2 = styled.span`
  display: block;
  width: 30px;
  height: 2px;
  line-height: 80px;
  background-color: black;
  transition: 300ms ease;
`;

const Bars3 = styled.span`
  display: block;
  width: 30px;
  height: 2px;
  line-height: 80px;
  background-color: black;
  transition: 300ms ease;
`;

// Categories Container

const CategoriesContainer = styled.div`
  height: 400px;
  ${(props) =>
    props.toggleCategories
      ? css`
          display: grid;
        `
      : css`
          display: none;
        `}
  grid-template-columns: 1fr 2fr;
  padding: 2% 15%;
  z-index: 20;
`;
const CategorySubHeading = styled.div`
  color: ${main.fontColours.lightSlateGray};
  font-size: ${main.fontSizes.medium};
  font-family: ${main.fontFamily.openSans};
  height: 400px;
  text-align: left;
  > span {
    padding: 0px 10px;
  }
`;

const CategoryItemsDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  height: 380px;
  padding: 0px 10px;
`;

const CategoryItems = styled.span`
  display: block;
  padding: 5px 10px;
  margin: 5px 0px;
  background-color: ${main.backgroundColor.whiteSmoke};
  color: ${main.fontColours.deepBlue};
  font-family: ${main.fontFamily.openSans};
  font-size: ${main.fontSizes.small};

  &:hover {
    cursor: pointer;
    background-color: ${main.backgroundColor.darkOrchid};
    color: ${main.fontColours.white};
  }
`;

// Complete Menu Container

const CompleteMenuContainer = styled.div`
  height: 400px;
  ${(props) =>
    props.toggle
      ? css`
          display: grid;
        `
      : css`
          display: none;
        `}
  grid-template-columns: repeat(5, 1fr);
  column-gap: 20px;
  padding: 2% 4%;
  z-index: 20;
`;

const CompleteContainerDivs = styled.div`
  display: flex;
  flex-direction: column;
  height: 380px;
  flex-wrap: nowrap;
  overflow: hidden;
  color: ${main.fontColours.silver};
  font-family: ${main.fontFamily.openSans};
  font-size: ${main.fontSizes.medium};
  padding: 0px 5px;
`;

const CompleteContainerItems = styled.span`
  display: block;
  color: ${main.fontColours.white};
  font-family: ${main.fontFamily.roboto};
  font-size: ${main.fontSizes.large};
  margin: 10px 0px;
`;
export {
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
  CategoryItems,
  CategoryItemsDiv,
  MainBackDrop,
  CompleteMenuContainer,
  CompleteContainerDivs,
  CompleteContainerItems,
};
