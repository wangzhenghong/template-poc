// import { strings } from '@angular-devkit/core';

const html = () => `
<div class="register-content">
  <div class="content-left">
    <div class="content-title-img"></div>
    <div class="swapper">
      <form>
        <div class="title">
          <div class="Free-covid-19">
            Free COVID-19 Coverage for Hong Kong and Macau Citizens
          </div>
          <div class="pleade-provide">
            Please provide the following information to activate your coverage.
          </div>
        </div>

        <div class="content-form">
          <div class="personal-information">
            Personal information
          </div>
          <div class="form-body">
            <div class="form-group name">
              <div class="form-box name-title">
                <label class="form-label">Title</label>
                <mld-dropdown
                  [options]="[
                    { value: 'Mr', label: 'Mr' },
                    { value: 'Ms', label: 'Ms' }
                  ]"
                  classOptions="normal-dropdown-input"
                  placeholder="Title"
                >
                </mld-dropdown>
              </div>
              <div class="form-box name-first">
                <label class="form-label">Surname</label>
                <input
                  mld-input
                  type="text"
                  placeholder="Surname"
                  [ngStyle]="{ 'font-size': '16px' }"
                />
              </div>
              <div class="form-box name-last">
                <label class="form-label">Given name</label>
                <input
                  mld-input
                  type="text"
                  placeholder="Given name"
                  [ngStyle]="{ 'font-size': '16px' }"
                />
              </div>
            </div>

            <div class="form-group birth">
              <div class="form-box birth-box">
                <label class="form-label"
                  >Date of birth
                  <img
                    src="assets/images/covid/Info_2.svg"
                    appTooltip="<span style='font-size:13px;'>Applicants must be 18 year old or above</span>"
                    contentType="html"
                    position="top"
                    tooltipWidth="180"
                    tooltipHeight="80"
                    triggerType="hover"
                  />
                </label>
                <input
                  type="text"
                  placeholder="DD/MM/YYYY"
                  [ngStyle]="{ 'font-size': '16px' }"
                  mld-inputdate
                />
              </div>
            </div>

            <div class="form-group please-select">
              <div class="form-box radio-box">
                <label class="form-label radio-label"
                  >Please select your identification</label
                >
                <div class="radio-group">
                  <mld-radio
                    *ngFor="
                      let item of [
                        { label: 'HKID card', value: 'HKID', checked: true },
                        {
                          label: 'Macau resident identity card',
                          value: 'MCID',
                          checked: false
                        }
                      ]
                    "
                    [label]="item.label"
                    [value]="item.value"
                    [checked]="item.checked"
                    [group]="'identification'"
                    >{{ item.label }}</mld-radio
                  >
                </div>
              </div>
            </div>

            <div class="form-group card-number">
              <div class="form-box card-number-box">
                <label class="form-label"
                  >HKID/ Macau resident identity card number</label
                >
                <input
                  mld-input
                  type="text"
                  placeholder="123456789(0)"
                  [ngStyle]="{ 'font-size': '16px' }"
                  maxlength="15"
                />
              </div>
            </div>

            <div class="form-group check">
              <div class="form-box check-box">
                <div class="note">
                  I am a permenant resident in Hong Kong/ Macau
                </div>
              </div>
            </div>

            <div class="you-will-need">
              You will need to be a permenant resident in Hong Kong/ Macau in
              order to proceed this registration.
            </div>

            <div *ngIf="true; else other_content">
              <div class="form-group phone">
                <div class="form-box phone-title">
                  <label class="form-label">Mobile phone</label>
                  <mld-dropdown
                    [options]="[
                      { value: '+852', label: '+852' },
                      { value: '+853', label: '+853' }
                    ]"
                    classOptions="normal-dropdown-input"
                    placeholder="+852"
                    name="mobileCode"
                  >
                  </mld-dropdown>
                </div>
                <div class="form-box phone-number">
                  <input
                    mld-input
                    type="number"
                    placeholder="12345678"
                    [ngStyle]="{ 'font-size': '16px' }"
                  />
                </div>
              </div>

              <div class="form-group email">
                <div class="form-box email-box">
                  <label class="form-label">Email</label>
                  <input
                    type="text"
                    placeholder="Email"
                    [ngStyle]="{ 'font-size': '16px' }"
                  />
                </div>
              </div>

              <div class="you-will-receive">
                You will receive an email with details on the coverage after
                completing your registration.
              </div>

              <div class="additional-coverage">
                Additional coverage (optional)
              </div>

              <div class="form-group age">
                <div class="form-box age-box">
                  <label class="form-label"
                    >Number of child(ren) to be registered (maximum 2 children
                    below the age of 18)</label
                  >
                  <mld-dropdown
                    [options]="[
                      { value: '0', label: '0' },
                      { value: '1', label: '1' },
                      { value: '2', label: '2' }
                    ]"
                    classOptions="normal-dropdown-input"
                    placeholder="0"
                  >
                  </mld-dropdown>
                </div>
              </div>

              <div class="declaration required-box">
                <div class="title">
                  Declaration
                </div>
                <div class="desc-list">
                  <ul>
                    <li>I am now in Hong Kong or Macau.</li>
                    <li>I am a HKID card or Macau identity card holder.</li>
                    <li>I have a residence address in Hong Kong or Macau.</li>
                    <li>
                      I confirm that my objective for seeking to purchase an
                      insurance product of Manulife is for preparation for my
                      health care needs. I understand if this product is not
                      suitable for meeting my needs, I could explore other
                      product options and select other products via Manulife
                      website and/or financial advisor.
                    </li>
                    <li>
                      I have read the
                      <span class="border">Terms and Benefits</span> of the free
                      COVID-19 coverage. I understand the details of the
                      coverage that l am signing up for.
                    </li>
                    <li>
                      I acknowledge, agree and confirm that I will not receive
                      any contract. I will receive a confirmation email upon
                      successful registration.
                    </li>
                    <li>
                      I acknowledge, agree and confirm that all the information
                      I provided will be shared to the financial advisor
                      assigned for policy's application or follow-up.
                    </li>
                    <li>
                      I have read and agreed to the
                      <span class="border">Terms and Conditions</span> and
                      <span class="border"
                        >Personal Information Collection Statement (PICS).</span
                      >
                    </li>
                  </ul>
                </div>
                <div class="required-content">
                  <div>
                    <mld-checkbox binary="true" [checked]="true"></mld-checkbox>
                  </div>
                  <div class="note">
                    I have read and confirmed that all the above statements are
                    true.
                  </div>
                </div>
              </div>

              <div class="required-box">
                <div class="desc-list">
                  I confirm my consent as referred to in the sections entitled
                  Use of Personal Data in Direct Marketing and Provision of
                  Personal Data for Use in Direct Marketing of the Notice,
                  subject to any objection as indicated by me below:
                  <span class="border">(IMPORTANT NOTE:</span> Please be
                  reminded that direct marketing can include offers of special
                  discounts, coupons or gift items. You can leave these boxes
                  blank.)
                </div>
                <div class="required-content">
                  <div>
                    <mld-checkbox binary="true"></mld-checkbox>
                  </div>
                  <div class="note">
                    I object to Manulife’s use of my personal data in direct
                    marketing as referred to in the section entitled
                    <span class="border"
                      >Use of Personal Data in Direct Marketing</span
                    >
                    of the Notice.
                  </div>
                </div>
                <div class="required-content">
                  <div>
                    <mld-checkbox binary="true"></mld-checkbox>
                  </div>
                  <div class="note">
                    I object to any action taken by Manulife to provide my
                    personal data to Manulife Group (other than Manulife itself)
                    for use in direct marketing as referred to in the section
                    entitled
                    <span class="border"
                      >Provision of Personal Data for Use in Direct
                      Marketing</span
                    >
                    of the Notice.
                  </div>
                </div>
              </div>

              <div class="verification-code">
                <div class="title">
                  Security code
                </div>
                <div></div>
                <div class="note">
                  Character may contain numbers and letters (not case
                  sensitive).
                </div>
                <div class="form-box input-code input-code-box">
                  <input
                    type="text"
                    placeholder="Please enter above characters"
                    [ngStyle]="{ 'font-size': '16px' }"
                  />
                </div>
              </div>

              <div class="btn">
                <button mld-button class="pending">
                  Submit
                </button>
              </div>
            </div>

            <ng-template #other_content>
              <div class="sorry">
                Sorry! We are unable to process your application at this moment.
              </div>
              <div class="please-stay-tuned">
                Please stay tuned for updates and other information on our
                <span class="border">COVID-19 special measures webpage.</span>
                Thank you for your support.
              </div>
            </ng-template>

            <div class="important">
              <div class="important-note">
                Notice: The contact information provided on this page will not
                be updated by any record of the customer’s
                account(s)/policy(ies) with Manulife.
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>

  <div class="content-right"></div>
</div>
`;

export default html;
