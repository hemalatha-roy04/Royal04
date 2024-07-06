import QRCode from "qrcode";

// With promises
QRCode.toDataURL("I am ")
  .then((url) => {
    console.log(url);
  })
  .catch((err) => {
    console.error(err);
  });

// With async/await
const generateQR = async (text) => {
  try {
    console.log(await QRCode.toDataURL(text));
  } catch (err) {
    console.error(err);
  }
};
