import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Header1 extends Component {
  render() {
    return (
      <header class="body-header js-body-header">
        <nav
          class="menu-desktop"
          itemscope=""
          itemtype="https://schema.org/SiteNavigationElement"
        >
          <a href="index.html" class="menu-desktop__logo" itemprop="url">
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none" fill-rule="evenodd">
                <rect fill="#FFC871" width="64" height="64" rx="8"></rect>
                <path
                  d="M18 18v-8h4v8h8v4h-8v8h-4v-8h-8v-4h8zm16 24h20v4H34v-4z"
                  fill="#FFF"
                ></path>
                <path
                  d="M14.4964291 49.5035709l35.0069488-35.0069488"
                  stroke="#FFF"
                  stroke-width="2"
                  stroke-linecap="square"
                ></path>
              </g>
            </svg>
            <span itemprop="name">GPA Calculator</span>
          </a>
          <ul class="menu-desktop__list">
            <li class="menu-desktop__item menu-desktop__item--dropdown">
              <a href="index.html" class="menu-desktop__link" itemprop="url">
                {" "}
                <span itemprop="name">GPA Calculators</span>
                <span class="menu-desktop__caret"></span>
              </a>
              <ul class="menu-desktop__sublist">
                <li class="menu-desktop__subitem">
                  <a
                    href="index.html"
                    class="menu-desktop__link is-active"
                    itemprop="url"
                  >
                    {" "}
                    <span itemprop="name">College GPA Calculator</span>
                  </a>
                </li>
                <li class="menu-desktop__subitem">
                  <a
                    href="high-school-gpa-calculator.html"
                    class="menu-desktop__link"
                    itemprop="url"
                  >
                    {" "}
                    <span itemprop="name">High School GPA Calculator</span>
                  </a>
                </li>
                <li class="menu-desktop__subitem">
                  <a
                    href="cumulative-gpa-calculator.html"
                    class="menu-desktop__link"
                    itemprop="url"
                  >
                    {" "}
                    <span itemprop="name">Cumulative GPA Calculator</span>
                  </a>
                </li>
              </ul>
            </li>
            <li class="menu-desktop__item menu-desktop__item--dropdown">
              <a
                href="grade-calculator.html"
                class="menu-desktop__link"
                itemprop="url"
              >
                {" "}
                <span itemprop="name">
                  Grade Calculator<span>s</span>
                </span>
                <span class="menu-desktop__caret"></span>
              </a>
              <ul class="menu-desktop__sublist">
                <li class="menu-desktop__subitem">
                  <a
                    href="grade-calculator.html"
                    class="menu-desktop__link"
                    itemprop="url"
                  >
                    {" "}
                    <span itemprop="name">Grade Calculator -usha</span>
                  </a>
                </li>
                <li class="menu-desktop__subitem">
                  <a
                    href="final-grade-calculator.html"
                    class="menu-desktop__link"
                    itemprop="url"
                  >
                    {" "}
                    <span itemprop="name">Final Grade Calculator</span>
                  </a>
                </li>
                <li class="menu-desktop__subitem">
                  <a
                    href="weighted-grade-calculator.html"
                    class="menu-desktop__link"
                    itemprop="url"
                  >
                    {" "}
                    <span itemprop="name">Weighted Grade Calculator</span>
                  </a>
                </li>
              </ul>
            </li>
            <li class="menu-desktop__item">
              <a
                href="gpa-scale.html"
                class="menu-desktop__link"
                itemprop="url"
              >
                {" "}
                <span itemprop="name">GPA Scale</span>
              </a>
            </li>
            <li class="menu-desktop__item menu-desktop__item--dropdown">
              <span class="menu-desktop__link">
                <span itemprop="name">Guides</span>
                <span class="menu-desktop__caret"></span>
              </span>
              <ul class="menu-desktop__sublist">
                <li class="menu-desktop__subitem">
                  <a
                    href="how-to-calculate-gpa.html"
                    class="menu-desktop__link"
                    itemprop="url"
                  >
                    {" "}
                    <span itemprop="name">How to Calculate GPA</span>
                  </a>
                </li>
                <li class="menu-desktop__subitem">
                  <a
                    href="how-to-raise-gpa.html"
                    class="menu-desktop__link"
                    itemprop="url"
                  >
                    {" "}
                    <span itemprop="name">How to Raise Your GPA</span>
                  </a>
                </li>
                <li class="menu-desktop__subitem">
                  <a
                    href="how-to-calculate-grades.html"
                    class="menu-desktop__link"
                    itemprop="url"
                  >
                    {" "}
                    <span itemprop="name">How to Calculate Grades</span>
                  </a>
                </li>
              </ul>
            </li>
            <li class="menu-desktop__item">
              <a href="blog.html" class="menu-desktop__link" itemprop="url">
                {" "}
                <span itemprop="name">Blog</span>
              </a>
            </li>
            <li class="menu-desktop__item">
              <a href="faq.html" class="menu-desktop__link" itemprop="url">
                {" "}
                <span itemprop="name">FAQ</span>
              </a>
            </li>
            <li class="menu-desktop__item menu-desktop__item--social">
              <a
                href="https://twitter.com/share?url=https://gpacalculator.io/college-gpa-calculator/&amp;text=GPA%20Calculator%20%E2%80%94%20calculate%20your%20high%20school,%20college%20and%20cumulative%20GPA%20with%20this%20free%20and%20easy%20tool!%20Check%20your%20class%20grades,%20what%20you'll%20need%20to%20score%20on%20your%20final,%20and%20get%20tips%20to%20boost%20your%20GPA!"
                class="menu-desktop__icon"
                target="_blank"
                title="Share on Twitter"
                rel="noopener"
              ></a>
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=https://gpacalculator.io/college-gpa-calculator/"
                class="menu-desktop__icon"
                target="_blank"
                title="Share on Facebook"
                rel="noopener"
              ></a>
              <a
                href="https://plus.google.com/share?url=https://gpacalculator.io/college-gpa-calculator/"
                class="menu-desktop__icon"
                target="_blank"
                title="Share on Google+"
                rel="noopener"
              ></a>
            </li>
            <li class="menu-desktop__item menu-desktop__item--button">
              <button
                class="menu-desktop__button js-menu-button"
                aria-label="Open menu"
              >
                <span class="menu-desktop__button-line"></span>
                <span class="menu-desktop__button-line"></span>
              </button>
            </li>
          </ul>
        </nav>
        <nav class="menu-mobile">
          <ul class="menu-mobile__list">
            <li class="menu-mobile__item">
              <a href="index.html" class="menu-mobile__link is-active">
                College GPA Calculator
              </a>
            </li>
            <li class="menu-mobile__item">
              <a
                href="high-school-gpa-calculator.html"
                class="menu-mobile__link"
              >
                High School GPA Calculator
              </a>
            </li>
            <li class="menu-mobile__item">
              <a
                href="cumulative-gpa-calculator.html"
                class="menu-mobile__link"
              >
                Cumulative GPA Calculator
              </a>
            </li>
          </ul>
          <ul class="menu-mobile__list">
            <li class="menu-mobile__item">
              <a href="grade-calculator.html" class="menu-mobile__link">
                Grade Calculator
              </a>
            </li>
            <li class="menu-mobile__item">
              <a href="final-grade-calculator.html" class="menu-mobile__link">
                Final Grade Calculator
              </a>
            </li>
            <li class="menu-mobile__item">
              <a
                href="weighted-grade-calculator.html"
                class="menu-mobile__link"
              >
                Weighted Grade Calculator
              </a>
            </li>
          </ul>
          <ul class="menu-mobile__list">
            <li class="menu-mobile__item">
              <a href="how-to-calculate-gpa.html" class="menu-mobile__link">
                How to Calculate GPA
              </a>
            </li>
            <li class="menu-mobile__item">
              <a href="how-to-raise-gpa.html" class="menu-mobile__link">
                How to Raise Your GPA
              </a>
            </li>
            <li class="menu-mobile__item">
              <a href="how-to-calculate-grades.html" class="menu-mobile__link">
                How to Calculate Grades
              </a>
            </li>
          </ul>
          <ul class="menu-mobile__list">
            <li class="menu-mobile__item">
              <a href="gpa-scale.html" class="menu-mobile__link">
                GPA Scale
              </a>
            </li>
            <li class="menu-mobile__item">
              <a href="blog.html" class="menu-mobile__link">
                Blog
              </a>
            </li>
            <li class="menu-mobile__item">
              <a href="faq.html" class="menu-mobile__link">
                FAQ
              </a>
            </li>
            <li class="menu-mobile__item menu-mobile__item--social">
              <a
                href="https://twitter.com/share?url=https://gpacalculator.io/college-gpa-calculator/&amp;text=GPA%20Calculator%20%E2%80%94%20calculate%20your%20high%20school,%20college%20and%20cumulative%20GPA%20with%20this%20free%20and%20easy%20tool!%20Check%20your%20class%20grades,%20what%20you'll%20need%20to%20score%20on%20your%20final,%20and%20get%20tips%20to%20boost%20your%20GPA!"
                class="menu-mobile__icon"
                target="_blank"
                title="Share on Twitter"
                rel="noopener"
              ></a>
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=https://gpacalculator.io/college-gpa-calculator/"
                class="menu-mobile__icon"
                target="_blank"
                title="Share on Facebook"
                rel="noopener"
              ></a>
              <a
                href="https://plus.google.com/share?url=https://gpacalculator.io/college-gpa-calculator/"
                class="menu-mobile__icon"
                target="_blank"
                title="Share on Google+"
                rel="noopener"
              ></a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
