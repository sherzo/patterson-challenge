import React from "react";

type TIcon = {
  width?: number;
  height?: number;
};

export const CartIcon = ({ width = 22, height = 22 }: TIcon) => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width={`${width}.000000pt`}
      height={`${height}.000000pt`}
      viewBox="0 0 1280.000000 1211.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <metadata>
        Created by potrace 1.15, written by Peter Selinger 2001-2017
      </metadata>
      <g
        transform="translate(0.000000,1211.000000) scale(0.100000,-0.100000)"
        fill="#000000"
        stroke="none"
      >
        <path
          d="M253 12091 c-100 -34 -176 -103 -222 -201 -22 -46 -26 -69 -26 -140
    1 -72 5 -94 30 -144 34 -73 96 -136 165 -171 58 -29 34 -25 1135 -209 380 -64
    699 -118 710 -121 13 -3 27 -20 37 -47 9 -24 111 -284 228 -578 117 -294 279
    -704 360 -910 81 -206 225 -571 320 -810 95 -239 239 -604 320 -810 81 -206
    225 -571 320 -810 95 -239 239 -604 320 -810 277 -701 488 -1234 681 -1720
    105 -267 192 -495 193 -507 1 -17 -89 -91 -434 -359 -239 -185 -471 -368 -515
    -406 -252 -218 -417 -493 -465 -778 -18 -99 -16 -288 3 -376 23 -107 93 -237
    203 -380 107 -138 264 -261 422 -330 40 -17 75 -34 77 -36 3 -2 -21 -12 -53
    -22 -330 -103 -554 -453 -503 -786 25 -160 83 -278 195 -397 354 -377 977
    -277 1197 192 102 219 88 464 -39 673 -46 76 -137 172 -209 219 -29 20 -52 37
    -51 39 2 1 1231 -2 2733 -6 1502 -5 2897 -10 3100 -10 350 -1 369 -2 345 -18
    -14 -9 -54 -44 -89 -77 -302 -284 -301 -756 2 -1042 355 -336 938 -236 1157
    197 73 145 97 314 66 465 -20 97 -88 240 -149 314 -43 52 -144 141 -159 141
    -5 0 -8 4 -8 9 0 6 128 11 323 13 370 3 371 4 471 98 77 72 110 150 111 255 0
    71 -4 88 -32 146 -39 79 -102 140 -181 177 l-57 27 -1115 7 c-613 5 -2388 12
    -3945 17 -2131 6 -2841 11 -2876 20 -164 42 -252 184 -221 353 15 84 81 215
    142 281 27 30 348 287 714 571 l665 517 1078 85 c593 46 1881 147 2863 224
    982 77 1927 152 2100 165 173 14 338 32 365 40 107 30 202 126 235 235 10 36
    35 198 55 360 19 162 48 403 64 535 17 132 57 465 91 740 33 275 97 793 141
    1150 43 358 98 801 120 985 26 211 39 353 35 385 -19 164 -164 297 -340 311
    -34 2 -529 16 -1101 29 -572 14 -1218 29 -1435 35 -217 5 -578 14 -802 20
    -225 5 -589 14 -810 20 -222 5 -587 15 -813 20 -956 24 -2866 70 -3315 80
    -267 6 -513 13 -547 16 -61 5 -61 6 -78 47 -10 23 -84 211 -165 417 -82 206
    -216 548 -300 760 -84 212 -215 545 -292 740 -76 195 -150 373 -163 396 -29
    49 -90 106 -142 132 -61 31 38 13 -1324 242 -426 71 -795 130 -820 129 -24 0
    -68 -8 -96 -18z m4322 -3415 l440 -11 3 -632 2 -633 -334 0 -334 0 -110 278
    c-61 152 -174 439 -252 637 -78 198 -144 363 -147 368 -6 9 188 8 732 -7z
    m1405 -36 c212 -6 415 -10 452 -10 l68 0 0 -615 0 -615 -615 0 -615 0 0 631 0
    630 163 -6 c89 -3 335 -10 547 -15z m1315 -30 c237 -6 490 -13 563 -16 l132
    -6 0 -594 0 -594 -615 0 -615 0 0 610 0 610 53 0 c28 0 246 -4 482 -10z m2163
    -56 c9 -3 12 -127 12 -579 l0 -575 -615 0 -615 0 0 593 0 592 602 -13 c332 -8
    609 -15 616 -18z m975 -24 c208 -6 410 -10 448 -10 l69 0 0 -560 0 -560 -615
    0 -615 0 0 575 0 576 168 -6 c92 -3 337 -10 545 -15z m1525 -36 c198 -5 282
    -10 282 -18 0 -7 -29 -249 -65 -540 -36 -290 -65 -530 -65 -532 0 -2 -202 -4
    -450 -4 l-450 0 0 557 0 556 233 -6 c127 -4 359 -10 515 -13z m-6938 -1914 l0
    -571 -61 3 -61 3 -78 195 c-42 107 -141 357 -219 555 -79 198 -145 366 -148
    373 -4 9 56 12 281 12 l286 0 0 -570z m1480 0 l0 -570 -615 0 -615 0 0 570 0
    570 615 0 615 0 0 -570z m1488 3 l-3 -568 -612 -3 -613 -2 0 570 0 570 615 0
    615 0 -2 -567z m1482 -3 l0 -570 -615 0 -615 0 0 570 0 570 615 0 615 0 0
    -570z m1480 0 l0 -570 -615 0 -615 0 0 570 0 570 615 0 615 0 0 -570z m1125
    538 c-3 -18 -32 -256 -65 -528 -33 -272 -62 -514 -65 -537 l-6 -43 -365 0
    -364 0 0 570 0 570 435 0 436 0 -6 -32z m-7055 -1380 c0 -19 -2 -20 -10 -8
    -13 19 -13 30 0 30 6 0 10 -10 10 -22z m1480 -568 l0 -590 -22 -4 c-13 -3
    -212 -19 -443 -36 -231 -18 -445 -38 -475 -45 -30 -7 -56 -13 -56 -12 -1 1
    -54 135 -118 297 l-116 296 0 342 0 342 615 0 615 0 0 -590z m1490 60 c0 -416
    -3 -532 -12 -535 -14 -4 -1155 -95 -1198 -95 l-25 0 3 580 2 580 615 0 615 0
    0 -530z m1480 56 l0 -474 -57 -6 c-32 -3 -294 -24 -583 -46 -289 -22 -540 -42
    -557 -44 l-33 -5 0 525 0 524 615 0 615 0 0 -474z m1480 59 l0 -415 -22 -4
    c-13 -3 -266 -23 -563 -46 -297 -23 -564 -44 -592 -47 l-53 -6 0 467 0 466
    615 0 615 0 0 -415z m955 383 c-3 -18 -21 -166 -40 -328 -20 -162 -39 -320
    -43 -350 l-7 -55 -260 -22 c-143 -12 -279 -22 -302 -22 l-43 -1 0 405 0 405
    350 0 351 0 -6 -32z m-7441 -4616 c269 -126 337 -464 135 -677 -201 -212 -557
    -164 -693 95 -125 238 2 530 263 606 28 8 81 12 137 10 78 -3 102 -8 158 -34z
    m6917 18 c157 -53 261 -174 291 -340 32 -169 -68 -362 -227 -441 -222 -109
    -484 -21 -588 198 -30 64 -32 75 -32 178 0 103 2 114 31 176 54 114 134 185
    253 226 86 29 189 30 272 3z"
        />
        <path
          d="M4203 934 c-158 -56 -201 -280 -74 -387 146 -122 371 -35 388 150 16
    171 -149 295 -314 237z"
        />
        <path
          d="M11164 933 c-52 -23 -73 -39 -106 -83 -83 -110 -42 -271 83 -334 157
    -78 339 29 339 199 0 54 -28 125 -63 163 -57 62 -176 87 -253 55z"
        />
      </g>
    </svg>
  );
};
