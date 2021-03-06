import { useSelector } from "react-redux";
import styled from "styled-components";
import { D_offer } from "../../data/DauctionDetail";
import { strDot } from "../../util/Util";
import axios from "axios";
import { API } from "../../configs/api";
import { useEffect, useState } from "react";
import { net } from "../../configs/net";
import person from "../../img/itemDetail/E_prof3.png";

export default function Offer(params, offers) {
  const isMobile = useSelector((state) => state.common.isMobile);
  console.log("offers", offers);
  const [offersInfo, setOffersInfo] = useState([]);

  console.log("params", params.params?.itemid);

  const fetchdata = () => {
    axios
      .get(API.API_GET_OFFERS + `/${params.params?.itemid}?nettype=${net}`)
      .then((resp) => {
        console.log("asdoijfosidajf", resp.data.list);
        if (resp.data.status === "OK") {
          setOffersInfo(resp.data.list);
        }
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    fetchdata();
  }, []);

  if (isMobile)
    return (
      <MofferBox>
        {offersInfo &&
          offersInfo?.map((cont, index) => (
            <li key={index}>
              <img src={cont.prfoImg ? cont.prfoImg : person} alt="" />
              <div className="infoBox">
                <p className="info">{`${strDot(cont.username, 11, 4)} ${parseInt(cont.buyprice).toFixed(2)} USDT `}</p>
                <p className="time">{cont.createdat}</p>
              </div>
            </li>
          ))}
      </MofferBox>
    );
  else
    return (
      <PofferBox>
        {offersInfo &&
          offersInfo?.map((cont, index) => (
            <li key={index}>
              <img src={cont.prfoImg ? cont.profoImg : person} alt="" />
              <div className="infoBox">
                <p className="info">{`${strDot(cont.username, 11, 4)} ${parseInt(cont.buyprice).toFixed(2)} USDT `}</p>
                <p className="time">{strDot(cont.createdat, 10)}</p>
              </div>
            </li>
          ))}
      </PofferBox>
    );
}

const MofferBox = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 6.94vw;
  padding: 6.11vw 0;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 3.88vw;
    padding: 0 0 0 5.55vw;

    img {
      width: 11.11vw;
      height: 11.11vw;
      border-radius: 50%;
      object-fit: cover;
    }

    .infoBox {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 1.11vw;
      overflow: hidden;

      .info {
        font-size: 3.88vw;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }

      .time {
        font-size: 3.33vw;
        color: #a3a3a3;
      }
    }
  }
`;

const PofferBox = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 24px 0;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    width: 100%;

    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      object-fit: cover;
    }

    .infoBox {
      flex: 1;
      gap: 4px;

      .info {
        font-size: 18px;
      }

      .time {
        font-size: 14px;
        color: #a3a3a3;
      }
    }
  }
`;
