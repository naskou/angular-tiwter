const cloudinary = require('cloudinary');
const HttpStatus = require('http-status-codes');

const User = require('../models/userModels');

cloudinary.config({
  cloud_name: 'dsvv0x4oc',
  api_key: '126376149365855',
  api_secret: 'zSUUK-_Vs62ER41H-9wXCd87BnY'
});

module.exports = {
  UploadImage(req, res) {
    cloudinary.uploader.upload(req.body.image, async result => {
      await User.update(
        {
          _id: req.user._id
        },
        {
          $push: {
            images: {
              imgId: result.public._id,
              imgVersion: result.version
            }
          }
        }
      )
        .then(() =>
          res
            .status(HttpStatus.OK)
            .json({ message: 'Image uploaded successfully' })
        )
        .catch(err =>
          res
            .status(HttpStatus.INTERNAL_SERVER_ERROR)
            .json({ essage: 'Error uploading image' })
        );
    });
  },

  async SetDefaultImage(req, res) {
    const { imgId, imgVersion } = req.params;
    
    await User.update(
      {
        _id: req.user._id
      },
      {
        picId: imgId,
        picVersion: imgVersion
      }
    )
      .then(() =>
        res.status(HttpStatus.OK).json({ message: 'Default image set' })
      )
      .catch(err =>
        res
          .status(HttpStatus.INTERNAL_SERVER_ERROR)
          .json({ essage: 'Error occured' })
      );
  }
};
