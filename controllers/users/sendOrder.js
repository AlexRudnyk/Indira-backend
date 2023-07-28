const { sendEmail } = require("../../helpers");
require("dotenv").config();

const { EMAIL } = process.env;

const sendOrder = async (req, res) => {
  const body = req.body;

  const mailBody = {
    to: EMAIL,
    subject: "Indira new order",
    html: `
      <div>
        <h2>Customer</h2>
        <p>Name: ${body.user.name}</p>
        <p>Phone: ${body.user.phone}</p>
        <p>Email: ${body.user.email}</p>
        <h2>Order</h2>
      <div>${body.goods}</div>
      <h2>Total Sum</h2>
      <p>${body.totalSum} UAH</p>
      </div>
      `,
  };
  await sendEmail(mailBody);

  res.status(200).json({ message: "Order sent. Thank you!" });
};

module.exports = sendOrder;
