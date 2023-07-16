const cloudinary = require("cloudinary").v2;
require("dotenv").config();

const { CLOUD_NAME, API_KEY, API_SECRET } = process.env;

cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: API_KEY,
  api_secret: API_SECRET,
});

const uploadGoodsImage = async (pathFile) => {
  const options = {
    folder: "goodsImages",
    use_filename: true,
    unique_filename: false,
    overwrite: true,
    transformation: [
      { height: 400, width: 400, gravity: "face", crop: "fill" },
    ],
  };
  try {
    const result = await cloudinary.uploader.upload(pathFile, options);
    return result.url;
  } catch (error) {
    console.error(error);
  }
};

module.exports = { uploadGoodsImage };
