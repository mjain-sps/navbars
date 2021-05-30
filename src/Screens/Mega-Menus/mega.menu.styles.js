import styled, { css } from "styled-components";
import main from "../../Theme/Header-Sticky";
const MainContainer = styled.div`
  width: 80vw;
  height: 80px;
  margin: auto;
  display: grid;
  grid-template-areas: "logo search categories icons";
  column-gap: 20px;
  align-content: center;
  justify-items: center;
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
  span {
    color: ${main.fontColours.black};
    font-size: ${main.fontSizes.large};
    cursor: pointer;
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
  &::placeholder {
    color: ${main.fontColours.silver};
    font-family: ${main.fontFamily.inter};
    font-size: ${main.fontSizes.small};
    text-align: center;
  }
`;

const CategoriesButton = styled.button`
  grid-area: categories;
  background-color: ${main.backgroundColor.primary};
  color: ${main.fontColours.black};
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
          }
          ${Bars2} {
            display: none;
            transition: 500ms ease;
          }
          ${Bars3} {
            transform: translateY(-6px) rotate(-45deg);
            transition: 300ms ease;
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
  width: 100vw;
  height: 70vh;
  border: 1px solid black;
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
};
