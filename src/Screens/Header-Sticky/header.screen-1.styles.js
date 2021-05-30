import styled, { css } from "styled-components";
//importing theme
import main from "../../Theme/Header-Sticky";

const HeaderContainer = styled.div`
  background-color: ${main.backgroundColor.primary};
  height: 80px;
  box-shadow: 0px 5px 5px 2px rgba(125, 125, 125, 0.5);
  ${(props) =>
    props.sticky
      ? css`
          position: sticky;
          top: 4px;
          z-index: 10;
        `
      : css`
          position: static;
        `}
`;

const HeaderSubContainer = styled.div`
  width: 80%;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
`;

const HeaderLeftContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  width: 60%;
`;
const HeaderRightContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  min-width: 430px;
`;

const HeaderLogo = styled.img`
  height: 100px;
  object-fit: contain;
  align-self: flex-end;
`;

const HeaderUL = styled.ul`
  display: flex;
  justify-content: flex-start;
  padding: 0px;
  margin: 0px;
  flex-wrap: wrap;
  height: 25px;
  overflow-y: hidden;
`;

const HeaderLi = styled.li`
  margin-left: 20px;
  list-style: none;
  font-size: ${main.fontSizes.large};
  font-family: ${main.fontFamily.firaCondensed};
  font-weight: bold;
  &:hover {
    text-decoration: underline;
    color: ${main.fontColours.deepPink};
    cursor: pointer;
  }
`;

const MoreDropDown = styled.div`
  color: ${main.fontColours.deepPink};
  font-family: ${main.fontFamily.firaCondensed};
  font-weight: bold;
  font-size: ${main.fontSizes.large};

  &:hover {
    text-decoration: underline;
  }
`;

const DownloadCurrentIssueButton = styled.button`
  background-color: ${main.backgroundColor.deepBlue};
  color: ${main.fontColours.white};
  height: 40px;
  width: 160px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  font-size: ${main.fontSizes.small};
  font-family: ${main.fontFamily.oswald};
`;

const SubscribeNowButton = styled.button`
  background-color: ${main.backgroundColor.deepPink};
  color: ${main.fontColours.white};
  height: 40px;
  width: 160px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  font-size: ${main.fontSizes.large};
  font-family: ${main.fontFamily.oswald};

  img {
    width: 30px;
    object-fit: contain;
  }
`;

const DropDownMenu = styled.div`
  position: absolute;
  top: 85px;
  width: 300px;
  height: 150px;

  background-color: ${main.backgroundColor.primary};

  ${(props) =>
    props.toggle
      ? css`
          display: block;
        `
      : css`
          display: none;
        `};

  ul {
    height: 100%;
    width: 100%;
    color: ${main.fontColours.black};
    font-family: ${main.fontFamily.roboto};
    font-size: ${main.fontSizes.medium};
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    padding: 15px;
    margin: 0px;
    padding: 0px;
  }
  li {
    list-style: none;
    margin: 10px 0px;
  }
`;
export {
  HeaderContainer,
  HeaderSubContainer,
  HeaderLeftContainer,
  HeaderRightContainer,
  HeaderLogo,
  HeaderUL,
  HeaderLi,
  MoreDropDown,
  DownloadCurrentIssueButton,
  SubscribeNowButton,
  DropDownMenu,
};
