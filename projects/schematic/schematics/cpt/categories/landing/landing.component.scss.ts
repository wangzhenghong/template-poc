const scss = () => `@import '../../../styles-variables.scss';
.landing-content {
  display: flex;
  flex-direction: row;

  .content-left {
    // overflow: scroll;
    flex: 2;
    margin-left: 143px;
    margin-right: 120px;

    @media screen and (max-width: $tabletMax) {
      margin: 0 0 80px 0;
    }

    .content-title-img {
      display: none;

      @media screen and (min-width: $tabletMin) and (max-width: $tabletMax) {
        display: block;
        width: 100%;
        background: url('/assets/images/covid/images01_m@3x.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 50% 50%;
        height: 328px;
      }

      @media screen and (max-width: $mbMax) {
        display: block;
        width: 100%;
        background: url('/assets/images/covid/images01_m@3x.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 50% 50%;
        height: 160px;
      }
    }

    .swapper {
      @media screen and (min-width: $tabletMin) and (max-width: $tabletMax) {
        margin-left: 38px;
        margin-right: 42px;
      }

      @media screen and (max-width: $mbMax) {
        margin-left: 20px;
        margin-right: 20px;
      }

      .title {
        margin-top: 80px;

        @media screen and (max-width: $mbMax) {
          margin-top: 30px;
        }

        .Free-covid-19 {
          font-family: ManulifeJHSans-Demibold;
          font-size: 32px;
          font-weight: 600;
          font-stretch: normal;
          font-style: normal;
          line-height: 42px;
          letter-spacing: normal;
          color: #282b3e;

          @media screen and (max-width: $mbMax) {
            font-size: 26px;
            line-height: 34px;
          }
        }
        .standing-with-you {
          margin-top: 40px;
          font-family: ManulifeJHSans-Demibold;
          font-size: 26px;
          font-weight: 600;
          font-stretch: normal;
          font-style: normal;
          line-height: 34px;
          letter-spacing: normal;
          color: #282b3e;

          @media screen and (max-width: $mbMax) {
            font-size: 22px;
            line-height: 28px;
          }
        }
        .in-the-fight {
          margin-top: 10px;
          font-family: ManulifeJHSans-Regular;
          font-size: 16px;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          line-height: 26px;
          letter-spacing: normal;
          color: #282b3e;
        }
      }

      .content-list {
        margin-top: 20px;
        font-family: ManulifeJHSans-Regular;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 26px;
        letter-spacing: normal;
        color: #282b3e;

        .terms {
          margin-top: 5px;
          display: flex;
          align-items: center;

          .check {
            width: 12px;
            height: 9.6px;
            margin-right: 20px;
          }

          &:first-child {
            margin-top: 0;
          }

          &:last-child {
            margin-top: 10px;

            @media screen and (max-width: $mbMax) {
              display: block;
            }
          }
        }
      }

      .submit-btn {
        margin-top: 40px;

        button {
          cursor: pointer;
        }
      }

      .time {
        margin-top: 20px;
        display: flex;
        align-items: center;

        .clock {
          width: 18px;
          height: 18px;
          margin-right: 10px;
        }
        .text {
          font-family: ManulifeJHSans-Regular;
          font-size: 14px;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          line-height: 20px;
          letter-spacing: normal;
          color: #282b3e;

          span {
            font-family: ManulifeJHSerif-Italic;
            font-style: italic;
          }
        }
      }

      .existing-customers {
        margin-top: 40px;
        font-family: ManulifeJHSans-Regular;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 26px;
        letter-spacing: normal;
        color: #282b3e;
      }

      .terms-and-conditions {
        margin-top: 20px;
        font-family: ManulifeJHSans-Regular;
        font-size: 16px;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: 26px;
        letter-spacing: normal;
        color: #282b3e;

        .border {
          font-weight: 600;
          font-weight: normal;
          font-family: ManulifeJHSans-Demibold;
          border-bottom: 1px solid #00a758;
        }
      }
    }
  }

  .content-right {
    flex: 1;
    background: url('/assets/images/covid/bg_CONVID@3x.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
    height: 900px;

    @media screen and (max-width: $tabletMax) {
      display: none;
    }
  }
}
`;

export default scss;
