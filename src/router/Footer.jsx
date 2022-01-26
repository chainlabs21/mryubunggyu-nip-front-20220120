import { useSelector } from "react-redux";
import styled from "styled-components";
import I_logo from "../img/icon/I_logo.svg";
import I_logoSky from "../img/icon/I_logoSky.png";
import I_logoText from "../img/icon/I_logoText.svg";

export default function Footer() {
  const isMobile = useSelector((state) => state.common.isMobile);

  if (isMobile)
    return (
      <MfooterBox>
        <p className="copyright">
          Copyright © 2022 METACHAIN .LTD. All rights reserved.
        </p>

        <article className="logoBox">
          <img className="logoImg" src={I_logoSky} alt="" />
          <p className="logoText">NIP</p>
        </article>
      </MfooterBox>
    );
  else
    return (
      <PfooterBox>
        <div className="innerBox">
          <p className="copyright">
            Copyright © 2022 METACHAIN .LTD. All rights reserved.
          </p>

          <article className="logoBox">
            <img className="logoImg" src={I_logo} alt="" />
            <img className="logoText" src={I_logoText} alt="" />
          </article>
        </div>
      </PfooterBox>
    );
}

const MfooterBox = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0 20px 50px 20px;

  .copyright {
    font-size: 12px;
    font-weight: 500;
    line-height: 12px;
    color: #4f4f4f;
    letter-spacing: -0.04em;
  }

  .logoBox {
    display: flex;
    align-self: flex-end;
    align-items: center;
    gap: 3px;

    .logoImg {
      height: 40px;
    }

    .logoText {
      font-size: 20px;
      font-weight: 600;
      color: #839cb8;
    }
  }
`;

const PfooterBox = styled.footer`
  display: flex;
  justify-content: center;
  height: 108px;
  background: #fff;

  .innerBox {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1440px;

    .copyright {
      font-size: 18px;
      font-weight: 500;
      line-height: 18px;
      color: #4f4f4f;
    }

    .logoBox {
      display: flex;
      align-items: flex-end;
      gap: 6px;

      .logoImg {
        height: 40px;
      }

      .logoText {
        height: 18px;
      }
    }
  }
`;