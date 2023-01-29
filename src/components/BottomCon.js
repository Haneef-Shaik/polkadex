import React, { useEffect, useState } from "react";
import "./BottomCon.css";
import SearchIcon from "@mui/icons-material/Search";
import Popper from "@mui/material/Popper";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";

export default function BottomCon({ isExpanded, setIsExpanded }) {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (isExpanded == false) {
      setSelected(0);
    }
  }, [isExpanded]);

  return (
    <>
      <div
        className="cardContainer"
        style={{
          width:
            selected == 1
              ? "386px"
              : selected == 2
              ? "435px"
              : selected == 3
              ? "435px"
              : "386px",
          left:
            selected == 1
              ? "-170px"
              : selected == 2
              ? "0"
              : selected == 3
              ? "140px"
              : "0",
          height: isExpanded && selected ? "288px" : "0",
        }}
      >
        <div
          className="cards"
          style={{
            left:
              selected == 1
                ? "0"
                : selected == 2
                ? "-386px"
                : selected == 3
                ? "-821px"
                : "",
          }}
        >
          <Card1 />
          <Card2 />
          <Card3 />
        </div>
      </div>

      <div
        className="borderBox"
        style={{
          background: selected == 0 ? "radial-gradient(#e6007a, #6745d2)" : "",
        }}
      >
        <div className="bottomBox">
          <div className={selected == 1 ? "movingBoder" : "center"}>
            <div className={selected == 1 ? "movingBoderInner" : "center"}>
              <div
                className="singleCon"
                onClick={(event) => {
                  setIsExpanded((val) => (selected == 1 ? false : true));
                  setSelected((val) => (val == 1 ? 0 : 1));
                  event.stopPropagation();
                }}
                style={{ bacground: "red" }}
              >
                {isExpanded ? (
                  <>
                    <div className="fortitle">Any token</div>
                    <div>Choose token </div>
                  </>
                ) : (
                  <div>Any token</div>
                )}
              </div>
            </div>
          </div>

          <div className={selected == 2 ? "movingBoder" : "center"}>
            <div className={selected == 2 ? "movingBoderInner" : "center"}>
              <div
                className="singleCon"
                onClick={(event) => {
                  setSelected((val) => (val == 2 ? 0 : 2));
                  setIsExpanded((val) => (selected == 2 ? false : true));
                  event.stopPropagation();
                }}
              >
                {isExpanded ? (
                  <>
                    <div className="fortitle">Any chain</div>
                    <div>Select chain </div>
                  </>
                ) : (
                  <div>Any chain</div>
                )}
              </div>
            </div>
          </div>

          <div
            className={selected == 3 ? "movingBoder" : "center"}
            style={{ display: "flex" }}
          >
            <div
              className={selected == 3 ? "movingBoderInner" : "center"}
              style={{ display: "flex" }}
            >
              <div
                className="singleCon"
                onClick={(event) => {
                  setIsExpanded((val) => (selected == 3 ? false : true));
                  setSelected((val) => (val == 3 ? 0 : 3));
                  event.stopPropagation();
                }}
              >
                {isExpanded ? (
                  <>
                    <div className="fortitle">Any amount</div>
                    <div>Filter by amount </div>
                  </>
                ) : (
                  <div>
                    <div>Any amount</div>
                  </div>
                )}
              </div>
              <div
                style={{ alignSelf: "center" }}
                onClick={(event) => {
                  setIsExpanded((val) => (selected == 2 ? false : true));
                  setSelected((val) => (val == 3 ? 0 : 3));
                  event.stopPropagation();
                }}
              >
                {isExpanded ? (
                  <>
                    <div
                      className="searchIcon2 center"
                      style={{ marginRight: "2%" }}
                    >
                      <SearchIcon style={{ fontSize: "40px" }} />
                      Search
                    </div>
                  </>
                ) : (
                  <div className="searchIcon center" onClick={() => {}}>
                    <SearchIcon style={{ fontSize: "50px" }} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
