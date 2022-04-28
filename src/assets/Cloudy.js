/* eslint-disable prettier/prettier */
import React from 'react';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';
export default function Cloudy() {
  return (
    <Svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M41.3 18.9C38.1175 18.899 34.995 19.7664 32.269 21.4087C29.5429 23.0511 27.3166 25.4061 25.83 28.22C24.0058 27.1535 21.9603 26.5217 19.8524 26.3738C17.7445 26.2258 15.6308 26.5658 13.6756 27.3671C11.7203 28.1684 9.97603 29.4096 8.5782 30.9944C7.18037 32.5791 6.16659 34.4646 5.61558 36.5046C5.06457 38.5446 4.99116 40.6842 5.40105 42.7572C5.81093 44.8301 6.69308 46.7808 7.97901 48.4575C9.26493 50.1343 10.92 51.4922 12.8158 52.4257C14.7115 53.3591 16.7969 53.8431 18.91 53.84L41.3 53.9C45.9413 53.9 50.3925 52.0563 53.6744 48.7744C56.9563 45.4925 58.8 41.0413 58.8 36.4C58.8 31.7587 56.9563 27.3075 53.6744 24.0257C50.3925 20.7438 45.9413 18.9 41.3 18.9V18.9Z" fill="url(#paint0_linear_15_21)" />
      <Path d="M22.6198 53.333C29.9337 51.2896 34.2061 43.704 32.1627 36.3902C30.1193 29.0764 22.5337 24.8039 15.2199 26.8473C7.9061 28.8908 3.63361 36.4763 5.67704 43.7901C7.72047 51.104 15.306 55.3765 22.6198 53.333Z" fill="url(#paint1_linear_15_21)" />
      <Defs>
        <LinearGradient id="paint0_linear_15_21" x1="45.72" y1="55.39" x2="24.63" y2="28.08" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#F2F2F2" />
          <Stop offset="1" stopColor="#CFCFCF" />
        </LinearGradient>
        <LinearGradient id="paint1_linear_15_21" x1="13.2947" y1="35.1932" x2="29.2259" y2="49.0681" gradientUnits="userSpaceOnUse">
          <Stop offset="0.02" stopColor="white" />
          <Stop offset="1" stopColor="white" stop-opacity="0" />
        </LinearGradient>
      </Defs>
    </Svg>

  );
}
