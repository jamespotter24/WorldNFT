import React, { useState, useEffect } from "react";

import {
  Link,
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from "react-router-dom";

import { country_icon_svg, city_icon_svg, landmark_icon_svg } from "./icons";

export default function Home() {
  let { path, url } = useRouteMatch();

  return (
    <>
      {/* <Marketplace /> */}
      <div className="home">
        <img
          src="https://static.overlay-tech.com/assets/eeb0c8c9-6927-4067-ba89-cc331844f560.svg"
          width="800px"
          height="600px"
          style={{
            position: "absolute",
            right: "10%",

            top: "100px",
          }}
        ></img>
        <div className="flex flex-col">
          <div
            className="flex flex-col m-4 mt-12"
            style={{
              height: "400px",
            }}
          >
            <div style={{ position: "absolute", top: "300px", left: "50px" }}>
              <svg
                width="450"
                height="208"
                viewBox="0 0 907 208"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M40.4 77.6C32.8667 77.6 26.1 76.0333 20.1 72.9C14.1 69.7667 9.4 65.4333 6 59.9C2.6 54.3 0.9 48 0.9 41C0.9 34 2.6 27.7333 6 22.2C9.4 16.6 14.1 12.2333 20.1 9.1C26.1 5.96666 32.8667 4.4 40.4 4.4C47.9333 4.4 54.7 5.96666 60.7 9.1C66.7 12.2333 71.4 16.6 74.8 22.2C78.2 27.7333 79.9 34 79.9 41C79.9 48 78.2 54.3 74.8 59.9C71.4 65.4333 66.7 69.7667 60.7 72.9C54.7 76.0333 47.9333 77.6 40.4 77.6ZM40.4 58.5C43.3333 58.5 45.9667 57.8 48.3 56.4C50.7 54.9333 52.6 52.9 54 50.3C55.4 47.6333 56.1 44.5333 56.1 41C56.1 37.4667 55.4 34.4 54 31.8C52.6 29.1333 50.7 27.1 48.3 25.7C45.9667 24.2333 43.3333 23.5 40.4 23.5C37.4667 23.5 34.8 24.2333 32.4 25.7C30.0667 27.1 28.2 29.1333 26.8 31.8C25.4 34.4 24.7 37.4667 24.7 41C24.7 44.5333 25.4 47.6333 26.8 50.3C28.2 52.9 30.0667 54.9333 32.4 56.4C34.8 57.8 37.4667 58.5 40.4 58.5ZM181.066 21.3L162.066 76H140.066L131.766 50.7L123.166 76H101.166L82.1656 21.3H103.566L112.966 50.2L122.766 21.3H141.966L151.466 50.5L161.266 21.3H181.066ZM223.422 20.3C230.155 20.3 235.555 22.3333 239.622 26.4C243.755 30.4667 245.822 36.6 245.822 44.8V76H223.222V48.7C223.222 42.4333 220.989 39.3 216.522 39.3C213.989 39.3 211.922 40.2 210.322 42C208.789 43.7333 208.022 46.5 208.022 50.3V76H185.422V21.3H206.922V26.7C209.055 24.5667 211.522 22.9667 214.322 21.9C217.122 20.8333 220.155 20.3 223.422 20.3ZM310.117 20.3C319.717 20.3 327.051 22.4667 332.117 26.8C337.184 31.0667 339.717 37.6667 339.717 46.6V76H318.717V68.8C316.117 74.2667 310.951 77 303.217 77C298.884 77 295.184 76.2667 292.117 74.8C289.117 73.2667 286.817 71.2333 285.217 68.7C283.684 66.1 282.917 63.2 282.917 60C282.917 54.6 284.984 50.5 289.117 47.7C293.251 44.9 299.517 43.5 307.917 43.5H317.017C316.284 39.2333 312.851 37.1 306.717 37.1C304.251 37.1 301.751 37.5 299.217 38.3C296.684 39.0333 294.517 40.0667 292.717 41.4L285.517 26.5C288.651 24.5667 292.417 23.0667 296.817 22C301.284 20.8667 305.717 20.3 310.117 20.3ZM310.017 63.4C311.617 63.4 313.051 62.9667 314.317 62.1C315.584 61.2333 316.517 59.9333 317.117 58.2V54.4H311.517C306.917 54.4 304.617 55.9333 304.617 59C304.617 60.2667 305.084 61.3333 306.017 62.2C307.017 63 308.351 63.4 310.017 63.4ZM415.965 20.3C420.765 20.3 425.165 21.4667 429.165 23.8C433.232 26.0667 436.432 29.3667 438.765 33.7C441.165 38.0333 442.365 43.0333 442.365 48.7C442.365 54.3667 441.165 59.3667 438.765 63.7C436.432 67.9667 433.232 71.2667 429.165 73.6C425.165 75.8667 420.765 77 415.965 77C409.898 77 405.265 75.4333 402.065 72.3V95.4H379.465V21.3H400.965V25.8C404.232 22.1333 409.232 20.3 415.965 20.3ZM410.565 59.4C413.165 59.4 415.298 58.4667 416.965 56.6C418.632 54.7333 419.465 52.1 419.465 48.7C419.465 45.3 418.632 42.6667 416.965 40.8C415.298 38.8667 413.165 37.9 410.565 37.9C407.965 37.9 405.832 38.8667 404.165 40.8C402.498 42.6667 401.665 45.3 401.665 48.7C401.665 52.1 402.498 54.7333 404.165 56.6C405.832 58.4667 407.965 59.4 410.565 59.4ZM472.617 20.3C482.217 20.3 489.551 22.4667 494.617 26.8C499.684 31.0667 502.217 37.6667 502.217 46.6V76H481.217V68.8C478.617 74.2667 473.451 77 465.717 77C461.384 77 457.684 76.2667 454.617 74.8C451.617 73.2667 449.317 71.2333 447.717 68.7C446.184 66.1 445.417 63.2 445.417 60C445.417 54.6 447.484 50.5 451.617 47.7C455.751 44.9 462.017 43.5 470.417 43.5H479.517C478.784 39.2333 475.351 37.1 469.217 37.1C466.751 37.1 464.251 37.5 461.717 38.3C459.184 39.0333 457.017 40.0667 455.217 41.4L448.017 26.5C451.151 24.5667 454.917 23.0667 459.317 22C463.784 20.8667 468.217 20.3 472.617 20.3ZM472.517 63.4C474.117 63.4 475.551 62.9667 476.817 62.1C478.084 61.2333 479.017 59.9333 479.617 58.2V54.4H474.017C469.417 54.4 467.117 55.9333 467.117 59C467.117 60.2667 467.584 61.3333 468.517 62.2C469.517 63 470.851 63.4 472.517 63.4ZM533.484 27.2C537.484 22.6 543.384 20.3 551.184 20.3V40.3C549.384 40.0333 547.718 39.9 546.184 39.9C538.451 39.9 534.584 43.8333 534.584 51.7V76H511.984V21.3H533.484V27.2ZM599.355 74.1C595.955 76.0333 591.321 77 585.455 77C577.788 77 571.888 75.1667 567.755 71.5C563.621 67.7667 561.555 62.2 561.555 54.8V40.8H554.055V24.3H561.555V9H584.155V24.3H595.355V40.8H584.155V54.6C584.155 56.2667 584.588 57.5667 585.455 58.5C586.321 59.4333 587.455 59.9 588.855 59.9C590.788 59.9 592.488 59.4 593.955 58.4L599.355 74.1ZM663.931 77C657.865 77 652.398 75.8 647.531 73.4C642.731 70.9333 638.965 67.5667 636.231 63.3C633.498 58.9667 632.131 54.0667 632.131 48.6C632.131 43.1333 633.498 38.2667 636.231 34C638.965 29.6667 642.731 26.3 647.531 23.9C652.398 21.5 657.865 20.3 663.931 20.3C670.065 20.3 675.531 21.5 680.331 23.9C685.198 26.3 688.965 29.6667 691.631 34C694.365 38.2667 695.731 43.1333 695.731 48.6C695.731 54.0667 694.365 58.9667 691.631 63.3C688.965 67.5667 685.198 70.9333 680.331 73.4C675.531 75.8 670.065 77 663.931 77ZM663.931 59.4C666.531 59.4 668.665 58.4667 670.331 56.6C671.998 54.6667 672.831 52 672.831 48.6C672.831 45.2 671.998 42.5667 670.331 40.7C668.665 38.8333 666.531 37.9 663.931 37.9C661.331 37.9 659.198 38.8333 657.531 40.7C655.865 42.5667 655.031 45.2 655.031 48.6C655.031 52 655.865 54.6667 657.531 56.6C659.198 58.4667 661.331 59.4 663.931 59.4ZM727.205 24.3H739.105V40.8H727.905V76H705.305V40.8H697.805V24.3H705.305V24C705.305 16.8667 707.438 11.2333 711.705 7.1C715.971 2.9 721.971 0.799997 729.705 0.799997C732.238 0.799997 734.705 1.03333 737.105 1.49999C739.505 1.96666 741.505 2.63333 743.105 3.5L737.705 19.2C735.838 18.3333 734.138 17.9 732.605 17.9C730.938 17.9 729.605 18.4333 728.605 19.5C727.671 20.5 727.205 22.0667 727.205 24.2V24.3ZM51.19 111.5C59.92 111.5 67.525 112.94 74.005 115.82C80.485 118.7 85.48 122.84 88.99 128.24C92.5 133.64 94.255 139.94 94.255 147.14C94.255 154.34 92.5 160.64 88.99 166.04C85.48 171.44 80.485 175.58 74.005 178.46C67.525 181.34 59.92 182.78 51.19 182.78H37.555V206H5.695V111.5H51.19ZM49.165 158.21C53.485 158.21 56.725 157.265 58.885 155.375C61.045 153.395 62.125 150.65 62.125 147.14C62.125 143.63 61.045 140.93 58.885 139.04C56.725 137.06 53.485 136.07 49.165 136.07H37.555V158.21H49.165ZM105.077 105.83H135.587V206H105.077V105.83ZM182.185 130.805C195.145 130.805 205.045 133.73 211.885 139.58C218.725 145.34 222.145 154.25 222.145 166.31V206H193.795V196.28C190.285 203.66 183.31 207.35 172.87 207.35C167.02 207.35 162.025 206.36 157.885 204.38C153.835 202.31 150.73 199.565 148.57 196.145C146.5 192.635 145.465 188.72 145.465 184.4C145.465 177.11 148.255 171.575 153.835 167.795C159.415 164.015 167.875 162.125 179.215 162.125H191.5C190.51 156.365 185.875 153.485 177.595 153.485C174.265 153.485 170.89 154.025 167.47 155.105C164.05 156.095 161.125 157.49 158.695 159.29L148.975 139.175C153.205 136.565 158.29 134.54 164.23 133.1C170.26 131.57 176.245 130.805 182.185 130.805ZM182.05 188.99C184.21 188.99 186.145 188.405 187.855 187.235C189.565 186.065 190.825 184.31 191.635 181.97V176.84H184.075C177.865 176.84 174.76 178.91 174.76 183.05C174.76 184.76 175.39 186.2 176.65 187.37C178 188.45 179.8 188.99 182.05 188.99ZM286.631 130.805C295.721 130.805 303.011 133.55 308.501 139.04C314.081 144.53 316.871 152.81 316.871 163.88V206H286.361V169.145C286.361 160.685 283.346 156.455 277.316 156.455C273.896 156.455 271.106 157.67 268.946 160.1C266.876 162.44 265.841 166.175 265.841 171.305V206H235.331V132.155H264.356V139.445C267.236 136.565 270.566 134.405 274.346 132.965C278.126 131.525 282.221 130.805 286.631 130.805ZM410.009 169.01C410.009 169.46 409.874 171.845 409.604 176.165H358.304C359.384 178.955 361.184 181.115 363.704 182.645C366.224 184.085 369.374 184.805 373.154 184.805C376.394 184.805 379.094 184.4 381.254 183.59C383.504 182.78 385.934 181.385 388.544 179.405L404.474 195.47C397.274 203.39 386.519 207.35 372.209 207.35C363.299 207.35 355.469 205.73 348.719 202.49C341.969 199.16 336.749 194.57 333.059 188.72C329.369 182.87 327.524 176.3 327.524 169.01C327.524 161.63 329.324 155.06 332.924 149.3C336.614 143.45 341.609 138.905 347.909 135.665C354.299 132.425 361.454 130.805 369.374 130.805C376.844 130.805 383.639 132.29 389.759 135.26C395.969 138.23 400.874 142.595 404.474 148.355C408.164 154.115 410.009 161 410.009 169.01ZM369.644 151.595C366.494 151.595 363.884 152.45 361.814 154.16C359.744 155.87 358.394 158.3 357.764 161.45H381.524C380.894 158.39 379.544 156.005 377.474 154.295C375.404 152.495 372.794 151.595 369.644 151.595ZM474.043 203.435C469.453 206.045 463.198 207.35 455.278 207.35C444.928 207.35 436.963 204.875 431.383 199.925C425.803 194.885 423.013 187.37 423.013 177.38V158.48H412.888V136.205H423.013V115.55H453.523V136.205H468.643V158.48H453.523V177.11C453.523 179.36 454.108 181.115 455.278 182.375C456.448 183.635 457.978 184.265 459.868 184.265C462.478 184.265 464.773 183.59 466.753 182.24L474.043 203.435ZM601.721 181.97V206H523.151V111.5H599.966V135.53H554.471V146.6H594.431V169.55H554.471V181.97H601.721ZM646.116 130.805C659.076 130.805 668.976 133.73 675.816 139.58C682.656 145.34 686.076 154.25 686.076 166.31V206H657.726V196.28C654.216 203.66 647.241 207.35 636.801 207.35C630.951 207.35 625.956 206.36 621.816 204.38C617.766 202.31 614.661 199.565 612.501 196.145C610.431 192.635 609.396 188.72 609.396 184.4C609.396 177.11 612.186 171.575 617.766 167.795C623.346 164.015 631.806 162.125 643.146 162.125H655.431C654.441 156.365 649.806 153.485 641.526 153.485C638.196 153.485 634.821 154.025 631.401 155.105C627.981 156.095 625.056 157.49 622.626 159.29L612.906 139.175C617.136 136.565 622.221 134.54 628.161 133.1C634.191 131.57 640.176 130.805 646.116 130.805ZM645.981 188.99C648.141 188.99 650.076 188.405 651.786 187.235C653.496 186.065 654.756 184.31 655.566 181.97V176.84H648.006C641.796 176.84 638.691 178.91 638.691 183.05C638.691 184.76 639.321 186.2 640.581 187.37C641.931 188.45 643.731 188.99 645.981 188.99ZM728.287 140.12C733.687 133.91 741.652 130.805 752.182 130.805V157.805C749.752 157.445 747.502 157.265 745.432 157.265C734.992 157.265 729.772 162.575 729.772 173.195V206H699.262V132.155H728.287V140.12ZM817.212 203.435C812.622 206.045 806.367 207.35 798.447 207.35C788.097 207.35 780.132 204.875 774.552 199.925C768.972 194.885 766.182 187.37 766.182 177.38V158.48H756.057V136.205H766.182V115.55H796.692V136.205H811.812V158.48H796.692V177.11C796.692 179.36 797.277 181.115 798.447 182.375C799.617 183.635 801.147 184.265 803.037 184.265C805.647 184.265 807.942 183.59 809.922 182.24L817.212 203.435ZM876.201 130.805C885.291 130.805 892.581 133.55 898.071 139.04C903.651 144.53 906.441 152.81 906.441 163.88V206H875.931V169.145C875.931 160.685 872.916 156.455 866.886 156.455C863.466 156.455 860.676 157.67 858.516 160.1C856.446 162.44 855.411 166.175 855.411 171.305V206H824.901V105.83H855.411V138.095C861.081 133.235 868.011 130.805 876.201 130.805Z"
                  fill="#FFCA0E"
                />
              </svg>
            </div>
          </div>
          <div className="flex justify-start mb-2">
            <Link
              to={`/market`}
              className="rounded p-4 mr-2 ml-8 mb-2"
              style={{
                background: "#FFFFFF",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                borderRadius: "90px",
              }}
            >
              <span
                className="text-4xl"
                style={{
                  color: "#FFCA0E",
                  fontFamily: "Montserrat",
                  fontWeight: 900,
                  fontStyle: "normal",
                  lineHeight: "96%",
                }}
              >
                Explore
              </span>
            </Link>
          </div>
          <hr />
          <div className="flex flex-col">
            <div className="px-8 mt-4 flex justify-center">
              <span class="text-4xl font-semibold">Browse By</span>
            </div>

            <div className="px-8 mt-4 flex flex-row w-100 justify-center space-x-8">
              <div
                className="rounded-lg flex flex-col cursor-pointer"
                style={{
                  width: "300px",
                  height: "250px",
                  boxShadow: "0px 2px 4px rgba(255, 0, 0, 0.25)",
                }}
              >
                <div
                  className="bg-purple-400 m-2 mb-0"
                  style={{ height: "80%" }}
                >
                  {country_icon_svg}
                </div>
                <div className="flex justify-center" style={{ height: "20%" }}>
                  <span
                    className="text-xl self-center"
                    style={{
                      color: "#FFCA0E",
                      fontFamily: "Montserrat",
                      fontWeight: 900,
                      fontStyle: "normal",
                      lineHeight: "96%",
                    }}
                  >
                    COUNTRY
                  </span>
                </div>
              </div>
              <Link
                to={`/market`}
                className="rounded-lg flex flex-col cursor-pointer"
                style={{
                  width: "300px",
                  height: "250px",
                  boxShadow: "0px 4px 4px rgba(0, 255, 0, 0.25)",
                }}
              >
                <div
                  className="bg-purple-400 m-2 mb-0"
                  style={{ height: "80%" }}
                >
                  {city_icon_svg}
                </div>
                <div className="flex justify-center" style={{ height: "20%" }}>
                  <span
                    className="text-xl self-center"
                    style={{
                      color: "#FFCA0E",
                      fontFamily: "Montserrat",
                      fontWeight: 900,
                      fontStyle: "normal",
                      lineHeight: "96%",
                    }}
                  >
                    CITY
                  </span>
                </div>
              </Link>
              <div
                className="rounded-lg flex flex-col cursor-pointer"
                style={{
                  width: "300px",
                  height: "250px",
                  boxShadow: "0px 2px 4px rgba(255, 0, 0, 0.25)",
                }}
              >
                <div
                  className="bg-purple-400 m-2 mb-0"
                  style={{ height: "80%" }}
                >
                  {landmark_icon_svg}
                </div>
                <div className="flex justify-center" style={{ height: "20%" }}>
                  <span
                    className="text-xl self-center"
                    style={{
                      color: "#FFCA0E",
                      fontFamily: "Montserrat",
                      fontWeight: 900,
                      fontStyle: "normal",
                      lineHeight: "96%",
                    }}
                  >
                    LANDMARK
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
