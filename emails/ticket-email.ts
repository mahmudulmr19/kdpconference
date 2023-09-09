export function getTicketEmail(link: string, name: string) {
  return `
	<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Congratulations on Your KDP Conference Tickets!</title>
  </head>
  <style>
    img {
      border: none;
      -ms-interpolation-mode: bicubic;
      max-width: 100%;
    }
    body {
      -webkit-font-smoothing: antialiased;
      font-size: 14px;
      line-height: 1.4;
      margin: 0;
      padding: 0;
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
    }
    table {
      border-collapse: separate;
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
      max-width: 600px;
      width: 100%;
      margin: 0 auto;
    }
    table td {
      font-family: sans-serif;
      font-size: 14px;
      vertical-align: top;
    }
  </style>
  <body>
    <table
      width="100%"
      bgcolor="#f4f4f4"
      cellpadding="0"
      cellspacing="0"
      border="0"
    >
      <tr>
        <td>
          <table
            align="center"
            width="600"
            cellpadding="0"
            cellspacing="0"
            style="
              background-color: #ffffff;
              margin: 0 auto;
              padding: 20px;
              border-radius: 5px;
            "
          >
            <tr>
              <td
                style="
                  text-align: left;
                  padding: 0 20px;
                  font-weight: 700;
                  font-size: 20px;
                "
              >
                <span style="color: #f97316">KDP</span> CONFERENCE
              </td>
            </tr>
            <tr>
              <td style="padding: 20px">
                <h1 style="color: #333; margin: 20px 0; font-size: x-large">
                  Congratulations on Your KDP Conference Tickets!
                </h1>
                <p style="color: #666; font-size: 16px; margin: 10px 0">
                  Dear ${name},
                </p>
                <p style="color: #666; font-size: 16px; margin: 10px 0">
                  We are thrilled to inform you that your ticket purchase for
                  the KDP Conference was successful. You are now officially
                  registered for the event!
                </p>
                <p style="color: #666; font-size: 16px; margin: 10px 0">
                  To download your tickets, please click on the link below:
                </p>
                <p style="margin: 20px 0">
                  <a
                    href="${link}"
                    style="
                      background-color: #f97316;
                      color: #fff;
                      text-decoration: none;
                      padding: 10px 20px;
                      border-radius: 5px;
                      font-weight: bold;
                      display: inline-block;
                    "
                    >Download Your Tickets</a
                  >
                </p>
                <p style="color: #666; font-size: 16px; margin: 10px 0">
                  If you have any questions or need further assistance, please
                  don't hesitate to contact us at
                  <a
                    href="mailto:contact@kdpconference.com"
                    style="color: #f97316; text-decoration: none"
                    >contact@kdpconference.com</a
                  >.
                </p>
                <p style="color: #666; font-size: 16px; margin: 10px 0">
                  Best regards,<br />Your KDP Conference Team
                </p>
              </td>
            </tr>
          </table>
          <!-- Additional Table for "Organized by" and Logo -->
          <table
            align="center"
            width="600"
            cellpadding="0"
            cellspacing="0"
            style="margin: 0 auto; padding: 20px"
          >
            <tr>
              <td style="text-align: left; padding: 0 20px">
                <p style="color: #666; font-size: 16px; margin: 10px 0">
                  Organized by
                </p>

                <svg
                  width="120"
                  viewBox="0 0 148 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_3915_17635)">
                    <path
                      d="M22 44C34.1503 44 44 34.1503 44 22C44 9.84974 34.1503 0 22 0C9.84974 0 0 9.84974 0 22C0 34.1503 9.84974 44 22 44Z"
                      fill="#3D419F"
                    />
                    <path
                      d="M16.93 16.9493L14.4709 20.9597L12.0117 12.1067H12.0685L16.93 16.9493Z"
                      fill="white"
                    />
                    <path
                      d="M31.0423 24.1755L32.0449 25.1781V32.0259L27.5427 27.5426L27.1833 27.1832L23.5513 23.5701H23.8729C25.67 23.5701 27.1455 22.1325 27.1833 20.3354C27.1833 20.3165 27.1833 20.2787 27.1833 20.2597C27.1833 18.4437 25.6889 16.9493 23.8729 16.9493H16.9305L12.0879 12.1067H23.7783C28.2805 12.1067 32.0071 15.6819 32.0449 20.1841C32.0638 21.6217 31.7044 22.9837 31.0423 24.1755Z"
                      fill="white"
                    />
                    <path
                      d="M14.4707 26.8238V28.9803V32.0259H19.3323V28.9803V23.9106V19.0491L14.4707 26.8238Z"
                      fill="white"
                    />
                    <path
                      d="M28.4317 32.0258H15.209V27.1831H23.5701L28.4317 32.0258Z"
                      fill="white"
                    />
                    <path
                      opacity="0.57"
                      d="M16.93 16.9493L14.4709 20.9597L12.0117 12.1067H12.0685L16.93 16.9493Z"
                      fill="url(#paint0_linear_3915_17635)"
                    />
                    <path
                      d="M53.9414 10.4608V4.16162H55.3412V9.21235H58.0274V10.4608H53.9414Z"
                      fill="#666666"
                    />
                    <path
                      d="M65.4241 4.16162V5.41012H62.284V6.71536H65.1026V7.90711H62.284V9.21235H65.5187V10.4608H60.8652V4.16162H65.4241Z"
                      fill="#666666"
                    />
                    <path
                      d="M73.0851 10.4608L72.4987 9.09885H69.8504L69.2639 10.4608H67.7695L70.4935 4.16162H71.8555L74.5795 10.4798H73.0851V10.4608ZM71.1745 6.03436L70.38 7.86927H71.969L71.1745 6.03436Z"
                      fill="#666666"
                    />
                    <path
                      d="M82.2397 6.24245C82.2397 7.24503 81.8424 7.90711 81.0479 8.20977L82.6369 10.4608H80.8966L79.4968 8.45569H78.5131V10.4608H77.1133V4.16162H79.4968C80.4804 4.16162 81.1803 4.33187 81.5965 4.65345C82.0316 4.97503 82.2397 5.52362 82.2397 6.24245ZM80.5372 6.99911C80.7074 6.84778 80.802 6.60186 80.802 6.26136C80.802 5.92086 80.7074 5.69387 80.5372 5.56145C80.348 5.42903 80.0454 5.37228 79.5914 5.37228H78.532V7.24503H79.5535C80.0264 7.22611 80.3669 7.15044 80.5372 6.99911Z"
                      fill="#666666"
                    />
                    <path
                      d="M89.9017 4.16162H91.3015V10.4798H89.9017L86.894 6.5262V10.4798H85.4941V4.16162H86.8183L89.9206 8.22869V4.16162H89.9017Z"
                      fill="#666666"
                    />
                    <path
                      d="M100.817 7.79361L101.933 4.16162H103.408L104.524 7.79361L105.773 4.16162H107.305L105.111 10.4798H104.07L102.689 6.09111L101.308 10.4608H100.268L98.0547 4.16162H99.5869L100.817 7.79361Z"
                      fill="#666666"
                    />
                    <path
                      d="M109.859 4.16162H111.259V10.4798H109.859V4.16162Z"
                      fill="#666666"
                    />
                    <path
                      d="M117.293 5.37228V10.4608H115.893V5.37228H114.115V4.16162H119.09V5.37228H117.293Z"
                      fill="#666666"
                    />
                    <path
                      d="M125.843 4.16162H127.243V10.4798H125.843V7.98277H123.328V10.4608H121.928V4.16162H123.328V6.79103H125.843V4.16162Z"
                      fill="#666666"
                    />
                    <path
                      d="M65.8401 34.6931L61.3758 28.0156H57.7627V34.6931H53.166V13.8281H62.7C65.1781 13.8281 67.1075 14.4335 68.5074 15.6441C69.8883 16.8548 70.5882 18.5384 70.5882 20.7138V20.7705C70.5882 22.4541 70.172 23.835 69.3586 24.8943C68.5263 25.9537 67.448 26.7292 66.1239 27.24L71.2124 34.6931H65.8401ZM65.9347 20.9408C65.9347 19.9382 65.6131 19.2004 64.9889 18.7086C64.3457 18.2168 63.4756 17.9709 62.3406 17.9709H57.7817V23.9674H62.4351C63.5701 23.9674 64.4403 23.7026 65.0456 23.154C65.651 22.6243 65.9536 21.9055 65.9536 21.0164V20.9408H65.9347Z"
                      fill="#1B1D48"
                    />
                    <path
                      d="M90.2612 34.6931L88.3506 30.0207H79.5355L77.6249 34.6931H72.9336L81.8811 13.6768H86.1185L95.066 34.6931H90.2612ZM83.9431 19.1815L81.1623 25.9536H86.7049L83.9431 19.1815Z"
                      fill="#1B1D48"
                    />
                    <path
                      d="M111.75 34.6931L105.28 25.8023L102.859 28.2993V34.6742H98.2812V13.8281H102.878V22.9459L111.334 13.8281H116.876L108.383 22.6811L117.274 34.6931H111.75Z"
                      fill="#1B1D48"
                    />
                    <path
                      d="M120.244 34.6931V13.8281H124.841V34.6931H120.244Z"
                      fill="#1B1D48"
                    />
                    <path
                      d="M147.22 31.4773C146.86 32.1961 146.331 32.7826 145.65 33.2744C144.969 33.7473 144.136 34.1067 143.172 34.3526C142.207 34.5985 141.148 34.712 139.975 34.712H130.062V13.8281H139.729C141.866 13.8281 143.55 14.32 144.78 15.2847C145.99 16.2494 146.615 17.5736 146.615 19.2194V19.2761C146.615 19.8814 146.539 20.3922 146.388 20.8651C146.236 21.3191 146.047 21.7353 145.801 22.0947C145.555 22.4541 145.271 22.7946 144.95 23.0594C144.628 23.3432 144.269 23.5702 143.891 23.7783C145.101 24.2323 146.047 24.8565 146.747 25.651C147.447 26.4455 147.787 27.5237 147.787 28.9236V28.9803C147.768 29.9261 147.579 30.7585 147.22 31.4773ZM142.075 19.9949C142.075 19.295 141.81 18.7654 141.299 18.4059C140.788 18.0465 140.032 17.8574 139.067 17.8574H134.527V22.2649H138.764C139.786 22.2649 140.58 22.0947 141.185 21.7353C141.791 21.3948 142.075 20.8273 142.075 20.0517V19.9949ZM143.228 28.3372C143.228 27.6372 142.964 27.0887 142.415 26.6914C141.885 26.2752 141.015 26.0861 139.823 26.0861H134.508V30.6828H139.956C140.977 30.6828 141.772 30.4936 142.339 30.1342C142.907 29.7748 143.21 29.1884 143.21 28.4128V28.3372H143.228Z"
                      fill="#1B1D48"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_3915_17635"
                      x1="14.4368"
                      y1="14.8585"
                      x2="13.804"
                      y2="20.2724"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#B3B3B3" />
                      <stop offset="1" stop-color="white" stop-opacity="0" />
                    </linearGradient>
                    <clipPath id="clip0_3915_17635">
                      <rect width="147.852" height="44" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`;
}
