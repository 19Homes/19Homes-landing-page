export const EmailTemplate = ({ firstname }: { firstname: string }) => (
  <table
    align="center"
    width="100%"
    style={{
      maxWidth: "500px",
      backgroundColor: "#f0f0f0",
      padding: "1.5rem 20px",
      borderRadius: "25px",
    }}
  >
    <tr>
      <td>
        <h2
          style={{
            fontSize: "1.2rem",
            fontFamily: "Helvetica, sans-serif",
            fontWeight: "600",
            lineHeight: "1.2",
            letterSpacing: "1.5px",
            color: "black",
          }}
        >
          Dear {firstname}
        </h2>
        <h1
          style={{
            fontSize: "1.6rem",
            fontFamily: "Times New Roman, serif",
            fontWeight: "700",
            lineHeight: "1.2",
            letterSpacing: "2px",
            color: "rgba(218, 145, 0, 1)",
            textTransform: "uppercase",
          }}
        >
          Welcome to 19Homes
        </h1>
        <img
          src="https://res.cloudinary.com/ddep9f2pk/image/upload/v1750231891/display-image_xgyiux.png"
          alt="a multi duplex building design"
          style={{
            width: "100%",
            aspectRatio: "3/2",
            maxWidth: "500px",
            borderRadius: "20px",
            boxShadow: "0px 5px 12px #000000a9",
            objectFit: "cover",
          }}
        />
        <p
          style={{
            fontSize: "0.9rem",
            fontFamily: "Helvetica, sans-serif",
            fontWeight: "400",
            lineHeight: "1.6",
            letterSpacing: "1.3px",
            color: "black",
            marginBottom: "15px",
          }}
        >
          Thank you for registering with{" "}
          <strong style={{ color: "rgba(218, 145, 0, 1)" }}>19Homes</strong>. We
          are happy to have you on board.
        </p>
        <p
          style={{
            fontSize: "0.9rem",
            fontFamily: "Helvetica, sans-serif",
            fontWeight: "400",
            lineHeight: "1.6",
            letterSpacing: "1.3px",
            color: "black",
            marginBottom: "15px",
          }}
        >
          With{" "}
          <strong style={{ color: "rgba(218, 145, 0, 1)" }}>19Homes</strong>,
          you have an amazing range of architectural designs to choose from for
          you next home. You can also acquire landed property and houses at
          amazing rates. You&rsquo;ve got an amazing solution for most of your
          housing needs with{" "}
          <strong style={{ color: "rgba(218, 145, 0, 1)" }}>19Homes</strong>.
        </p>
        <p
          style={{
            fontSize: "0.9rem",
            fontFamily: "Helvetica, sans-serif",
            fontWeight: "400",
            lineHeight: "1.6",
            letterSpacing: "1.3px",
            color: "black",
            marginBottom: "15px",
          }}
        >
          Welcome to the family
        </p>
        <table align="center">
          <tr>
            <td>
              <a
                href="https://19homes.vercel.app/"
                style={{
                  color: "black",
                  textDecoration: "none",
                  backgroundColor: "rgba(218, 145, 0, 0.75)",
                  padding: "12px 12px",
                  fontSize: "0.8rem",
                  fontFamily: "Helvetica, sans-serif",
                  fontWeight: "600",
                  borderRadius: "30px",
                  display: "block",
                  textAlign: "center",
                }}
              >
                Visit 19Homes
              </a>
              <a
                href="#"
                style={{
                  color: "black",
                  textDecoration: "none",
                  backgroundColor: "rgba(218, 145, 0, 0.75)",
                  padding: "12px 12px",
                  fontSize: "0.8rem",
                  fontFamily: "Helvetica, sans-serif",
                  fontWeight: "600",
                  borderRadius: "30px",
                  textAlign: "center",
                  display: "block",
                  marginTop: "10px",
                }}
              >
                Join Our WhatsApp
              </a>
            </td>
          </tr>
        </table>

        <table align="center">
          <tr>
            <td align="center">
              <img
                src="https://res.cloudinary.com/ddep9f2pk/image/upload/v1750231890/19Homes-icon_vjni83.png"
                alt="19Homes Logo"
                style={{
                  width: "60px",
                  objectFit: "contain",
                  marginTop: "20px",
                }}
              />
            </td>
          </tr>
        </table>

        <table align="center" style={{ marginTop: "20px" }}>
          <tr>
            <td align="center">
              <p
                style={{
                  fontSize: "0.6rem",
                  fontFamily: "Helvetica, sans-serif",
                  color: "#777777",
                }}
              >
                {" "}
                &copy; {new Date().getFullYear()} 19Homes. All Rights Reserved.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
);
