const scss = () => `@import '../../../styles-variables.scss';
.register-content {
  display: flex;
  flex-direction: row;

  .content-left {
    // overflow: scroll;
    flex: 2;
    margin-left: 143px;
    margin-right: 120px;

    @media screen and (max-width: $tabletMax) {
      margin: 0;
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
        margin-left: 42px;
        margin-right: 130px;
      }

      @media screen and (max-width: $mbMax) {
        margin-left: 20px;
        margin-right: 20px;
      }

      .title {
        margin-top: 60px;

        @media screen and (max-width: $mbMax) {
          margin-top: 40px;
        }

        .Free-covid-19 {
          font-family: ManulifeJHSans-Demibold;
          font-size: 26px;
          font-weight: 600;
          font-stretch: normal;
          font-style: normal;
          line-height: 34px;
          letter-spacing: normal;
          color: #282b3e;

          @media screen and (max-width: $mbMax) {
            font-size: 18px;
            line-height: 22px;
          }
        }

        .please-provide {
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

      .content-form {
        margin-top: 60px;

        @media screen and (max-width: $mbMax) {
          margin-top: 40px;
        }

        .personal-information {
          font-family: ManulifeJHSans-Demibold;
          font-size: 18px;
          font-weight: 600;
          font-stretch: normal;
          font-style: normal;
          line-height: 22px;
          letter-spacing: normal;
          color: #282b3e;
        }

        .form-body {
          .form-group {
            display: flex;

            @media screen and (max-width: $mbMax) {
              flex-direction: column;
            }

            .form-box {
              display: flex;
              flex-direction: column;

              .form-label {
                font-family: ManulifeJHSans-Regular;
                font-size: 14px;
                font-weight: normal;
                font-stretch: normal;
                font-style: normal;
                line-height: 20px;
                letter-spacing: normal;
                color: #5e6073;

                &.radio-label {
                  margin-bottom: 15px;
                  font-family: ManulifeJHSans-Regular;
                  font-size: 16px;
                  font-weight: normal;
                  font-stretch: normal;
                  font-style: normal;
                  line-height: 26px;
                  letter-spacing: normal;
                  color: #8e90a2;
                }
              }
              input {
                margin-top: 12px;
              }
              &.name-title {
                width: 14%;
                @media screen and (max-width: $mbMax) {
                  width: 50%;
                }
              }
              &.name-first {
                width: 32%;
                padding-left: 20px;
                @media screen and (max-width: $mbMax) {
                  width: 100%;
                  margin-top: 40px;
                  padding-left: 0;
                }
              }
              &.name-last {
                width: 54%;
                padding-left: 20px;

                @media screen and (max-width: $mbMax) {
                  width: 100%;
                  margin-top: 40px;
                  padding-left: 0;
                }
              }

              &.birth-box {
                width: 100%;

                img {
                  width: 14px;
                  height: 14px;
                  margin-left: 5px;
                }
              }

              &.card-number-box {
                width: 100%;
              }

              &.check-box {
                display: flex;
                flex-direction: row;

                .note {
                  padding-left: 10px;
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

              &.phone-title {
                width: 14%;
                min-width: 100px;
              }

              &.phone-number {
                width: 86%;
                padding-left: 20px;
                margin-top: 20px;
              }
              &.email-box {
                width: 100%;
              }
              &.age-box {
                width: 100%;
              }
            }

            &.name {
              margin-top: 30px;
            }

            &.birth {
              margin-top: 40px;
            }
            &.please-select {
              margin-top: 40px;

              .radio-group {
                display: flex;
                flex-direction: row;
                :first-child {
                  margin-right: 60px;
                }

                @media screen and (max-width: $mbMax) {
                  display: flex;
                  flex-direction: column;
                  :last-child {
                    margin-top: 15px;
                  }
                }
              }
            }
            &.card-number {
              margin-top: 40px;
            }
            &.check {
              margin-top: 40px;
            }
            &.phone {
              margin-top: 40px;

              @media screen and (max-width: $mbMax) {
                flex-direction: row;
              }
            }
            &.email {
              margin-top: 40px;
            }
            &.age {
              margin-top: 30px;
            }
          }

          .you-will-need {
            margin-top: 15px;
            font-family: ManulifeJHSans-Regular;
            font-size: 14px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 20px;
            letter-spacing: normal;
            color: #282b3e;
          }

          .you-will-receive {
            margin-top: 10px;
            font-family: ManulifeJHSans-Regular;
            font-size: 14px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 20px;
            letter-spacing: normal;
            color: #282b3e;
          }

          .additional-coverage {
            margin-top: 80px;
            font-family: ManulifeJHSans-Demibold;
            font-size: 18px;
            font-weight: 600;
            font-stretch: normal;
            font-style: normal;
            line-height: 22px;
            letter-spacing: normal;
            color: #282b3e;
          }

          .required-box {
            margin-top: 77px;
            .title {
              font-family: ManulifeJHSans-Demibold;
              font-size: 18px;
              font-weight: 600;
              font-stretch: normal;
              font-style: normal;
              line-height: 22px;
              letter-spacing: normal;
              color: #282b3e;
            }

            .desc-list {
              margin-top: 30px;
              padding-left: 20px;
              font-family: ManulifeJHSans-Regular;
              font-size: 16px;
              font-weight: normal;
              font-stretch: normal;
              font-style: normal;
              line-height: 26px;
              letter-spacing: normal;
              color: #282b3e;
            }
            .required-content {
              display: flex;
              margin-top: 30px;

              .note {
                padding-left: 20px;
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
          }

          .verification-code {
            margin-top: 80px;

            .title {
              margin-bottom: 20px;
              font-family: ManulifeJHSans-Demibold;
              font-size: 18px;
              font-weight: 600;
              font-stretch: normal;
              font-style: normal;
              line-height: 22px;
              letter-spacing: normal;
              color: #282b3e;
            }

            .note {
              margin-top: 15px;
              font-family: ManulifeJHSans-Regular;
              font-size: 14px;
              font-weight: normal;
              font-stretch: normal;
              font-style: normal;
              line-height: 20px;
              letter-spacing: normal;
              color: #282b3e;
            }

            .input-code {
              margin-top: 15px;
              input {
                width: 100%;
              }
            }
          }

          .btn {
            margin-top: 30px;

            button {
              cursor: pointer;
            }

            @media screen and (max-width: $mbMax) {
              margin-top: 40px;
              text-align: center;
              button {
                width: 100%;
              }
            }
          }

          .sorry {
            margin-top: 40px;
            font-family: ManulifeJHSans-Demibold;
            font-size: 18px;
            font-weight: 600;
            font-stretch: normal;
            font-style: normal;
            line-height: 22px;
            letter-spacing: normal;
            color: #000000;
          }

          .please-stay-tuned {
            margin-top: 20px;
            font-family: ManulifeJHSans-Regular;
            font-size: 16px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 26px;
            letter-spacing: normal;
            color: #282b3e;
          }

          .important {
            margin-top: 80px;
            margin-bottom: 60px;

            @media screen and (max-width: $mbMax) {
              margin-bottom: 20px;
            }

            .important-note {
              font-family: ManulifeJHSans-Regular;
              font-size: 14px;
              font-weight: normal;
              font-stretch: normal;
              font-style: normal;
              line-height: 20px;
              letter-spacing: normal;
              color: #5e6073;
            }
          }
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
