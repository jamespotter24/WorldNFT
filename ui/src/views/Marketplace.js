import React, { useState, useEffect, useSelector, useContext } from "react";
import {
  Units,
  Unit,
  numberToString,
  hexToNumber,
  add0xToString,
  fromWei,
  toWei,
  numToStr,
} from "@harmony-js/utils";
import { BN } from "@harmony-js/crypto";
import { Iconly } from "react-iconly";

import { useHistory } from "react-router-dom";

import Store from "../stores/store";
const store = Store.store;
const emitter = Store.emitter;
const dispatcher = Store.dispatcher;

export default function Marketplace() {
  const route_history = useHistory();
  const [nftCount, setNftCount] = useState(0);
  const [nftList, setNftList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // console.log(nftList);
    setLoading(false);
  }, [nftList]);

  const downloadData = async () => {
    let contract = store.getStore().dapp_contract;
    if (contract) {
      console.log(contract);
      //   const value = await contract.methods.getMoneyStored().call();
      //   console.log("value ", Number(value));
      //   const one = new BN("1");
      //   let options = {
      //     from: store.getStore().account,
      //     gasPrice: 1000000000,
      //     gasLimit: 210000,
      //     value: toWei(one, Units.one),
      //   };
      //   const increment = await contract.methods.addMoney().send(options);
      //   console.log("increment ", increment);
    }
  };

  const downloadNfts = async () => {
    let contract = store.getStore().dapp_contract;
    if (contract) {
      let nftCount = await contract.methods.nextId().call();
      setNftCount(nftCount);
      let tmpList = [];
      //test_nft
      //   let testNftObj = {
      //     tokenId: 0,
      //     name: "Mumbai",
      //     svg_image: "",
      //     price: "2",
      //     isNftOwned: true,
      //   };
      //   tmpList = [testNftObj];

      //From blockchain
      for (var i = 0; i < nftCount; i++) {
        const nft = await contract.methods.getTokenDetails(i).call();
        const owner = await contract.methods.getOwnerOf(i).call();
        let price = await contract.methods.getPriceOf(i).call();
        //For ETH
        // price = window.web3.utils.fromWei(price);
        console.log("owner", owner);
        price = fromWei(price, Units.one);
        const isNftOwned = owner == store.getStore().account ? true : false;
        let nftObj = {
          tokenId: i,
          name: nft.location_name,
          svg_image: nft.svg_image,
          price: price,
          owner: owner,
          isNftOwned: isNftOwned,
        };
        tmpList.push(nftObj);
      }
      setNftList(tmpList);
    }
  };

  const init = async () => {
    setLoading(true);
    if (!window.web3) {
      window.alert("No metamask found! Cannot load nfts!");
      setLoading(false);
      return;
    }
    const storeUpdated = async () => {
      downloadNfts();
      //   downloadData();
    };
    emitter.on("StoreUpdated", storeUpdated);
    downloadNfts();
    // downloadData();
  };

  useEffect(() => {
    init();
  }, []);

  const svgStr = `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <g id="Layer_1">
   <title>Layer 1</title>
   <text fill="#aaff56" stroke-width="0" x="45.59224" y="166.60551" id="svg_2" font-size="13" font-family="'Montserrat'" text-anchor="start" xml:space="preserve" font-weight="normal" font-style="italic" stroke="#5B9BA2" transform="matrix(3.65578 0 0 3.69501 -155.381 -442.79)" stroke-dasharray="2,2">Tel Aviv</text>
   <path stroke="#5B9BA2" id="svg_4" d="m69.07162,131.62409c4.6884,-12.16598 17.45657,-19.33838 29.85716,-20.25773c0,-2.58988 0,-5.17976 0,-7.76964c-19.9042,-1.4491 -39.59813,-9.93827 -52.82671,-25.44349c-12.08484,-13.15484 -18.48955,-30.84862 -19.36993,-48.68751c-6.99149,-5.04922 6.52937,-8.72298 8.17654,-3.13768c-3.7668,4.63385 -0.11739,11.90209 0.41794,17.57755c5.96506,26.82162 29.30147,48.25776 56.00834,52.06103c6.82923,3.06832 8.64628,-1.05493 7.47899,-7.37265c1.46153,-4.99501 -3.86645,-3.47865 -7.05347,-4.41123c-21.05596,-3.74246 -39.34921,-20.36115 -44.74792,-41.48781c-1.54671,-6.04453 -2.0497,-12.70313 -3.93324,-17.65577c4.00244,-3.17347 13.61227,-0.84524 8.29879,4.82378c0.56933,24.00243 20.22111,45.18008 43.46795,48.19698c4.8065,2.38246 4.25528,-1.69344 4.08269,-4.95686c2.54692,-7.93384 -5.0487,-6.74125 -10.1532,-8.6926c-14.35543,-4.94781 -24.87735,-19.14982 -25.87228,-34.5126c-6.86699,-6.06714 8.1837,-9.24009 8.28999,-2.92655c-3.94446,4.66164 0.50309,12.23073 2.87953,17.20349c5.36954,8.87518 14.67856,14.86692 24.85597,16.05602c0,-3.96285 0,-7.9257 0,-11.88856c-9.46186,-1.48313 -17.01945,-9.86249 -18.08972,-19.47758c-6.44664,-5.32158 7.58124,-7.88773 8.59,-2.79009c-3.50019,2.78161 -0.86644,7.24463 1.18855,10.25937c1.46837,1.78274 8.73552,7.98781 8.31117,3.31313c0,-5.28506 0,-10.57011 0,-15.85516c-4.4322,-2.85336 1.6717,-4.75364 -0.99382,-8.12221c1.53314,-3.49565 2.22759,-12.53773 3.37566,-12.64533c3.84568,5.55456 2.40999,13.26463 6.0389,18.09532c-2.00251,2.18459 -2.35041,4.60825 -2.0087,7.84598c0,4.24496 0,8.48991 0,12.73487c5.73528,-1.70877 10.92672,-6.54503 11.28959,-12.89713c-6.55356,-7.8011 15.94852,-6.07367 6.60961,0.84262c-0.97271,9.40572 -8.88521,17.15828 -17.8992,18.74305c0,3.94723 0,7.89447 0,11.8417c15.42763,-1.57105 29.03293,-15.36062 29.30641,-31.33127c-6.42379,-7.19439 14.50475,-6.71746 7.34132,-0.27867c-1.64421,7.79981 -3.23735,16.08971 -8.46921,22.46062c-6.59979,9.04863 -17.17211,14.421 -28.05399,15.6889c0.0883,4.81759 -2.41929,14.99324 5.78598,10.93389c20.42809,-3.52486 37.79848,-20.87882 40.91934,-41.84581c2.98255,-4.66079 -4.52508,-13.17209 4.30455,-11.99872c5.45629,-1.29065 6.2261,3.34206 3.04978,6.1783c-1.06386,18.90861 -11.38651,37.11486 -27.59073,46.67548c-8.06948,4.8101 -17.23275,7.84164 -26.59344,8.35271c0.09268,3.96772 -0.24739,7.98694 0.32018,11.91323c18.35207,-1.48512 36.41701,-9.53682 48.38704,-24.06181c10.66212,-12.13897 16.15257,-28.15138 17.06837,-44.25342c-5.42216,-5.29187 5.92097,-6.11851 8.62288,-3.7103c-3.05695,6.14352 -2.71068,14.24829 -4.73889,21.34761c-6.59362,27.96388 -30.35338,50.49366 -58.12303,55.58759c-3.80648,0.82646 -7.67893,1.24509 -11.53655,1.73438c-0.36915,4.79381 -0.26406,9.6692 6.02671,8.75299c10.70031,2.27909 20.97312,9.77436 24.39157,20.64788c-22.39106,0 -44.78213,0 -67.1732,0c0.16191,-0.46679 0.3238,-0.93359 0.48573,-1.40036l0.00001,0.00005zm-43.07142,-109.8883c-0.28523,-4.27469 2.25318,-13.39243 2.94167,-14.4509c1.18029,3.91289 6.53975,12.52966 2.45719,15.06859c-1.71024,-0.20207 -4.18202,0.83001 -5.39886,-0.61769zm17.93993,0.29052c-0.89095,-5.27735 2.83543,-10.22687 2.34575,-15.67403c1.67298,4.44113 8.5031,15.53014 1.02182,16.02579c-1.12619,-0.04072 -2.2796,0.01875 -3.36757,-0.35176l0,-0.00001zm18.51174,-0.09076c-0.79205,-5.17707 2.70394,-10.07628 2.39941,-15.41636c2.0721,4.48269 9.03916,17.23193 -0.43098,15.84594l-0.99358,-0.06651l-0.97484,-0.36307l0,0zm17.98324,0.13919c-1.01436,-5.27799 2.80811,-10.26371 2.30537,-15.72245c1.69952,4.46982 8.46689,15.4691 1.03395,16.13692c-1.11893,-0.04319 -2.27233,0.01133 -3.33932,-0.41446zm35.96251,-0.20165c-0.8077,-5.30874 2.76256,-10.33034 2.26022,-15.83252c1.40574,2.6786 3.285,7.23524 4.11488,10.80447c2.48044,5.81172 -2.05315,6.59493 -6.3751,5.02805l0,0.00001zm18.55669,0.23439c-1.50381,-5.13953 2.75615,-10.30329 2.11859,-15.75519c1.77837,4.3852 6.44728,12.2003 3.39589,15.98162c-1.83744,0.0103 -3.70789,0.21986 -5.51447,-0.22643zm18.11945,-0.10867c-1.16034,-4.28442 2.25954,-13.08044 2.63651,-14.87612c1.8179,4.42028 8.58892,17.69279 -1.45167,15.24337l-1.18484,-0.36725l0,0zm18.23892,-0.08079c-0.99136,-4.70519 2.70422,-11.47693 2.51112,-15.12577c1.80332,4.22647 8.82314,17.01702 -0.49192,15.59517l-0.98267,-0.07879l-1.03654,-0.39061l0,0z" stroke-dasharray="2,2" stroke-width="0" fill="#7fff00"/>
  </g>
 
 </svg>`;

  const routeToDetail = (id) => {
    console.log("click ", id);
    route_history.push("/nft/" + id);
  };

  const Styles = {
    filterOption: {
      color: "#000000",
      fontWeight: 600,
      fontSize: "22px",
      fontStyle: "normal",
    },
    sortSelectedOption: {
      backgroundColor: "",
      border: "0px solid rgba(0, 0, 0, 0.25)",
      borderRadius: "10px",
      boxShadow: "8px 8px 4px rgba(0, 0, 0, 0.25)",
      padding: "10px",
      width: "100px",
    },
    sortOptionsBtn: {
      fontWeight: 600,
      fontSize: "22px",
    },
  };

  return (
    <div className="flex flex-row home marketlayout" style={{ height: "90vh" }}>
      <aside className="sidebar filterbar">
        <div className="sidebar-header flex py-4 px-2">
          <span className="self-start filtername" style={{}}>
            Filter
          </span>
        </div>
        <div className="sidebar-content filtercontent">
          <ul className="flex flex-col w-full filteritem">
            <li>
              <a
                href="#"
                className="flex flex-row justify-between items-center rounded-lg h-20 px-3 eachfilter"
              >
                <span style={Styles.filterOption}>Categories</span>
                <Iconly
                  name="ChevronDownCircle"
                  set="two-tone"
                  primaryColor="black"
                  size="large"
                />
              </a>
              <div className="flex items-center px-3">
                <span
                  style={{
                    border: "1px solid #000000",
                    width: "100%",
                    opacity: "0.1",
                  }}
                ></span>
              </div>
            </li>
            <li className="my-px">
              <a
                href="#"
                className="flex flex-row justify-between items-center rounded-lg h-20 px-3 eachfilter"
              >
                <span style={Styles.filterOption}>Price</span>
                <Iconly
                  name="ChevronDownCircle"
                  set="two-tone"
                  primaryColor="black"
                  size="large"
                />
              </a>
              <div className="flex items-center px-3">
                <span
                  style={{
                    border: "1px solid #000000",
                    width: "100%",
                    opacity: "0.1",
                  }}
                ></span>
              </div>
            </li>
            <li>
              <a
                href="#"
                className="flex flex-row justify-between  items-center rounded-lg h-20 px-3 eachfilter"
              >
                <span style={Styles.filterOption}>Status</span>
                <Iconly
                  name="ChevronDownCircle"
                  set="two-tone"
                  primaryColor="black"
                  size="large"
                />
              </a>
              <div className="flex items-center px-3">
                <span
                  style={{
                    border: "1px solid #000000",
                    width: "100%",
                    opacity: "0.1",
                  }}
                ></span>
              </div>
            </li>
          </ul>
        </div>
      </aside>
      <main className="main flex flex-col flex-grow">
        <header className="header bg-white shadow py-4 px-4 secondfilter">
          {/* NFTs minted: {nftCount} */}
          <div className="flex justify-between">
            <div>
              <button
                className="flex flex-row justify-between"
                style={Styles.sortSelectedOption}
              >
                Latest
                <Iconly
                  name="CloseSquare"
                  set="two-tone"
                  primaryColor="black"
                  size="medium"
                />
              </button>
            </div>
            <div className="flex flex-row">
              <span className="mr-2" style={Styles.sortOptionsBtn}>
                Sort by
              </span>
              <Iconly
                name="ChevronDownCircle"
                set="two-tone"
                primaryColor="black"
                size="medium"
              />
            </div>
          </div>
        </header>
        <div className="main-content">
          <div className="w-full p-6">
            {loading && <span>Loading ...</span>}
            {!loading && (
              <div className="grid grid-cols-3 gap-4 nftcontent">
                {nftList.map((nft, idx) => {
                  return (
                    <div
                      className="w-full flex flex-col items-center justify-center rounded-lg cursor-pointer hover:shadow-md h-full nftitem"
                      onClick={() => routeToDetail(nft.tokenId)}
                      key={idx}
                    >
                      {/* {nft.isNftOwned && (
                        <div className="p-2 font-semibold">Owned</div>
                      )} */}
                      <div
                        className="relative w-full p-1 flex justify-center m-2"
                        style={{
                          height: "85%",
                          background:
                            "radial-gradient(77.96% 81.64% at 50% 50%, #FFFFFF 0%, #FFCA0E 100%)",
                        }}
                      >
                        <div
                          dangerouslySetInnerHTML={{ __html: nft.svg_image }}
                        ></div>
                        {/* <div dangerouslySetInnerHTML={{ __html: svgStr }}></div> */}
                        {/* <img
                        src={getTestSvgUri()}
                        width="100px"
                        height="100px"
                      ></img> */}
                      </div>
                      <div
                        className="flex justify-between w-full"
                        style={{
                          height: "10%",
                        }}
                      >
                        <div
                          className="ml-2 flex flex-row"
                          style={{
                            color: "transparent",
                            textShadow: "0 0 #DC1FFF",
                          }}
                        >
                          {/* <Iconly
                            name="Heart2"
                            set="two-tone"
                            primaryColor="black"
                            size="medium"
                          /> */}
                          💜
                          <span
                            style={{
                              color: "#828282",
                              fontFamily: "Montserrat",
                              fontWeight: 600,
                              fontSize: "20px",
                              fontStyle: "normal",
                              lineHeight: "22px",
                            }}
                          >
                            &nbsp;23
                          </span>
                        </div>
                        <div className="mr-2">
                          <span
                            style={{
                              color: "#5D5D5D",
                              fontFamily: "Poppins",
                              fontWeight: 600,
                              fontSize: "20px",
                              fontStyle: "normal",
                              lineHeight: "25px",
                            }}
                          >
                            current bid
                          </span>
                        </div>
                      </div>
                      <div
                        className="flex justify-between w-full"
                        style={{
                          height: "10%",
                          fontFamily: "Poppins",
                        }}
                      >
                        <div className="ml-2">
                          <span
                            className="uppercase"
                            style={{
                              color: "#DC1FFF",
                              fontWeight: 600,
                              fontSize: "21px",
                              fontStyle: "normal",
                              lineHeight: "28px",
                            }}
                          >
                            {nft.name}
                          </span>
                        </div>
                        <div className="mr-2">
                          <span
                            className="uppercase"
                            style={{
                              color: "#00FFA3",
                              fontWeight: 600,
                              fontSize: "21px",
                              fontStyle: "normal",
                              lineHeight: "28px",
                            }}
                          >
                            {nft.price}&nbsp;
                          </span>
                          <span
                            className="uppercase"
                            style={{
                              color: "#DC1FFF",
                              fontWeight: 600,
                              fontSize: "20px",
                              fontStyle: "normal",
                              lineHeight: "28px",
                            }}
                          >
                            ONE
                          </span>
                        </div>
                      </div>
                      <hr />
                      <div
                        className="flex justify-between w-full mt-2"
                        style={{
                          height: "10%",
                        }}
                      >
                        <div className="ml-2">
                          <span
                            style={{
                              color: "#828282",
                              fontFamily: "Montserrat",
                              fontWeight: 600,
                              fontSize: "18px",
                              fontStyle: "normal",
                              lineHeight: "22px",
                            }}
                          >
                            Owned by
                          </span>
                          {/* <span
                            className="uppercase"
                            style={{
                              color: "#00FFA3",
                              fontWeight: 600,
                              fontSize: "21px",
                              fontStyle: "normal",
                              lineHeight: "28px",
                            }}
                          >
                            {nft.owner}&nbsp;
                          </span> */}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
