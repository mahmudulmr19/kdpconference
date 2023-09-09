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

                <img
                src="https://cdn.learnwithrakib.pro/public/files/logo.png"
                width="100"
                />
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
