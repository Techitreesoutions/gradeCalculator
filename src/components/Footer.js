import React, { Component } from "react";
export default class Footer extends Component {
  render() {
    return (
      <footer class="body-footer js-body-footer">
        <div class="footer-grid">
          <div class="footer__breadcrumbs">
            <a href="index.html" class="footer__breadcrumbs-logo">
              GPA Calculator
            </a>
          </div>
        </div>
        <div class="footer-grid">
          <div class="footer-cell footer-cell--text">
            <h4 class="footer-cell__title">About GPA Calculator</h4>
            <p class="footer-cell__description">
              GPA calculator is a refreshingly simple, easy to use web interface
              for calculating GPAs and class grades. Why? Because our mission at{" "}
              <a
                href="https://wasai.co/"
                title="Wasai — Digital Ventures"
                target="_blank"
                rel="noopener"
              >
                Wasai
              </a>{" "}
              is to build a better internet, one digital product at a time. Like
              the site? <a href="mailto:hello@wasai.co">Send us a note</a>.
            </p>
          </div>
          <div class="footer-cell footer-cell--list">
            <h4 class="footer-cell__title">GPA Calculators</h4>
            <ul class="footer-cell__list">
              <li class="footer-cell__item">
                <a href="college-gpa-calculator.html" class="footer-cell__link">
                  College GPA Calculator
                </a>
              </li>
              <li class="footer-cell__item">
                <a
                  href="high-school-gpa-calculator.html"
                  class="footer-cell__link"
                >
                  High School GPA Calculator
                </a>
              </li>
              <li class="footer-cell__item">
                <a
                  href="cumulative-gpa-calculator.html"
                  class="footer-cell__link"
                >
                  Cumulative GPA Calculator
                </a>
              </li>
            </ul>
          </div>
          <div class="footer-cell footer-cell--list">
            <h4 class="footer-cell__title">Grade Calculators</h4>
            <ul class="footer-cell__list">
              <li class="footer-cell__item">
                <a href="grade-calculator.html" class="footer-cell__link">
                  Grade Calculator
                </a>
              </li>
              <li class="footer-cell__item">
                <a href="final-grade-calculator.html" class="footer-cell__link">
                  Final Grade Calculator
                </a>
              </li>
              <li class="footer-cell__item">
                <a
                  href="weighted-grade-calculator.html"
                  class="footer-cell__link"
                >
                  Weighted Grade Calculator
                </a>
              </li>
            </ul>
          </div>
          <div class="footer-cell footer-cell--list">
            <h4 class="footer-cell__title">Guides</h4>
            <ul class="footer-cell__list">
              <li class="footer-cell__item">
                <a href="how-to-calculate-gpa.html" class="footer-cell__link">
                  {" "}
                  <span class="footer-cell__link--hide">How to</span>
                  <span class="footer-cell__link--show">Calculate GPA</span>
                </a>
              </li>
              <li class="footer-cell__item">
                <a href="how-to-raise-gpa.html" class="footer-cell__link">
                  {" "}
                  <span class="footer-cell__link--hide">How to</span>
                  <span class="footer-cell__link--show">Raise GPA</span>
                </a>
              </li>
              <li class="footer-cell__item">
                <a
                  href="how-to-calculate-grades.html"
                  class="footer-cell__link"
                >
                  {" "}
                  <span class="footer-cell__link--hide">How to</span>
                  <span class="footer-cell__link--show">Calculate Grades</span>
                </a>
              </li>
            </ul>
          </div>
          <div class="footer-cell footer-cell--list">
            <h4 class="footer-cell__title">Resources</h4>
            <ul class="footer-cell__list">
              <li class="footer-cell__item">
                <a href="gpa-scale.html" class="footer-cell__link">
                  GPA Scale
                </a>
              </li>
              <li class="footer-cell__item">
                <a href="faq.html" class="footer-cell__link">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div class="footer-cell footer-cell--list">
            <ul class="footer-cell__list footer-cell__list--social">
              <li class="footer-cell__item">
                <a
                  href="#"
                  class="footer-cell__icon"
                  target="_blank"
                  title="Share on Twitter"
                  rel="noopener"
                >
                  <svg
                    class="icon-social"
                    width="16px"
                    height="16px"
                    viewBox="0 0 16 16"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      class="icon-social__fill"
                      d="M16,3.53933333 C15.4113333,3.80066667 14.7786667,3.97666667 14.1146667,4.056 C14.792,3.65 15.3133333,3.00666667 15.558,2.24 C14.924,2.616 14.2213333,2.88933333 13.474,3.03666667 C12.8753333,2.39866667 12.0213333,2 11.0773333,2 C9.26466667,2 7.79466667,3.47 7.79466667,5.28266667 C7.79466667,5.53933333 7.824,5.79 7.88,6.03066667 C5.152,5.89333333 2.73333333,4.58666667 1.114,2.60066667 C0.831333333,3.08533333 0.669333333,3.64933333 0.669333333,4.25066667 C0.669333333,5.39 1.24933333,6.39466667 2.13,6.98333333 C1.592,6.96666667 1.08533333,6.81866667 0.643333333,6.57266667 C0.642666667,6.58666667 0.642666667,6.6 0.642666667,6.614 C0.642666667,8.20466667 1.77466667,9.53133333 3.276,9.83266667 C3.00066667,9.90733333 2.71066667,9.948 2.41133333,9.948 C2.19933333,9.948 1.994,9.92733333 1.79333333,9.88933333 C2.21133333,11.1926667 3.42333333,12.142 4.86,12.1686667 C3.73666667,13.0493333 2.32133333,13.574 0.783333333,13.574 C0.518,13.574 0.256666667,13.5586667 0,13.528 C1.45266667,14.4593333 3.17866667,15.0026667 5.032,15.0026667 C11.0693333,15.0026667 14.372,10.0013333 14.372,5.66333333 C14.372,5.52066667 14.3686667,5.37933333 14.362,5.23866667 C15.0033333,4.77533333 15.56,4.19733333 16,3.53933333"
                    ></path>
                  </svg>
                </a>
              </li>
              <li class="footer-cell__item">
                <a
                  href="#"
                  class="footer-cell__icon"
                  target="_blank"
                  title="Share on Facebook"
                  rel="noopener"
                >
                  <svg
                    class="icon-social"
                    width="16px"
                    height="16px"
                    viewBox="0 0 16 16"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      class="icon-social__fill"
                      d="M6.48196682,15.9986141 L6.48196682,8.70106445 L4,8.70106445 L4,5.85694718 L6.48269403,5.85694718 L6.48269403,3.75967432 C6.48269403,1.32424892 7.98656375,0 10.1827371,0 C11.2299192,0 12.1374769,0.0778114414 12.3999996,0.112717509 L12.3999996,2.65649715 L10.8772224,2.65722436 C9.68387127,2.65722436 9.45189136,3.21863028 9.45189136,4.04110448 L9.45189136,5.85694718 L12.2981903,5.85694718 L11.9294949,8.70106445 L9.45189136,8.70106445 L9.45189136,15.9986141 L6.48196682,15.9986141 L6.48196682,15.9986141 Z"
                    ></path>
                  </svg>
                </a>
              </li>
              <li class="footer-cell__item">
                <a
                  href="#"
                  class="footer-cell__icon"
                  target="_blank"
                  title="Share on Google+"
                  rel="noopener"
                >
                  <svg
                    class="icon-social"
                    width="22px"
                    height="16px"
                    viewBox="0 0 22 16"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      class="icon-social__fill"
                      d="M7,7 L7,9.4 L10.97,9.4 C10.81,10.43 9.77,12.42 7,12.42 C4.61,12.42 2.66,10.44 2.66,8 C2.66,5.56 4.61,3.58 7,3.58 C8.36,3.58 9.27,4.16 9.79,4.66 L11.69,2.83 C10.47,1.69 8.89,1 7,1 C3.13,1 0,4.13 0,8 C0,11.87 3.13,15 7,15 C11.04,15 13.72,12.16 13.72,8.16 C13.72,7.7 13.67,7.35 13.61,7 L7,7 L7,7 Z M22,7 L20,7 L20,5 L18,5 L18,7 L16,7 L16,9 L18,9 L18,11 L20,11 L20,9 L22,9 L22,7 L22,7 Z"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer-grid">
          <div class="footer-cell footer-cell--row">
            <span class="footer-cell__copyright">
              © <script>document.write(new Date().getFullYear())</script>2021{" "}
              <span>GPA Calculator</span>
            </span>
            <a
              href="privacy-policy.html"
              class="footer-cell__privacy"
              title="Privacy Policy"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    );
  }
}
