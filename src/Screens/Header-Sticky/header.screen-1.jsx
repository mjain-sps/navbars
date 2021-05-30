import React from "react";
import {
  HeaderContainer,
  HeaderLeftContainer,
  HeaderSubContainer,
  HeaderRightContainer,
  HeaderLogo,
  HeaderUL,
  HeaderLi,
  MoreDropDown,
  DownloadCurrentIssueButton,
  SubscribeNowButton,
  DropDownMenu,
} from "./header.screen-1.styles";

import headerLogo from "../../Assets/Header-Sticky/Header-Logo.png";
import subscribeNow from "../../Assets/Header-Sticky/Subscribe-Now.jpeg";
import BodyCommon from "../../Components/Body-Common/body.screen";
export default class HeaderScreen1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleDropDown: false,
      dropDownItems: [],
      sticky: false,
    };
  }

  //Function to handle resize event listener
  handleResize = (headerItemsArray) => {
    let results = headerItemsArray.filter((ele) => ele.offsetTop > 30);
    this.setState({ dropDownItems: [...results] });
  };

  //Function to handle Sticky Navbar behaviour on Scroll
  handleStickyOnScroll = () => {
    if (window.scrollY > 4) {
      this.setState({ sticky: true });
    }
  };
  componentDidMount() {
    const headerItems = document.querySelectorAll(".navbar-menuitems");
    const headerItemsArray = Array.from(headerItems);
    window.addEventListener("resize", this.handleResize(headerItemsArray));

    window.addEventListener("scroll", this.handleStickyOnScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize([]));
    window.removeEventListener("scroll", this.handleStickyOnScroll);
  }
  render() {
    return (
      <>
        <HeaderContainer sticky={this.state.sticky}>
          <HeaderSubContainer>
            <HeaderLeftContainer>
              <HeaderLogo src={headerLogo} alt="" />
              <HeaderUL className="navbar-ul">
                <HeaderLi className="navbar-menuitems" id="news">
                  News
                </HeaderLi>
                <HeaderLi className="navbar-menuitems" id="stylish">
                  Stylish
                </HeaderLi>
                <HeaderLi className="navbar-menuitems" id="Entertainment">
                  Entertainment
                </HeaderLi>
                <HeaderLi className="navbar-menuitems" id="Royals">
                  Royals
                </HeaderLi>
                <HeaderLi className="navbar-menuitems" id="Moms">
                  Moms
                </HeaderLi>
                <HeaderLi className="navbar-menuitems" id="Wellness">
                  Wellness
                </HeaderLi>
                <HeaderLi className="navbar-menuitems" id="Podcasts">
                  Podcasts
                </HeaderLi>
                <HeaderLi className="navbar-menuitems" id="Video">
                  Video
                </HeaderLi>
              </HeaderUL>
            </HeaderLeftContainer>

            <HeaderRightContainer>
              <MoreDropDown>
                <span
                  onClick={() =>
                    this.setState({
                      toggleDropDown: !this.state.toggleDropDown,
                    })
                  }
                >
                  more
                </span>
                <DropDownMenu toggle={this.state.toggleDropDown}>
                  <ul>
                    {this.state.dropDownItems.map((item) => (
                      <li key={item.id}>{item.outerText}</li>
                    ))}
                  </ul>
                </DropDownMenu>
              </MoreDropDown>

              <DownloadCurrentIssueButton>
                <span>Download Current Issue</span>
                <span>ICON</span>
              </DownloadCurrentIssueButton>
              <SubscribeNowButton>
                <img src={subscribeNow} alt="" />
                <span>Subscribe Now</span>
              </SubscribeNowButton>
            </HeaderRightContainer>
          </HeaderSubContainer>
        </HeaderContainer>

        {/* Now we will be starting body here */}
        <BodyCommon />
      </>
    );
  }
}
