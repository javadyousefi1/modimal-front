import { useState } from "react";

// framer-motion
import { motion } from "framer-motion";
import MenuDropDown from "./MenuDropDown";
import Button from "../elements/Button";
import DropDown from "@components/shared/DropDown";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../store/store";

const style = {
  button:
    "w-36 h-10 border-[1px] border-primary-600 text-[14px] text-primary-600",
};

const myShoppingIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 6H16C16 3.79 14.21 2 12 2C9.79 2 8 3.79 8 6H6C4.9 6 4 6.9 4 8V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8C20 6.9 19.1 6 18 6ZM12 4C13.1 4 14 4.9 14 6H10C10 4.9 10.9 4 12 4ZM18 20H6V8H8V10C8 10.55 8.45 11 9 11C9.55 11 10 10.55 10 10V8H14V10C14 10.55 14.45 11 15 11C15.55 11 16 10.55 16 10V8H18V20Z"
      fill="#202020"
    />
  </svg>
);
const favoriteIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.2232 19.1157L11.2217 19.1144C8.62662 16.7612 6.55384 14.879 5.1178 13.1233C3.69324 11.3817 3 9.88671 3 8.3252C3 5.79748 4.97228 3.8252 7.5 3.8252C8.93721 3.8252 10.3322 4.49913 11.2386 5.56353L12 6.4576L12.7614 5.56353C13.6678 4.49913 15.0628 3.8252 16.5 3.8252C19.0277 3.8252 21 5.79748 21 8.3252C21 9.88673 20.3068 11.3817 18.882 13.1248C17.4459 14.8818 15.3734 16.7661 12.7786 19.1241C12.7782 19.1245 12.7778 19.1248 12.7775 19.1251L12.0026 19.8252L11.2232 19.1157Z"
      fill="white"
      stroke="#0C0C0C"
      strokeWidth="2"
    />
  </svg>
);

const modimalIcon = (
  <svg
    width="139"
    height="40"
    viewBox="0 0 139 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M27.4615 12.36C28.2055 12.36 28.8615 12.516 29.4295 12.828C29.9975 13.132 30.4415 13.604 30.7615 14.244C31.0895 14.884 31.2535 15.708 31.2535 16.716V22.5H27.6655V17.268C27.6655 16.58 27.5615 16.024 27.3535 15.6C27.1455 15.176 26.7335 14.964 26.1175 14.964C25.7495 14.964 25.4255 15.06 25.1455 15.252C24.8655 15.444 24.6495 15.712 24.4975 16.056C24.3455 16.392 24.2695 16.796 24.2695 17.268V22.5H20.9215V17.268C20.9215 16.58 20.8055 16.024 20.5735 15.6C20.3495 15.176 19.9495 14.964 19.3735 14.964C19.0055 14.964 18.6815 15.06 18.4015 15.252C18.1215 15.436 17.9055 15.7 17.7535 16.044C17.6095 16.38 17.5375 16.788 17.5375 17.268V22.5H13.9135V12.648H17.5375V14.052C17.6335 13.804 17.8415 13.552 18.1615 13.296C18.4895 13.032 18.8935 12.812 19.3735 12.636C19.8535 12.452 20.3615 12.36 20.8975 12.36C21.4815 12.36 21.9695 12.448 22.3615 12.624C22.7535 12.792 23.0735 13.02 23.3215 13.308C23.5775 13.596 23.7815 13.908 23.9335 14.244C24.0455 13.956 24.2655 13.668 24.5935 13.38C24.9295 13.084 25.3455 12.84 25.8415 12.648C26.3455 12.456 26.8855 12.36 27.4615 12.36ZM40.7826 22.788C39.7026 22.788 38.7426 22.568 37.9026 22.128C37.0706 21.68 36.4146 21.068 35.9346 20.292C35.4626 19.508 35.2266 18.612 35.2266 17.604C35.2266 16.596 35.4626 15.7 35.9346 14.916C36.4146 14.124 37.0706 13.5 37.9026 13.044C38.7426 12.588 39.7026 12.36 40.7826 12.36C41.8626 12.36 42.8146 12.588 43.6386 13.044C44.4626 13.5 45.1066 14.124 45.5706 14.916C46.0346 15.7 46.2666 16.596 46.2666 17.604C46.2666 18.612 46.0346 19.508 45.5706 20.292C45.1066 21.068 44.4626 21.68 43.6386 22.128C42.8146 22.568 41.8626 22.788 40.7826 22.788ZM40.7826 19.788C41.1986 19.788 41.5586 19.696 41.8626 19.512C42.1666 19.328 42.4026 19.068 42.5706 18.732C42.7386 18.396 42.8226 18.016 42.8226 17.592C42.8226 17.16 42.7386 16.776 42.5706 16.44C42.4026 16.104 42.1666 15.84 41.8626 15.648C41.5586 15.456 41.1986 15.36 40.7826 15.36C40.3666 15.36 40.0026 15.456 39.6906 15.648C39.3866 15.84 39.1466 16.104 38.9706 16.44C38.8026 16.776 38.7186 17.16 38.7186 17.592C38.7186 18.016 38.8026 18.396 38.9706 18.732C39.1466 19.068 39.3866 19.328 39.6906 19.512C40.0026 19.696 40.3666 19.788 40.7826 19.788ZM54.789 22.788C53.837 22.788 53.009 22.556 52.305 22.092C51.601 21.62 51.053 20.992 50.661 20.208C50.277 19.416 50.085 18.54 50.085 17.58C50.085 16.62 50.277 15.748 50.661 14.964C51.053 14.172 51.601 13.54 52.305 13.068C53.009 12.596 53.837 12.36 54.789 12.36C55.421 12.36 55.981 12.46 56.469 12.66C56.957 12.852 57.353 13.084 57.657 13.356C57.961 13.62 58.145 13.864 58.209 14.088V5.988H61.857V22.5H58.245V20.904C58.093 21.2 57.845 21.496 57.501 21.792C57.157 22.08 56.753 22.316 56.289 22.5C55.825 22.692 55.325 22.788 54.789 22.788ZM55.905 19.92C56.345 19.92 56.737 19.82 57.081 19.62C57.433 19.42 57.709 19.144 57.909 18.792C58.109 18.432 58.209 18.028 58.209 17.58C58.209 17.132 58.109 16.732 57.909 16.38C57.709 16.02 57.433 15.74 57.081 15.54C56.737 15.332 56.345 15.228 55.905 15.228C55.481 15.228 55.097 15.332 54.753 15.54C54.417 15.74 54.149 16.02 53.949 16.38C53.757 16.732 53.661 17.132 53.661 17.58C53.661 18.028 53.757 18.432 53.949 18.792C54.149 19.144 54.417 19.42 54.753 19.62C55.097 19.82 55.481 19.92 55.905 19.92ZM66.4913 22.5V12.648H70.1393V22.5H66.4913ZM68.3633 10.62C67.7873 10.62 67.2993 10.42 66.8993 10.02C66.4993 9.612 66.2993 9.128 66.2993 8.568C66.2993 8.008 66.4993 7.524 66.8993 7.116C67.3073 6.7 67.7953 6.492 68.3633 6.492C68.7393 6.492 69.0833 6.588 69.3953 6.78C69.7073 6.964 69.9593 7.212 70.1513 7.524C70.3433 7.836 70.4393 8.184 70.4393 8.568C70.4393 9.128 70.2353 9.612 69.8273 10.02C69.4193 10.42 68.9313 10.62 68.3633 10.62ZM88.6005 12.36C89.3445 12.36 90.0005 12.516 90.5685 12.828C91.1365 13.132 91.5805 13.604 91.9005 14.244C92.2285 14.884 92.3925 15.708 92.3925 16.716V22.5H88.8045V17.268C88.8045 16.58 88.7005 16.024 88.4925 15.6C88.2845 15.176 87.8725 14.964 87.2565 14.964C86.8885 14.964 86.5645 15.06 86.2845 15.252C86.0045 15.444 85.7885 15.712 85.6365 16.056C85.4845 16.392 85.4085 16.796 85.4085 17.268V22.5H82.0605V17.268C82.0605 16.58 81.9445 16.024 81.7125 15.6C81.4885 15.176 81.0885 14.964 80.5125 14.964C80.1445 14.964 79.8205 15.06 79.5405 15.252C79.2605 15.436 79.0445 15.7 78.8925 16.044C78.7485 16.38 78.6765 16.788 78.6765 17.268V22.5H75.0525V12.648H78.6765V14.052C78.7725 13.804 78.9805 13.552 79.3005 13.296C79.6285 13.032 80.0325 12.812 80.5125 12.636C80.9925 12.452 81.5005 12.36 82.0365 12.36C82.6205 12.36 83.1085 12.448 83.5005 12.624C83.8925 12.792 84.2125 13.02 84.4605 13.308C84.7165 13.596 84.9205 13.908 85.0725 14.244C85.1845 13.956 85.4045 13.668 85.7325 13.38C86.0685 13.084 86.4845 12.84 86.9805 12.648C87.4845 12.456 88.0245 12.36 88.6005 12.36ZM104.55 22.5V20.904C104.478 21.064 104.294 21.296 103.998 21.6C103.71 21.904 103.326 22.18 102.846 22.428C102.366 22.668 101.806 22.788 101.166 22.788C100.206 22.788 99.3657 22.556 98.6457 22.092C97.9257 21.62 97.3657 20.992 96.9657 20.208C96.5657 19.416 96.3657 18.54 96.3657 17.58C96.3657 16.62 96.5657 15.748 96.9657 14.964C97.3657 14.172 97.9257 13.54 98.6457 13.068C99.3657 12.596 100.206 12.36 101.166 12.36C101.782 12.36 102.322 12.46 102.786 12.66C103.25 12.852 103.626 13.084 103.914 13.356C104.202 13.62 104.402 13.864 104.514 14.088V12.648H108.138V22.5H104.55ZM99.9417 17.58C99.9417 18.028 100.046 18.432 100.254 18.792C100.462 19.144 100.738 19.42 101.082 19.62C101.434 19.82 101.822 19.92 102.246 19.92C102.686 19.92 103.074 19.82 103.41 19.62C103.746 19.42 104.01 19.144 104.202 18.792C104.402 18.432 104.502 18.028 104.502 17.58C104.502 17.132 104.402 16.732 104.202 16.38C104.01 16.02 103.746 15.74 103.41 15.54C103.074 15.332 102.686 15.228 102.246 15.228C101.822 15.228 101.434 15.332 101.082 15.54C100.738 15.74 100.462 16.02 100.254 16.38C100.046 16.732 99.9417 17.132 99.9417 17.58ZM116.501 22.5H112.841V5.988H116.501V22.5Z"
      fill="#404040"
    />
    <mask id="path-2-inside-1_4757_9125" fill="white">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M124.062 22.5C126.134 22.5 127.812 20.8211 127.812 18.75C127.812 16.6789 126.134 15 124.062 15C121.991 15 120.312 16.6789 120.312 18.75C120.312 20.4115 121.393 21.8207 122.89 22.313C122.906 22.2523 122.924 22.1924 122.943 22.1334C122.507 21.6265 122.506 21.1335 122.506 20.8854L122.506 20.8852C122.508 20.2152 122.71 19.6001 123.224 19.1544C123.735 18.7108 124.541 18.4479 125.725 18.4479H126.77C126.822 18.4479 126.864 18.4899 126.864 18.5417V19.0625V19.0679L126.864 19.0679C126.798 20.2156 126.482 21.0224 125.963 21.5421C125.442 22.0626 124.732 22.2812 123.906 22.2812H123.121C123.112 22.2812 123.103 22.28 123.095 22.2775C123.086 22.3071 123.077 22.337 123.069 22.3671C123.386 22.4537 123.719 22.5 124.062 22.5ZM123.463 21.4745C123.337 21.6636 123.235 21.8689 123.156 22.0893L123.16 22.0937H123.906C124.699 22.0937 125.356 21.8843 125.83 21.4095C126.305 20.9342 126.612 20.1793 126.677 19.0598V18.6354H125.725C124.565 18.6354 123.811 18.8934 123.346 19.2961C122.885 19.6968 122.696 20.2535 122.694 20.8855V20.8861C122.694 21.1061 122.694 21.5033 123.017 21.9272C123.095 21.7305 123.191 21.5446 123.307 21.3705C123.611 20.9149 124.048 20.5458 124.649 20.2789C124.696 20.2579 124.752 20.2792 124.773 20.3265C124.794 20.3738 124.772 20.4292 124.725 20.4503C124.154 20.7042 123.745 21.0513 123.463 21.4745Z"
      />
    </mask>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M124.062 22.5C126.134 22.5 127.812 20.8211 127.812 18.75C127.812 16.6789 126.134 15 124.062 15C121.991 15 120.312 16.6789 120.312 18.75C120.312 20.4115 121.393 21.8207 122.89 22.313C122.906 22.2523 122.924 22.1924 122.943 22.1334C122.507 21.6265 122.506 21.1335 122.506 20.8854L122.506 20.8852C122.508 20.2152 122.71 19.6001 123.224 19.1544C123.735 18.7108 124.541 18.4479 125.725 18.4479H126.77C126.822 18.4479 126.864 18.4899 126.864 18.5417V19.0625V19.0679L126.864 19.0679C126.798 20.2156 126.482 21.0224 125.963 21.5421C125.442 22.0626 124.732 22.2812 123.906 22.2812H123.121C123.112 22.2812 123.103 22.28 123.095 22.2775C123.086 22.3071 123.077 22.337 123.069 22.3671C123.386 22.4537 123.719 22.5 124.062 22.5ZM123.463 21.4745C123.337 21.6636 123.235 21.8689 123.156 22.0893L123.16 22.0937H123.906C124.699 22.0937 125.356 21.8843 125.83 21.4095C126.305 20.9342 126.612 20.1793 126.677 19.0598V18.6354H125.725C124.565 18.6354 123.811 18.8934 123.346 19.2961C122.885 19.6968 122.696 20.2535 122.694 20.8855V20.8861C122.694 21.1061 122.694 21.5033 123.017 21.9272C123.095 21.7305 123.191 21.5446 123.307 21.3705C123.611 20.9149 124.048 20.5458 124.649 20.2789C124.696 20.2579 124.752 20.2792 124.773 20.3265C124.794 20.3738 124.772 20.4292 124.725 20.4503C124.154 20.7042 123.745 21.0513 123.463 21.4745Z"
      fill="#748C70"
    />
    <path
      d="M122.89 22.313L122.831 22.4911L123.02 22.5531L123.071 22.3615L122.89 22.313ZM122.943 22.1334L123.121 22.1911L123.154 22.091L123.085 22.0112L122.943 22.1334ZM122.506 20.8854L122.319 20.8851V20.8854H122.506ZM122.506 20.8852L122.319 20.8846L122.319 20.8848L122.506 20.8852ZM123.224 19.1544L123.346 19.2961L123.224 19.1544ZM126.864 19.0679L126.854 19.2551L127.052 19.2661V19.0679H126.864ZM126.864 19.0679L126.874 18.8807L126.687 18.8702L126.677 19.0571L126.864 19.0679ZM125.963 21.5421L126.095 21.6746L125.963 21.5421ZM123.095 22.2775L123.147 22.0975L122.968 22.045L122.915 22.2246L123.095 22.2775ZM123.069 22.3671L122.888 22.319L122.84 22.4988L123.02 22.548L123.069 22.3671ZM123.156 22.0893L122.98 22.0258L122.94 22.1353L123.021 22.2193L123.156 22.0893ZM123.463 21.4745L123.619 21.5785L123.463 21.4745ZM123.16 22.0937L123.025 22.2237L123.08 22.2812H123.16V22.0937ZM125.83 21.4095L125.698 21.2769L125.83 21.4095ZM126.677 19.0598L126.864 19.0706V19.0598H126.677ZM126.677 18.6354H126.864V18.4479H126.677V18.6354ZM123.346 19.2961L123.469 19.4377L123.346 19.2961ZM122.694 20.8855L122.506 20.885V20.8855H122.694ZM122.694 20.8861L122.881 20.8861V20.8861H122.694ZM123.017 21.9272L122.868 22.0409L123.069 22.3046L123.191 21.9963L123.017 21.9272ZM123.307 21.3705L123.463 21.4745L123.307 21.3705ZM124.649 20.2789L124.725 20.4503H124.725L124.649 20.2789ZM124.725 20.4503L124.801 20.6216L124.725 20.4503ZM127.625 18.75C127.625 20.7175 126.03 22.3125 124.062 22.3125V22.6875C126.237 22.6875 128 20.9246 128 18.75H127.625ZM124.062 15.1875C126.03 15.1875 127.625 16.7825 127.625 18.75H128C128 16.5754 126.237 14.8125 124.062 14.8125V15.1875ZM120.5 18.75C120.5 16.7825 122.095 15.1875 124.062 15.1875V14.8125C121.888 14.8125 120.125 16.5754 120.125 18.75H120.5ZM122.948 22.1349C121.526 21.6671 120.5 20.3282 120.5 18.75H120.125C120.125 20.4949 121.26 21.9743 122.831 22.4911L122.948 22.1349ZM123.071 22.3615C123.086 22.3038 123.103 22.247 123.121 22.1911L122.764 22.0758C122.744 22.1379 122.726 22.2009 122.709 22.2646L123.071 22.3615ZM123.085 22.0112C122.694 21.557 122.694 21.122 122.694 20.8854H122.319C122.319 21.145 122.319 21.696 122.801 22.2557L123.085 22.0112ZM122.694 20.8858L122.694 20.8855L122.319 20.8848L122.319 20.8851L122.694 20.8858ZM122.694 20.8857C122.696 20.2535 122.885 19.6968 123.346 19.2961L123.101 19.0128C122.535 19.5034 122.321 20.1769 122.319 20.8846L122.694 20.8857ZM123.346 19.2961C123.811 18.8934 124.565 18.6354 125.725 18.6354V18.2604C124.517 18.2604 123.659 18.5282 123.101 19.0128L123.346 19.2961ZM125.725 18.6354H126.77V18.2604H125.725V18.6354ZM126.77 18.6354C126.719 18.6354 126.677 18.5934 126.677 18.5417H127.052C127.052 18.3863 126.926 18.2604 126.77 18.2604V18.6354ZM126.677 18.5417V19.0625H127.052V18.5417H126.677ZM126.677 19.0625V19.0679H127.052V19.0625H126.677ZM126.875 18.8807L126.874 18.8807L126.854 19.2551L126.854 19.2551L126.875 18.8807ZM126.677 19.0571C126.612 20.1781 126.306 20.9338 125.83 21.4095L126.095 21.6746C126.659 21.1111 126.984 20.2531 127.051 19.0786L126.677 19.0571ZM125.83 21.4095C125.356 21.8843 124.699 22.0937 123.906 22.0937V22.4687C124.764 22.4687 125.529 22.2409 126.095 21.6746L125.83 21.4095ZM123.906 22.0937H123.121V22.4687H123.906V22.0937ZM123.121 22.0937C123.13 22.0937 123.139 22.095 123.147 22.0975L123.042 22.4574C123.067 22.4649 123.094 22.4687 123.121 22.4687V22.0937ZM122.915 22.2246C122.905 22.2558 122.897 22.2873 122.888 22.319L123.251 22.4153C123.258 22.3867 123.266 22.3584 123.274 22.3304L122.915 22.2246ZM124.062 22.3125C123.736 22.3125 123.419 22.2685 123.119 22.1863L123.02 22.548C123.352 22.639 123.702 22.6875 124.062 22.6875V22.3125ZM123.332 22.1529C123.407 21.9455 123.502 21.754 123.619 21.5785L123.307 21.3705C123.172 21.5732 123.064 21.7923 122.98 22.0258L123.332 22.1529ZM123.295 21.9638L123.291 21.9594L123.021 22.2193L123.025 22.2237L123.295 21.9638ZM123.906 21.9062H123.16V22.2812H123.906V21.9062ZM125.698 21.2769C125.269 21.706 124.667 21.9062 123.906 21.9062V22.2812C124.732 22.2812 125.442 22.0626 125.963 21.5421L125.698 21.2769ZM126.489 19.049C126.426 20.1417 126.129 20.8455 125.698 21.2769L125.963 21.5421C126.482 21.0229 126.798 20.2169 126.864 19.0706L126.489 19.049ZM126.489 18.6354V19.0598H126.864V18.6354H126.489ZM125.725 18.8229H126.677V18.4479H125.725V18.8229ZM123.469 19.4377C123.886 19.076 124.589 18.8229 125.725 18.8229V18.4479C124.541 18.4479 123.735 18.7108 123.224 19.1544L123.469 19.4377ZM122.881 20.8861C122.883 20.2919 123.059 19.7935 123.469 19.4377L123.224 19.1544C122.71 19.6 122.508 20.2151 122.506 20.885L122.881 20.8861ZM122.881 20.8861V20.8855H122.506V20.8861H122.881ZM123.166 21.8135C122.882 21.4409 122.881 21.0969 122.881 20.8861L122.506 20.8861C122.506 21.1153 122.506 21.5658 122.868 22.0409L123.166 21.8135ZM123.151 21.2665C123.027 21.4522 122.925 21.65 122.843 21.858L123.191 21.9963C123.265 21.8111 123.355 21.6369 123.463 21.4745L123.151 21.2665ZM124.573 20.1076C123.943 20.3875 123.476 20.7785 123.151 21.2665L123.463 21.4745C123.745 21.0513 124.154 20.7042 124.725 20.4503L124.573 20.1076ZM124.944 20.2504C124.881 20.1084 124.715 20.0445 124.573 20.1076L124.725 20.4503C124.678 20.4713 124.622 20.45 124.601 20.4027L124.944 20.2504ZM124.801 20.6216C124.943 20.5585 125.007 20.3923 124.944 20.2504L124.601 20.4027C124.58 20.3553 124.602 20.2999 124.649 20.2789L124.801 20.6216ZM123.619 21.5785C123.88 21.1876 124.259 20.8625 124.801 20.6216L124.649 20.2789C124.048 20.5458 123.611 20.9149 123.307 21.3705L123.619 21.5785Z"
      fill="white"
      mask="url(#path-2-inside-1_4757_9125)"
    />
    <path
      d="M43.0021 31.1937L42.2183 33.5H41.5433L40.7071 30.4212H41.4008L41.9596 32.7875L42.7321 30.4812H43.2721L44.0371 32.7875L44.5996 30.4212H45.2971L44.4608 33.5H43.7858L43.0021 31.1937ZM48.1142 33.59C47.7967 33.59 47.5142 33.5188 47.2667 33.3763C47.0217 33.2337 46.8292 33.0412 46.6892 32.7987C46.5492 32.5537 46.4792 32.2775 46.4792 31.97C46.4792 31.6625 46.5492 31.385 46.6892 31.1375C46.8292 30.89 47.0217 30.6937 47.2667 30.5487C47.5142 30.4037 47.7967 30.3312 48.1142 30.3312C48.4292 30.3312 48.7079 30.4037 48.9504 30.5487C49.1954 30.6937 49.3867 30.89 49.5242 31.1375C49.6617 31.385 49.7304 31.6625 49.7304 31.97C49.7304 32.2775 49.6617 32.5537 49.5242 32.7987C49.3867 33.0412 49.1954 33.2337 48.9504 33.3763C48.7079 33.5188 48.4292 33.59 48.1142 33.59ZM48.1142 33.0312C48.3142 33.0312 48.4879 32.985 48.6354 32.8925C48.7854 32.8 48.9017 32.6737 48.9842 32.5137C49.0667 32.3512 49.1079 32.1687 49.1079 31.9662C49.1079 31.7637 49.0667 31.5812 48.9842 31.4187C48.9017 31.2562 48.7854 31.1275 48.6354 31.0325C48.4879 30.9375 48.3142 30.89 48.1142 30.89C47.9117 30.89 47.7354 30.9375 47.5854 31.0325C47.4354 31.1275 47.3179 31.2562 47.2329 31.4187C47.1504 31.5812 47.1092 31.7637 47.1092 31.9662C47.1092 32.1687 47.1504 32.3512 47.2329 32.5137C47.3179 32.6737 47.4354 32.8 47.5854 32.8925C47.7354 32.985 47.9117 33.0312 48.1142 33.0312ZM54.8976 30.3312C55.1251 30.3312 55.3201 30.3812 55.4826 30.4812C55.6451 30.5787 55.7688 30.7287 55.8538 30.9312C55.9413 31.1337 55.9851 31.3925 55.9851 31.7075V33.5H55.3401V31.8387C55.3401 31.5062 55.2938 31.2562 55.2013 31.0887C55.1088 30.9212 54.9401 30.8375 54.6951 30.8375C54.5651 30.8375 54.4401 30.8737 54.3201 30.9462C54.2026 31.0162 54.1051 31.125 54.0276 31.2725C53.9526 31.42 53.9151 31.6087 53.9151 31.8387V33.5H53.3076V31.8387C53.3076 31.5062 53.2501 31.2562 53.1351 31.0887C53.0201 30.9212 52.8588 30.8375 52.6513 30.8375C52.5188 30.8375 52.3938 30.8725 52.2763 30.9425C52.1613 31.01 52.0676 31.1175 51.9951 31.265C51.9226 31.4125 51.8863 31.6037 51.8863 31.8387V33.5H51.2376V30.4212H51.8863V30.8937C51.9138 30.8162 51.9726 30.7337 52.0626 30.6462C52.1551 30.5587 52.2726 30.485 52.4151 30.425C52.5601 30.3625 52.7213 30.3312 52.8988 30.3312C53.0838 30.3312 53.2388 30.3687 53.3638 30.4437C53.4888 30.5187 53.5876 30.6112 53.6601 30.7212C53.7326 30.8287 53.7826 30.9325 53.8101 31.0325C53.8451 30.925 53.9126 30.8175 54.0126 30.71C54.1126 30.6 54.2388 30.51 54.3913 30.44C54.5438 30.3675 54.7126 30.3312 54.8976 30.3312ZM58.0462 32.0937C58.0487 32.2787 58.0887 32.4475 58.1662 32.6C58.2437 32.7525 58.3587 32.8737 58.5112 32.9637C58.6662 33.0537 58.8562 33.0987 59.0812 33.0987C59.2712 33.0987 59.4324 33.0712 59.5649 33.0162C59.6999 32.9587 59.8099 32.8912 59.8949 32.8137C59.9799 32.7337 60.0412 32.6625 60.0787 32.6L60.3974 32.9937C60.3149 33.1137 60.2137 33.2187 60.0937 33.3087C59.9762 33.3987 59.8324 33.4675 59.6624 33.515C59.4924 33.565 59.2849 33.59 59.0399 33.59C58.7099 33.59 58.4237 33.52 58.1812 33.38C57.9412 33.2375 57.7562 33.0412 57.6262 32.7912C57.4962 32.5387 57.4312 32.25 57.4312 31.925C57.4312 31.625 57.4924 31.355 57.6149 31.115C57.7374 30.8725 57.9149 30.6812 58.1474 30.5412C58.3824 30.4012 58.6649 30.3312 58.9949 30.3312C59.2974 30.3312 59.5599 30.395 59.7824 30.5225C60.0074 30.6475 60.1812 30.825 60.3037 31.055C60.4287 31.285 60.4912 31.56 60.4912 31.88C60.4912 31.9 60.4899 31.9362 60.4874 31.9887C60.4849 32.0387 60.4824 32.0737 60.4799 32.0937H58.0462ZM59.8687 31.6025C59.8662 31.5 59.8362 31.3875 59.7787 31.265C59.7237 31.1425 59.6337 31.0375 59.5087 30.95C59.3837 30.8625 59.2149 30.8187 59.0024 30.8187C58.7824 30.8187 58.6049 30.8612 58.4699 30.9462C58.3374 31.0312 58.2399 31.135 58.1774 31.2575C58.1149 31.3775 58.0787 31.4925 58.0687 31.6025H59.8687ZM63.6829 30.3312C63.8854 30.3312 64.0816 30.3737 64.2716 30.4587C64.4641 30.5437 64.6216 30.6787 64.7441 30.8637C64.8691 31.0462 64.9316 31.285 64.9316 31.58V33.5H64.2716V31.7075C64.2716 31.4025 64.2004 31.1812 64.0579 31.0437C63.9154 30.9037 63.7316 30.8337 63.5066 30.8337C63.3591 30.8337 63.2166 30.8762 63.0791 30.9612C62.9441 31.0437 62.8329 31.1587 62.7454 31.3062C62.6579 31.4512 62.6141 31.6162 62.6141 31.8012V33.5H61.9616V30.4212H62.6141V30.9687C62.6366 30.8837 62.6979 30.7912 62.7979 30.6912C62.8979 30.5912 63.0254 30.5062 63.1804 30.4362C63.3354 30.3662 63.5029 30.3312 63.6829 30.3312ZM70.6038 33.05C70.7988 33.05 70.9563 33.0187 71.0763 32.9562C71.1963 32.8937 71.2713 32.8487 71.3013 32.8212L71.62 33.29C71.595 33.3125 71.535 33.3487 71.44 33.3987C71.3475 33.4462 71.2275 33.49 71.08 33.53C70.935 33.57 70.77 33.59 70.585 33.59C70.3025 33.59 70.04 33.5275 69.7975 33.4025C69.555 33.275 69.3588 33.09 69.2088 32.8475C69.0613 32.605 68.9875 32.3087 68.9875 31.9587C68.9875 31.6062 69.0613 31.31 69.2088 31.07C69.3588 30.8275 69.555 30.6437 69.7975 30.5187C70.04 30.3937 70.3025 30.3312 70.585 30.3312C70.7675 30.3312 70.93 30.3537 71.0725 30.3987C71.215 30.4412 71.3325 30.4887 71.425 30.5412C71.5175 30.5937 71.5788 30.6337 71.6088 30.6612L71.2863 31.13C71.2663 31.11 71.2275 31.08 71.17 31.04C71.115 30.9975 71.04 30.9587 70.945 30.9237C70.85 30.8887 70.7363 30.8712 70.6038 30.8712C70.4438 30.8712 70.2875 30.915 70.135 31.0025C69.985 31.0875 69.8613 31.2112 69.7638 31.3737C69.6663 31.5362 69.6175 31.7312 69.6175 31.9587C69.6175 32.1862 69.6663 32.3825 69.7638 32.5475C69.8613 32.71 69.985 32.835 70.135 32.9225C70.2875 33.0075 70.4438 33.05 70.6038 33.05ZM73.6941 33.5H73.0378V28.34H73.6941V33.5ZM76.809 33.59C76.4915 33.59 76.209 33.5188 75.9615 33.3763C75.7165 33.2337 75.524 33.0412 75.384 32.7987C75.244 32.5537 75.174 32.2775 75.174 31.97C75.174 31.6625 75.244 31.385 75.384 31.1375C75.524 30.89 75.7165 30.6937 75.9615 30.5487C76.209 30.4037 76.4915 30.3312 76.809 30.3312C77.124 30.3312 77.4027 30.4037 77.6452 30.5487C77.8902 30.6937 78.0815 30.89 78.219 31.1375C78.3565 31.385 78.4252 31.6625 78.4252 31.97C78.4252 32.2775 78.3565 32.5537 78.219 32.7987C78.0815 33.0412 77.8902 33.2337 77.6452 33.3763C77.4027 33.5188 77.124 33.59 76.809 33.59ZM76.809 33.0312C77.009 33.0312 77.1827 32.985 77.3302 32.8925C77.4802 32.8 77.5965 32.6737 77.679 32.5137C77.7615 32.3512 77.8027 32.1687 77.8027 31.9662C77.8027 31.7637 77.7615 31.5812 77.679 31.4187C77.5965 31.2562 77.4802 31.1275 77.3302 31.0325C77.1827 30.9375 77.009 30.89 76.809 30.89C76.6065 30.89 76.4302 30.9375 76.2802 31.0325C76.1302 31.1275 76.0127 31.2562 75.9277 31.4187C75.8452 31.5812 75.804 31.7637 75.804 31.9662C75.804 32.1687 75.8452 32.3512 75.9277 32.5137C76.0127 32.6737 76.1302 32.8 76.2802 32.8925C76.4302 32.985 76.6065 33.0312 76.809 33.0312ZM79.6361 30.4212H80.2399V29.1575H80.8886V30.4212H81.6799V30.98H80.8886V32.5025C80.8886 32.6825 80.9199 32.815 80.9824 32.9C81.0474 32.985 81.1336 33.0275 81.2411 33.0275C81.3361 33.0275 81.4099 33.01 81.4624 32.975C81.5149 32.94 81.5461 32.9162 81.5561 32.9037L81.8149 33.3837C81.7999 33.3962 81.7599 33.42 81.6949 33.455C81.6299 33.49 81.5461 33.5213 81.4436 33.5488C81.3411 33.5763 81.2211 33.59 81.0836 33.59C80.8436 33.59 80.6424 33.5175 80.4799 33.3725C80.3199 33.225 80.2399 32.9925 80.2399 32.675V30.98H79.6361V30.4212ZM84.8753 30.3312C85.0778 30.3312 85.274 30.3737 85.464 30.4587C85.6565 30.5437 85.814 30.6787 85.9365 30.8637C86.0615 31.0462 86.124 31.285 86.124 31.58V33.5H85.464V31.7075C85.464 31.4025 85.394 31.1812 85.254 31.0437C85.1165 30.9037 84.9353 30.8337 84.7103 30.8337C84.5603 30.8337 84.4165 30.8762 84.279 30.9612C84.1415 31.0437 84.0278 31.1587 83.9378 31.3062C83.8503 31.4512 83.8065 31.6162 83.8065 31.8012V33.5H83.1465V28.34H83.8065V30.9687C83.829 30.8837 83.889 30.7912 83.9865 30.6912C84.0865 30.5912 84.214 30.5062 84.369 30.4362C84.524 30.3662 84.6928 30.3312 84.8753 30.3312ZM87.8273 33.5V30.4212H88.4798V33.5H87.8273ZM88.1611 29.3675C88.0436 29.3675 87.9423 29.3262 87.8573 29.2437C87.7748 29.1587 87.7336 29.0575 87.7336 28.94C87.7336 28.8225 87.7748 28.7212 87.8573 28.6362C87.9423 28.5512 88.0436 28.5087 88.1611 28.5087C88.2386 28.5087 88.3098 28.5287 88.3748 28.5687C88.4423 28.6087 88.4961 28.6612 88.5361 28.7262C88.5761 28.7887 88.5961 28.86 88.5961 28.94C88.5961 29.0575 88.5536 29.1587 88.4686 29.2437C88.3836 29.3262 88.2811 29.3675 88.1611 29.3675ZM91.9485 30.3312C92.151 30.3312 92.3472 30.3737 92.5372 30.4587C92.7297 30.5437 92.8872 30.6787 93.0097 30.8637C93.1347 31.0462 93.1972 31.285 93.1972 31.58V33.5H92.5372V31.7075C92.5372 31.4025 92.466 31.1812 92.3235 31.0437C92.181 30.9037 91.9972 30.8337 91.7722 30.8337C91.6247 30.8337 91.4822 30.8762 91.3447 30.9612C91.2097 31.0437 91.0985 31.1587 91.011 31.3062C90.9235 31.4512 90.8797 31.6162 90.8797 31.8012V33.5H90.2272V30.4212H90.8797V30.9687C90.9022 30.8837 90.9635 30.7912 91.0635 30.6912C91.1635 30.5912 91.291 30.5062 91.446 30.4362C91.601 30.3662 91.7685 30.3312 91.9485 30.3312ZM96.2705 35.1463C96.028 35.1463 95.808 35.1213 95.6105 35.0713C95.4155 35.0213 95.2442 34.95 95.0967 34.8575C94.9517 34.7675 94.8355 34.6613 94.748 34.5388L95.1755 34.13C95.223 34.195 95.2867 34.2638 95.3667 34.3363C95.4492 34.4113 95.5605 34.475 95.7005 34.5275C95.8405 34.58 96.023 34.6063 96.248 34.6063C96.468 34.6063 96.6542 34.5588 96.8067 34.4637C96.9592 34.3713 97.0755 34.245 97.1555 34.085C97.2355 33.925 97.2755 33.745 97.2755 33.545V33.4437H97.913V33.5863C97.913 33.9263 97.8392 34.2113 97.6917 34.4413C97.5467 34.6738 97.3505 34.8488 97.103 34.9663C96.8555 35.0863 96.578 35.1463 96.2705 35.1463ZM97.2755 33.5V32.9C97.2555 32.9625 97.1967 33.0487 97.0992 33.1587C97.0042 33.2687 96.873 33.3687 96.7055 33.4587C96.5405 33.5462 96.3455 33.59 96.1205 33.59C95.8355 33.59 95.5767 33.5225 95.3442 33.3875C95.1142 33.2525 94.9305 33.0637 94.793 32.8212C94.658 32.5762 94.5905 32.29 94.5905 31.9625C94.5905 31.635 94.658 31.35 94.793 31.1075C94.9305 30.8625 95.1142 30.6725 95.3442 30.5375C95.5767 30.4 95.8355 30.3312 96.1205 30.3312C96.343 30.3312 96.5355 30.3712 96.698 30.4512C96.863 30.5312 96.9942 30.6237 97.0917 30.7287C97.1917 30.8337 97.2505 30.9237 97.268 30.9987V30.4212H97.913V33.5H97.2755ZM95.2355 31.9625C95.2355 32.185 95.2842 32.3775 95.3817 32.54C95.4792 32.7025 95.6055 32.8287 95.7605 32.9187C95.918 33.0062 96.0855 33.05 96.263 33.05C96.453 33.05 96.623 33.005 96.773 32.915C96.923 32.825 97.0417 32.6987 97.1292 32.5363C97.2167 32.3712 97.2605 32.18 97.2605 31.9625C97.2605 31.745 97.2167 31.555 97.1292 31.3925C97.0417 31.2275 96.923 31.1 96.773 31.01C96.623 30.9175 96.453 30.8712 96.263 30.8712C96.0855 30.8712 95.918 30.9162 95.7605 31.0062C95.6055 31.0962 95.4792 31.2225 95.3817 31.385C95.2842 31.5475 95.2355 31.74 95.2355 31.9625Z"
      fill="#404040"
    />
  </svg>
);

const searchIcon = (
  <svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.2559 14.2549H15.4659L15.1859 13.9849C16.1659 12.8449 16.7559 11.3649 16.7559 9.75488C16.7559 6.16488 13.8459 3.25488 10.2559 3.25488C6.66586 3.25488 3.75586 6.16488 3.75586 9.75488C3.75586 13.3449 6.66586 16.2549 10.2559 16.2549C11.8659 16.2549 13.3459 15.6649 14.4859 14.6849L14.7559 14.9649V15.7549L19.7559 20.7449L21.2459 19.2549L16.2559 14.2549ZM10.2559 14.2549C7.76586 14.2549 5.75586 12.2449 5.75586 9.75488C5.75586 7.26488 7.76586 5.25488 10.2559 5.25488C12.7459 5.25488 14.7559 7.26488 14.7559 9.75488C14.7559 12.2449 12.7459 14.2549 10.2559 14.2549Z"
      fill="#0C0C0C"
    />
  </svg>
);

const closeIcon = (
  <svg
    width="16"
    height="14"
    viewBox="0 0 15 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.5 1.41L13.09 0L7.5 5.59L1.91 0L0.5 1.41L6.09 7L0.5 12.59L1.91 14L7.5 8.41L13.09 14L14.5 12.59L8.91 7L14.5 1.41Z"
      fill="#0C0C0C"
    />
  </svg>
);

const menuIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="25"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M3 7h18M3 12h18M3 17h18"
      stroke="var(--color-primary)"
      strokeWidth="1.5"
      strokeLinecap="round"
    ></path>
  </svg>
);

const profileIcon = (
  <svg
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.39 15.5776C16.71 14.7176 14.53 14.0176 12 14.0176C9.47 14.0176 7.29 14.7176 5.61 15.5776C4.61 16.0876 4 17.1176 4 18.2376V21.0176H20V18.2376C20 17.1176 19.39 16.0876 18.39 15.5776ZM18 19.0176H6V18.2376C6 17.8576 6.2 17.5176 6.52 17.3576C7.71 16.7476 9.63 16.0176 12 16.0176C14.37 16.0176 16.29 16.7476 17.48 17.3576C17.8 17.5176 18 17.8576 18 18.2376V19.0176Z"
      fill="#202020"
    />
    <path
      d="M12 13.0176C14.21 13.0176 16 11.2276 16 9.01758C16 7.64758 16 5.51758 16 5.51758C16 4.68758 15.33 4.01758 14.5 4.01758C13.98 4.01758 13.52 4.28758 13.25 4.68758C12.98 4.28758 12.52 4.01758 12 4.01758C11.48 4.01758 11.02 4.28758 10.75 4.68758C10.48 4.28758 10.02 4.01758 9.5 4.01758C8.67 4.01758 8 4.68758 8 5.51758C8 5.51758 8 7.63758 8 9.01758C8 11.2276 9.79 13.0176 12 13.0176ZM10 6.51758H14V9.01758C14 10.1176 13.1 11.0176 12 11.0176C10.9 11.0176 10 10.1176 10 9.01758V6.51758Z"
      fill="#202020"
    />
  </svg>
);

const Header = () => {
  const { loggedIn } = useSelector((state:RootState) => state.usersSlice);

  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);

  const menus = [
    {
      id: 0,
      title: "Collection",
      href: "#",
      subLink: null,
    },
    {
      id: 1,
      title: "New In",
      href: "#",
      subLink: [
        {
          id: 1,
          title: "Shop All",
          link: "#",
        },
        {
          id: 2,
          title: "Top & Boluses",
          link: "#",
        },
        {
          id: 3,
          title: "Tees",
          link: "#",
        },
        {
          id: 4,
          title: "Pants",
          link: "#",
        },
        {
          id: 5,
          title: "Jackets & Outwears",
          link: "#",
        },
        {
          id: 6,
          title: "Pullovers",
          link: "#",
        },
        {
          id: 7,
          title: "Dresses & Jumpsuits",
          link: "#",
        },
        {
          id: 8,
          title: "Short & Skirt",
          link: "#",
        },
      ],
    },
    {
      id: 2,
      title: "ModiWeek",
      href: "#",
      subLink: null,
    },
    {
      id: 3,
      title: "Plus Size",
      href: "#",
      subLink: null,
    },
    {
      id: 4,
      title: "Sustainability",
      href: "#",
      subLink: [
        {
          id: 1,
          title: "Misson",
          link: "#",
        },
        {
          id: 2,
          title: "Processing",
          link: "#",
        },
        {
          id: 3,
          title: "Materials",
          link: "#",
        },
        {
          id: 4,
          title: "Packaging",
          link: "#",
        },
        {
          id: 5,
          title: "Product Care",
          link: "#",
        },
        {
          id: 6,
          title: "Our Suppliers",
          link: "#",
        },
      ],
    },
  ];

  const openMenu = () => {
    setIsOpenMobileMenu(true);
    // Disable body scroll when menu is open
    document.body.style.overflow = "hidden";
  };

  const closeMenu = () => {
    setIsOpenMobileMenu(false);
    // Enable body scroll when menu is closed
    document.body.style.overflow = "";
  };

  return (
    <>
      <div className="bg-primary-600 text-center text-[10px] text-white md:text-[12px]">
        Enjoy Free Shipping On All Orders
      </div>
      {/* mobile design */}
      <header className="sticky top-0 z-50 w-full">
        <div className="flex justify-between items-center flex-row-reverse px-5 bg-white py-2 border-b-[1px] border-neutral-2 md:hidden">
          <div className="flex flex-row-reverse items-center justify-center gap-x-2">
            {/* my shopping icon */}
            <div>{myShoppingIcon}</div>
            {/* favorites icon */}
            <div>{favoriteIcon}</div>
          </div>
          {/* modimal icon */}
          <div>{modimalIcon}</div>
          <div className="flex flex-row-reverse items-center justify-center gap-x-2">
            {/* search icon */}
            <div>{searchIcon}</div>
            {/* menu */}
            {isOpenMobileMenu ? (
              <button className="mx-[4px] w-[17px]" onClick={closeMenu}>
                {closeIcon}
              </button>
            ) : (
              <button
                className="cursor-pointer"
                type="button"
                onClick={openMenu}
              >
                {menuIcon}
              </button>
            )}
          </div>
          {/* mobile menu */}
          <motion.div
            initial={false}
            animate={{
              height: isOpenMobileMenu ? "calc(100dvh - 57px)" : "0px",
              opacity: isOpenMobileMenu ? 1 : 0,
            }}
            // style={{ overflow: "hidden" }}
            variants={{
              open: { opacity: 1, height: "calc(100dvh - 57px)" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            exit={{ opacity: 0 }}
            className="fixed left-0 w-full top-[57px] bg-white z-50 overflow-auto"
          >
            <div className="flex flex-col items-center mt-12">
              {" "}
              {/* Set height to full screen */}
              <div className="w-full overflow-auto max-h-[calc(100dvh-200px)] flex flex-col items-center gap-y-4">
                {" "}
                {/* Allow content to scroll */}
                {menus.map((item) => (
                  <MenuDropDown item={item} key={item.id} />
                ))}
              </div>
              <div className="w-full absolute bottom-0 flex justify-center items-center gap-x-4 py-4 px-4 border-t-[1px]">
                {loggedIn ? (
                  <div className="flex items-center justify-center w-full gap-x-4">
                    <Link to="/profile" className="w-full">
                      <Button type="button" className={style.button} onClick={closeMenu}>
                        <div className="flex items-center justify-center gap-x-2">
                          <div>{profileIcon}</div>
                          <p>profile</p>
                        </div>
                      </Button>
                    </Link>
                  </div>
                ) : (
                  <div className="flex items-center justify-center w-full gap-x-4 ">
                    <Link to="login" className="w-full">
                      <Button type="button" className={style.button} onClick={closeMenu}>
                        <div className="flex items-center justify-center gap-x-2">
                          <div>{profileIcon}</div>
                          <p>Log In</p>
                        </div>
                      </Button>
                    </Link>
                    <Link to="/register" className="w-full">
                      <Button type="button" className={style.button} onClick={closeMenu}>
                        <span className="whitespace-nowrap">
                          Create Account
                        </span>
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
        {/* desktop design */}
        <div className="hidden md:flex justify-around items-center py-4 bg-white border-b-[1px] border-neutral-2">
          <div>{modimalIcon}</div>
          <div className="flex items-center justify-center gap-x-4 lg:gap-x-6">
            {menus.map((item) => (
              <DropDown item={item} key={item.id} />
            ))}
            {/* <a href="#">Collection</a>
            <a href="#">New In</a>
            <a href="#">ModiWeek</a>
            <a href="#">Plus Size</a>
            <a href="#">Sustainability</a> */}
          </div>
          <div className="flex items-center justify-center gap-x-2 lg:gap-x-4">
            {/* my shopping icon */}
            <a href="#">{myShoppingIcon}</a>
            {/* favorites icon */}
            <a href="#">{favoriteIcon}</a>
            {/* profile icon */}
            <a href="#">{profileIcon}</a>
            {/* search icon */}
            <div>{searchIcon}</div>
          </div>
        </div>
      </header>
      <a href="#" className="fixed z-10 bottom-5 right-4">
        <svg
          width="56"
          height="48"
          viewBox="0 0 56 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="0.5" y="0.5" width="55" height="47" fill="#5A6D57" />
          <rect x="0.5" y="0.5" width="55" height="47" stroke="white" />
          <path
            d="M36 14H20.01C18.91 14 18.01 14.9 18.01 16L18 34L22 30H36C37.1 30 38 29.1 38 28V16C38 14.9 37.1 14 36 14ZM36 28H21.17L20 29.17V16H36V28ZM28 22C29.1 22 30 21.1 30 20C30 18.9 29.1 18 28 18C26.9 18 26 18.9 26 20C26 21.1 26.9 22 28 22ZM32 25.43C32 24.62 31.52 23.9 30.78 23.58C29.93 23.21 28.99 23 28 23C27.01 23 26.07 23.21 25.22 23.58C24.48 23.9 24 24.62 24 25.43V26H32V25.43Z"
            fill="white"
          />
        </svg>
      </a>
    </>
  );
};

export default Header;
