import React, {useState} from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import {useWindowWidth} from "@react-hook/window-size";
import TrackShipment from "./TrackShipment/TrackShipment";

const Header = () => {
  const [t, i18n] = useTranslation();
  const width = useWindowWidth();
  return (
    <Navbar
      className={"header border-light-gray header sticky-top bg-white"}
      expand="lg"
    >
      <Container>
        <Link to={"/"}>
          <Navbar.Brand
            as={"span"}
            className={"cairo-bold font-22 red"}
            href="#home"
          >
            <img
              alt=""
              src="/bosta.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            {t("header.title")}
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle id={'toggleBtn'} aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to={"/"}>
              <Nav.Link
                as={"span"}
                className={"hover-item-border cairo-semi-bold font-18 black"}
              >
                <span className={"header-item-border"}/>
                {t("header.home")}
              </Nav.Link>
            </Link>
            <Link to={"/pricing"}>
              <Nav.Link
                as={"span"}
                className={"hover-item-border cairo-semi-bold font-18 black"}
              >
                <span className={"header-item-border"}/>
                {t("header.pricing")}
              </Nav.Link>
            </Link>
            <Link to={"/contactSale"}>
              <Nav.Link
                as={"span"}
                className={"hover-item-border cairo-semi-bold font-18 black"}
              >
                <span className={"header-item-border"}/>
                {t("header.contactSale")}
              </Nav.Link>
            </Link>
          </Nav>
          <Nav>
            {width > 991 ? (
              <OverlayTrigger
                trigger="click"
                placement={"bottom"}
                rootClose
                overlay={
                  <Popover
                    className="hide-arrow no-border rtl-ar"
                    id={`popover-positioned-bottom`}
                  >
                    <Popover.Content className={"popup-body"}>
                      <TrackShipment searchFn={() => document.body.click()}/>
                    </Popover.Content>
                  </Popover>
                }
              >
                <Nav.Link
                  as={"span"}
                  className={
                    "hover-item-border cairo-semi-bold pointer font-18 black"
                  }
                >
                  <span className={"header-item-border"}/>
                  {t("header.trackingShipment")}
                </Nav.Link>
              </OverlayTrigger>
            ) : (
              <Link to="/trackShipment">
                <Nav.Link
                  as={"span"}
                  className={"hover-item-border cairo-semi-bold font-18 black"}
                >
                  <span className={"header-item-border"}/>
                  {t("header.trackingShipment")}
                </Nav.Link>
              </Link>
            )}
            <div className="d-lg-flex d-none align-items-center">
              <span className={"column"}/>
            </div>
            <Link to={"/signin"}>
              <Nav.Link
                as={"span"}
                className={"hover-item-border cairo-semi-bold font-18 black"}
              >
                <span className={"header-item-border"}/>
                {t("header.signIn")}
              </Nav.Link>
            </Link>
            <Nav.Link
              as={"span"}
              onClick={() => {
                if (width <= 991) {
                  setTimeout(() => document.getElementById('toggleBtn')?.click(), 300)
                }
                if (t("header.otherLangKey") === "ar") {
                  document.body.classList.add("ar");
                } else {
                  document.body.classList.remove("ar");
                }
                localStorage.setItem("otherLangKey", t("header.otherLangKey"));
                i18n.changeLanguage(t("header.otherLangKey"));
              }}
              className={"hover-item-border cairo-black font-20 red"}
            >
              <span className={"header-item-border"}/>
              {t("header.otherLang")}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
