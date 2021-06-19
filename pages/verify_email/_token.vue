<template>
  <div id="verify_email">
    <!-- Loading... Please Wait -->
    <div
      v-if="
        email_verified == false &&
        view_token_has_an_error == false &&
        your_email_has_already_been_verified == false
      "
      class="w-100 d-block text-center mt-5 pt-5"
      style="color: #555"
      dir="rtl"
    >
      درحال تایید ایمیل لطفا منتظر بمانید...
    </div>
    <!-- Error -->
    <div
      v-if="
        email_verified == false &&
        view_token_has_an_error == true &&
        your_email_has_already_been_verified == false
      "
      class="w-100"
      style="padding-top: 80px"
    >
      <div class="center-flex" style="flex-direction: column">
        <div class="d-block" style="width: 70px; height: 70px">
          <svg
            style="color: #111"
            xmlns="http://www.w3.org/2000/svg"
            class="ionicon"
            viewBox="0 0 512 512"
          >
            <title>Warning</title>
            <path
              d="M85.57 446.25h340.86a32 32 0 0028.17-47.17L284.18 82.58c-12.09-22.44-44.27-22.44-56.36 0L57.4 399.08a32 32 0 0028.17 47.17z"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="32"
            />
            <path
              d="M250.26 195.39l5.74 122 5.73-121.95a5.74 5.74 0 00-5.79-6h0a5.74 5.74 0 00-5.68 5.95z"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="32"
            />
            <path d="M256 397.25a20 20 0 1120-20 20 20 0 01-20 20z" />
          </svg>
        </div>
        <span
          style="color: #666; font-weight: 600"
          class="d-block mt-3"
          dir="rtl"
        >
          تایید ایمیل <span style="color: #ff002b">امکان پذیر نیست</span>...
          <br />
          لینک وارد شده صحیح نمی باشد. یا منقضی شده است...
        </span>
      </div>
    </div>
    <!-- Your Email Has Already been Verified -->
    <div
      v-if="
        email_verified == false &&
        view_token_has_an_error == false &&
        your_email_has_already_been_verified == true
      "
      class="mt-5 pt-5 d-block w-100 text-center"
    >
      <span style="color: #666; font-weight: 600" class="d-block" dir="rtl">
        <span style="color: #f59e42">ایمیل شما در حال حاضر تایید شده</span> و
        نیازی به تایید دوباره آن نیست...
      </span>
    </div>
    <!-- Success -->
    <div
      v-if="
        email_verified == true &&
        view_token_has_an_error == false &&
        your_email_has_already_been_verified == false
      "
      class="d-block w-100 text-center mt-5 pt-5"
    >
      <div
        style="
          width: 200px;
          position: relative;
          left: 50%;
          transform: translate(-50%);
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
          viewBox="0 0 454.55 754.55"
          xml:space="preserve"
        >
          <desc>Created with Fabric.js 3.6.3</desc>
          <defs></defs>
          <g transform="matrix(1 0 0 1 242.93 380.72)">
            <g style="">
              <g transform="matrix(1 0 0 1 -44.38 -18.01)">
                <path
                  style="
                    stroke: none;
                    stroke-width: 1;
                    stroke-dasharray: none;
                    stroke-linecap: butt;
                    stroke-dashoffset: 0;
                    stroke-linejoin: miter;
                    stroke-miterlimit: 4;
                    fill: rgb(63, 61, 86);
                    fill-rule: nonzero;
                    opacity: 1;
                  "
                  transform=" translate(-447.79, -438)"
                  d="M 614 263.086 h -3.663 V 162.735 a 58.08 58.08 0 0 0 -58.08 -58.08 H 339.651 a 58.08 58.08 0 0 0 -58.08 58.08 V 713.265 a 58.08 58.08 0 0 0 58.08 58.08 H 552.257 a 58.08 58.08 0 0 0 58.08 -58.08 V 334.517 H 614 Z"
                  stroke-linecap="round"
                />
              </g>
              <g transform="matrix(1 0 0 1 -44.37 -18.01)">
                <path
                  style="
                    stroke: none;
                    stroke-width: 1;
                    stroke-dasharray: none;
                    stroke-linecap: butt;
                    stroke-dashoffset: 0;
                    stroke-linejoin: miter;
                    stroke-miterlimit: 4;
                    fill: rgb(255, 255, 255);
                    fill-rule: nonzero;
                    opacity: 1;
                  "
                  transform=" translate(-447.79, -438)"
                  d="M 597.975 163.141 V 712.86 A 43.376 43.376 0 0 1 554.6 756.235 H 340.974 A 43.376 43.376 0 0 1 297.6 712.861 V 163.141 a 43.376 43.376 0 0 1 43.375 -43.375 h 25.916 a 20.617 20.617 0 0 0 19.081 28.389 h 121.8 a 20.617 20.617 0 0 0 19.082 -28.389 H 554.6 a 43.376 43.376 0 0 1 43.375 43.375 Z"
                  stroke-linecap="round"
                />
              </g>
              <g transform="matrix(1 0 0 1 -98.12 79.46)">
                <path
                  style="
                    stroke: none;
                    stroke-width: 1;
                    stroke-dasharray: none;
                    stroke-linecap: butt;
                    stroke-dashoffset: 0;
                    stroke-linejoin: miter;
                    stroke-miterlimit: 4;
                    fill: rgb(230, 230, 230);
                    fill-rule: nonzero;
                    opacity: 1;
                  "
                  transform=" translate(-210.04, -430.81)"
                  d="M 212.286 474.693 h -4.493 l 1.5 -87.756 h 1.5 Z"
                  stroke-linecap="round"
                />
              </g>
              <g transform="matrix(1 0 0 1 -2.25 6.89)">
                <path
                  style="
                    stroke: none;
                    stroke-width: 1;
                    stroke-dasharray: none;
                    stroke-linecap: butt;
                    stroke-dashoffset: 0;
                    stroke-linejoin: miter;
                    stroke-miterlimit: 4;
                    fill: rgb(204, 204, 204);
                    fill-rule: nonzero;
                    opacity: 1;
                  "
                  transform=" translate(-392.54, -451.32)"
                  d="M 400.029 436.342 l 7.252 -11.207 a 168.035 168.035 0 0 0 -7.44 -17.416 l -4.689 3.788 l 3.713 -5.738 c -3.539 -6.965 -6.323 -11.354 -6.323 -11.354 S 378 417.332 373.139 441.6 l 9.306 14.382 l -10.3 -8.321 a 67.979 67.979 0 0 0 -0.565 8.524 c 0 28.739 9.386 52.036 20.964 52.036 s 20.964 -23.3 20.964 -52.036 c 0 -8.909 -2.016 -18.23 -4.8 -26.853 Z"
                  stroke-linecap="round"
                />
              </g>
              <g transform="matrix(1 0 0 1 81.55 43.73)">
                <path
                  style="
                    stroke: none;
                    stroke-width: 1;
                    stroke-dasharray: none;
                    stroke-linecap: butt;
                    stroke-dashoffset: 0;
                    stroke-linejoin: miter;
                    stroke-miterlimit: 4;
                    fill: rgb(204, 204, 204);
                    fill-rule: nonzero;
                    opacity: 1;
                  "
                  transform=" translate(-509.5, -451.32)"
                  d="M 516.988 436.342 l 7.252 -11.207 a 168.022 168.022 0 0 0 -7.44 -17.416 l -4.689 3.788 l 3.713 -5.738 c -3.539 -6.965 -6.323 -11.354 -6.323 -11.354 s -14.544 22.919 -19.4 47.185 L 499.4 455.98 l -10.3 -8.321 a 67.979 67.979 0 0 0 -0.565 8.524 c 0 28.739 9.386 52.036 20.964 52.036 s 20.964 -23.3 20.964 -52.036 c 0 -8.909 -2.016 -18.23 -4.8 -26.853 Z"
                  stroke-linecap="round"
                />
              </g>
              <g transform="matrix(1 0 0 1 -1.64 88.94)">
                <path
                  style="
                    stroke: none;
                    stroke-width: 1;
                    stroke-dasharray: none;
                    stroke-linecap: butt;
                    stroke-dashoffset: 0;
                    stroke-linejoin: miter;
                    stroke-miterlimit: 4;
                    fill: rgb(230, 230, 230);
                    fill-rule: nonzero;
                    opacity: 1;
                  "
                  transform=" translate(-327, -430.81)"
                  d="M 329.245 474.693 h -4.493 l 1.5 -87.756 h 1.5 Z"
                  stroke-linecap="round"
                />
              </g>
              <g transform="matrix(1 0 0 1 -81.92 -219.36)">
                <circle
                  style="
                    stroke: none;
                    stroke-width: 1;
                    stroke-dasharray: none;
                    stroke-linecap: butt;
                    stroke-dashoffset: 0;
                    stroke-linejoin: miter;
                    stroke-miterlimit: 4;
                    fill: rgb(230, 230, 230);
                    fill-rule: nonzero;
                    opacity: 1;
                  "
                  cx="0"
                  cy="0"
                  r="41.28"
                />
              </g>
              <g transform="matrix(1 0 0 1 46.94 32.72)">
                <path
                  style="
                    stroke: none;
                    stroke-width: 1;
                    stroke-dasharray: none;
                    stroke-linecap: butt;
                    stroke-dashoffset: 0;
                    stroke-linejoin: miter;
                    stroke-miterlimit: 4;
                    fill: rgb(230, 230, 230);
                    fill-rule: nonzero;
                    opacity: 1;
                  "
                  transform=" translate(-261.41, -371.44)"
                  d="M 266.043 461.916 H 256.78 l 3.088 -180.945 h 3.087 Z"
                  stroke-linecap="round"
                />
              </g>
              <g transform="matrix(1 0 0 1 47.53 -141.85)">
                <path
                  style="
                    stroke: none;
                    stroke-width: 1;
                    stroke-dasharray: none;
                    stroke-linecap: butt;
                    stroke-dashoffset: 0;
                    stroke-linejoin: miter;
                    stroke-miterlimit: 4;
                    fill: rgb(204, 204, 204);
                    fill-rule: nonzero;
                    opacity: 1;
                  "
                  transform=" translate(-442.32, -302.58)"
                  d="M 457.762 271.706 L 472.715 248.6 a 346.45 346.45 0 0 0 -15.341 -35.911 l -9.669 7.809 l 7.656 -11.832 c -7.3 -14.362 -13.037 -23.411 -13.037 -23.411 s -29.988 47.256 -40.007 97.29 L 421.5 312.2 l -21.242 -17.157 a 140.16 140.16 0 0 0 -1.165 17.576 c 0 59.257 19.353 107.294 43.226 107.294 s 43.226 -48.037 43.226 -107.294 c 0 -18.37 -4.156 -37.589 -9.889 -55.368 Z"
                  stroke-linecap="round"
                />
              </g>
              <g transform="matrix(1 0 0 1 -44.37 189.34)">
                <path
                  style="
                    stroke: none;
                    stroke-width: 1;
                    stroke-dasharray: none;
                    stroke-linecap: butt;
                    stroke-dashoffset: 0;
                    stroke-linejoin: miter;
                    stroke-miterlimit: 4;
                    fill: rgb(230, 230, 230);
                    fill-rule: nonzero;
                    opacity: 1;
                  "
                  transform=" translate(-441.55, -645.35)"
                  d="M 591.743 592.653 V 715.661 c 0 24.949 -19.419 45.174 -43.375 45.175 H 334.742 c -23.955 0 -43.375 -20.225 -43.376 -45.175 V 604.645 c 37.038 -45.282 90.589 -72.345 147.662 -74.624 S 551.485 550.456 591.743 592.653 Z"
                  stroke-linecap="round"
                />
              </g>
              <g transform="matrix(1 0 0 1 -44.14 194.77)">
                <circle
                  style="
                    stroke: none;
                    stroke-width: 1;
                    stroke-dasharray: none;
                    stroke-linecap: butt;
                    stroke-dashoffset: 0;
                    stroke-linejoin: miter;
                    stroke-miterlimit: 4;
                    fill: rgb(26, 92, 255);
                    fill-rule: nonzero;
                    opacity: 0.2;
                  "
                  cx="0"
                  cy="0"
                  r="63.208"
                />
              </g>
              <g transform="matrix(1 0 0 1 -44.14 194.78)">
                <circle
                  style="
                    stroke: none;
                    stroke-width: 1;
                    stroke-dasharray: none;
                    stroke-linecap: butt;
                    stroke-dashoffset: 0;
                    stroke-linejoin: miter;
                    stroke-miterlimit: 4;
                    fill: rgb(26, 92, 255);
                    fill-rule: nonzero;
                    opacity: 1;
                  "
                  cx="0"
                  cy="0"
                  r="50.895"
                />
              </g>
              <g transform="matrix(1 0 0 1 -39.41 191.26)">
                <path
                  style="
                    stroke: none;
                    stroke-width: 1;
                    stroke-dasharray: none;
                    stroke-linecap: butt;
                    stroke-dashoffset: 0;
                    stroke-linejoin: miter;
                    stroke-miterlimit: 4;
                    fill: rgb(255, 255, 255);
                    fill-rule: nonzero;
                    opacity: 1;
                  "
                  transform=" translate(-268.75, -542.62)"
                  d="M 258.084 567.89 l -17.937 -23.061 l 10.431 -8.113 l 8.492 10.919 l 28.689 -30.284 l 9.594 9.088 Z"
                  stroke-linecap="round"
                />
              </g>
              <g transform="matrix(1 0 0 1 98.9 200.62)">
                <g style="">
                  <g transform="matrix(1 0 0 1 2.44 -88.54)">
                    <circle
                      style="
                        stroke: none;
                        stroke-width: 1;
                        stroke-dasharray: none;
                        stroke-linecap: butt;
                        stroke-dashoffset: 0;
                        stroke-linejoin: miter;
                        stroke-miterlimit: 4;
                        fill: rgb(47, 46, 65);
                        fill-rule: nonzero;
                        opacity: 1;
                      "
                      cx="0"
                      cy="0"
                      r="33"
                    />
                  </g>
                  <g transform="matrix(1 0 0 1 40.82 97.81)">
                    <path
                      style="
                        stroke: none;
                        stroke-width: 1;
                        stroke-dasharray: none;
                        stroke-linecap: butt;
                        stroke-dashoffset: 0;
                        stroke-linejoin: miter;
                        stroke-miterlimit: 4;
                        fill: rgb(255, 184, 184);
                        fill-rule: nonzero;
                        opacity: 1;
                      "
                      transform=" translate(-578.87, -384.32)"
                      d="M 553.859 383.226 l 2.542 11.993 l 47.47 -4.1 l -3.751 -17.7 Z"
                      stroke-linecap="round"
                    />
                  </g>
                  <g transform="matrix(-0.21 -0.98 0.98 -0.21 15.4 113.81)">
                    <path
                      style="
                        stroke: none;
                        stroke-width: 1;
                        stroke-dasharray: none;
                        stroke-linecap: butt;
                        stroke-dashoffset: 0;
                        stroke-linejoin: miter;
                        stroke-miterlimit: 4;
                        fill: rgb(47, 46, 65);
                        fill-rule: nonzero;
                        opacity: 1;
                      "
                      transform=" translate(-808.45, -625.94)"
                      d="M 789.188 618.5 h 38.531 v 14.887 H 804.075 A 14.887 14.887 0 0 1 789.188 618.5 Z"
                      stroke-linecap="round"
                    />
                  </g>
                  <g transform="matrix(1 0 0 1 -39.15 91.29)">
                    <path
                      style="
                        stroke: none;
                        stroke-width: 1;
                        stroke-dasharray: none;
                        stroke-linecap: butt;
                        stroke-dashoffset: 0;
                        stroke-linejoin: miter;
                        stroke-miterlimit: 4;
                        fill: rgb(255, 184, 184);
                        fill-rule: nonzero;
                        opacity: 1;
                      "
                      transform=" translate(-498.9, -377.8)"
                      d="M 524.12 382.586 l -5.343 11.035 l -45.1 -15.357 l 7.886 -16.285 Z"
                      stroke-linecap="round"
                    />
                  </g>
                  <g transform="matrix(0.44 -0.9 0.9 0.44 -17.63 112.78)">
                    <path
                      style="
                        stroke: none;
                        stroke-width: 1;
                        stroke-dasharray: none;
                        stroke-linecap: butt;
                        stroke-dashoffset: 0;
                        stroke-linejoin: miter;
                        stroke-miterlimit: 4;
                        fill: rgb(47, 46, 65);
                        fill-rule: nonzero;
                        opacity: 1;
                      "
                      transform=" translate(-775.42, -624.9)"
                      d="M 771.037 617.456 h 23.644 v 14.887 H 756.151 A 14.887 14.887 0 0 1 771.037 617.456 Z"
                      stroke-linecap="round"
                    />
                  </g>
                  <g transform="matrix(1 0 0 1 -63.7 27.7)">
                    <path
                      style="
                        stroke: none;
                        stroke-width: 1;
                        stroke-dasharray: none;
                        stroke-linecap: butt;
                        stroke-dashoffset: 0;
                        stroke-linejoin: miter;
                        stroke-miterlimit: 4;
                        fill: rgb(255, 184, 184);
                        fill-rule: nonzero;
                        opacity: 1;
                      "
                      transform=" translate(-729.35, -539.83)"
                      d="M 690.259 586.414 a 10.743 10.743 0 0 0 12.709 -10.48 l 74.374 -68.571 l -18.47 -14.305 L 691.535 565 a 10.8 10.8 0 0 0 -1.275 21.413 Z"
                      stroke-linecap="round"
                    />
                  </g>
                  <g transform="matrix(1 0 0 1 -1.71 -78.61)">
                    <circle
                      style="
                        stroke: none;
                        stroke-width: 1;
                        stroke-dasharray: none;
                        stroke-linecap: butt;
                        stroke-dashoffset: 0;
                        stroke-linejoin: miter;
                        stroke-miterlimit: 4;
                        fill: rgb(255, 184, 184);
                        fill-rule: nonzero;
                        opacity: 1;
                      "
                      cx="0"
                      cy="0"
                      r="24.561"
                    />
                  </g>
                  <g transform="matrix(1 0 0 1 -2.73 3.96)">
                    <path
                      style="
                        stroke: none;
                        stroke-width: 1;
                        stroke-dasharray: none;
                        stroke-linecap: butt;
                        stroke-dashoffset: 0;
                        stroke-linejoin: miter;
                        stroke-miterlimit: 4;
                        fill: rgb(26, 92, 255);
                        fill-rule: nonzero;
                        opacity: 1;
                      "
                      transform=" translate(-790.32, -516.09)"
                      d="M 813.386 577.893 c -17.229 0 -37.978 -3.628 -50.779 -18.477 l -0.288 -0.334 l 0.3 -0.328 c 0.1 -0.107 9.514 -10.869 0.111 -30.061 L 749.8 532.67 l -12.87 -16.989 l 7.13 -21.389 l 29.177 -23.5 A 26.751 26.751 0 0 1 787.846 465 a 80.211 80.211 0 0 0 27.785 -7.913 a 27.906 27.906 0 0 1 12.8 -2.8 l 0.574 0.016 a 9.95 9.95 0 0 1 9.641 10.708 c -1.979 25.63 -5.472 87.543 4.792 108.861 l 0.265 0.551 l -0.592 0.15 a 136.109 136.109 0 0 1 -29.723 3.319 Z"
                      stroke-linecap="round"
                    />
                  </g>
                  <g transform="matrix(1 0 0 1 -4.87 98.4)">
                    <path
                      style="
                        stroke: none;
                        stroke-width: 1;
                        stroke-dasharray: none;
                        stroke-linecap: butt;
                        stroke-dashoffset: 0;
                        stroke-linejoin: miter;
                        stroke-miterlimit: 4;
                        fill: rgb(47, 46, 65);
                        fill-rule: nonzero;
                        opacity: 1;
                      "
                      transform=" translate(-788.18, -610.53)"
                      d="M 765.986 559.09 s -65 -6 -72 13 s 1 28 13 32 s 41 9 41 9 l 13 -16 l 34 2 s 37.885 21.973 48.36 45.474 A 30.762 30.762 0 0 0 869.123 662.8 c 8.4 0.584 15.863 -2.587 15.863 -15.712 c 0 -30 -42 -73 -42 -73 Z"
                      stroke-linecap="round"
                    />
                  </g>
                  <g transform="matrix(1 0 0 1 -54.56 79.98)">
                    <path
                      style="
                        stroke: none;
                        stroke-width: 1;
                        stroke-dasharray: none;
                        stroke-linecap: butt;
                        stroke-dashoffset: 0;
                        stroke-linejoin: miter;
                        stroke-miterlimit: 4;
                        fill: rgb(47, 46, 65);
                        fill-rule: nonzero;
                        opacity: 1;
                      "
                      transform=" translate(-738.49, -592.12)"
                      d="M 716.486 588.59 s 17 -5 44 8"
                      stroke-linecap="round"
                    />
                  </g>
                  <g transform="matrix(1 0 0 1 -4.34 -96.06)">
                    <path
                      style="
                        stroke: none;
                        stroke-width: 1;
                        stroke-dasharray: none;
                        stroke-linecap: butt;
                        stroke-dashoffset: 0;
                        stroke-linejoin: miter;
                        stroke-miterlimit: 4;
                        fill: rgb(47, 46, 65);
                        fill-rule: nonzero;
                        opacity: 1;
                      "
                      transform=" translate(-788.71, -416.07)"
                      d="M 766.843 417.855 a 73.042 73.042 0 0 0 31.6 10.412 l -3.331 -3.991 a 24.476 24.476 0 0 0 7.561 1.5 a 8.281 8.281 0 0 0 6.75 -3.159 a 7.7 7.7 0 0 0 0.516 -7.115 a 14.589 14.589 0 0 0 -4.589 -5.739 a 27.323 27.323 0 0 0 -25.431 -4.545 a 16.33 16.33 0 0 0 -7.6 4.872 a 9.236 9.236 0 0 0 -1.863 8.561"
                      stroke-linecap="round"
                    />
                  </g>
                  <g transform="matrix(1 0 0 1 56.98 -105.82)">
                    <path
                      style="
                        stroke: none;
                        stroke-width: 1;
                        stroke-dasharray: none;
                        stroke-linecap: butt;
                        stroke-dashoffset: 0;
                        stroke-linejoin: miter;
                        stroke-miterlimit: 4;
                        fill: rgb(47, 46, 65);
                        fill-rule: nonzero;
                        opacity: 1;
                      "
                      transform=" translate(-850.03, -406.31)"
                      d="M 795.309 398.224 A 75.485 75.485 0 0 1 814.446 371.7 c 5.292 -4.7 11.473 -8.743 18.446 -9.963 s 14.833 0.87 19.111 6.511 c 3.5 4.613 4.152 10.793 3.767 16.569 s -1.676 11.5 -1.553 17.284 a 35.468 35.468 0 0 0 50.527 31.351 c -6.022 3.329 -10.714 8.6 -16.3 12.608 s -12.963 6.76 -19.312 4.11 c -6.718 -2.8 -9.8 -10.419 -12.206 -17.29 l -10.732 -30.64 c -1.824 -5.209 -3.739 -10.572 -7.462 -14.645 s -9.765 -6.557 -14.889 -4.509 c -3.884 1.552 -6.413 5.258 -8.63 8.8 s -4.557 7.32 -8.3 9.179 s -9.3 0.715 -10.523 -3.285"
                      stroke-linecap="round"
                    />
                  </g>
                  <g transform="matrix(1 0 0 1 32.95 27.24)">
                    <path
                      style="
                        stroke: none;
                        stroke-width: 1;
                        stroke-dasharray: none;
                        stroke-linecap: butt;
                        stroke-dashoffset: 0;
                        stroke-linejoin: miter;
                        stroke-miterlimit: 4;
                        fill: rgb(255, 184, 184);
                        fill-rule: nonzero;
                        opacity: 1;
                      "
                      transform=" translate(-825.99, -539.37)"
                      d="M 803.736 577.979 a 11.57 11.57 0 0 1 -1.268 -0.07 a 11 11 0 0 1 1.251 -21.931 a 10.626 10.626 0 0 1 1.466 0.109 l 33.578 -35.745 l -3.505 -11.685 l 17.6 -7.892 l 4.934 12.06 A 20.49 20.49 0 0 1 851.62 536.5 l -36.961 29.4 a 10.238 10.238 0 0 1 0.06 1.079 a 11.018 11.018 0 0 1 -3.664 8.2 A 10.872 10.872 0 0 1 803.736 577.979 Z"
                      stroke-linecap="round"
                    />
                  </g>
                  <g transform="matrix(1 0 0 1 51.94 -19.95)">
                    <path
                      style="
                        stroke: none;
                        stroke-width: 1;
                        stroke-dasharray: none;
                        stroke-linecap: butt;
                        stroke-dashoffset: 0;
                        stroke-linejoin: miter;
                        stroke-miterlimit: 4;
                        fill: rgb(26, 92, 255);
                        fill-rule: nonzero;
                        opacity: 1;
                      "
                      transform=" translate(-844.99, -492.18)"
                      d="M 829.986 459.09 h 0 a 9.453 9.453 0 0 1 12.628 5.156 l 17.372 43.844 l -27 18 Z"
                      stroke-linecap="round"
                    />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>
      <span style="font-weight: 600" class="d-block" dir="rtl">
        <span style="color: #32a852">ایمیل شما با موفقیت تایید شد!</span>
      </span>
    </div>
  </div>
</template>

<script>
import configs from '../../assets/js/configs'
import axios from 'axios'

export default {
  data() {
    return {
      verify_email_token: this.$route.params.token,
      view_token_has_an_error: false,
      your_email_has_already_been_verified: false,
      email_verified: false,
    }
  },
  mounted() {
    if (
      this.$data.verify_email_token == undefined ||
      String(this.$data.verify_email_token).trim() == '' ||
      this.$route.query == undefined ||
      this.$route.query.email == undefined ||
      String(this.$route.query.email).trim() == ''
    ) {
      return this.$set(this.$data, 'view_token_has_an_error', true)
    }
    axios
      .post(configs.api_server_address + '/users/verify/email', {
        email: this.$route.query.email,
        verification_token: this.$route.params.token,
      })
      .then((response) => {
        switch (response.data.code) {
          case 200:
            this.$set(this.$data, 'email_verified', true)
            this.$set(this.$data, 'view_token_has_an_error', false)
            this.$set(this.$data, 'your_email_has_already_been_verified', false)
            break
          case 401:
            this.$set(this.$data, 'view_token_has_an_error', true)
            this.$set(this.$data, 'your_email_has_already_been_verified', false)
            this.$set(this.$data, 'email_verified', false)
            break
          case 409:
            this.$set(this.$data, 'view_token_has_an_error', false)
            this.$set(this.$data, 'your_email_has_already_been_verified', true)
            this.$set(this.$data, 'email_verified', false)
            break
          case 404:
            this.$set(this.$data, 'view_token_has_an_error', true)
            this.$set(this.$data, 'your_email_has_already_been_verified', false)
            this.$set(this.$data, 'email_verified', false)
            break
        }
      })
  },
}
</script>
