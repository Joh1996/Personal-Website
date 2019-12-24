import React from "react";
// import Gallery from "react-photo-gallery";
import Gallery from "react-grid-gallery";
import { Container } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";
import "../css/MyStyle.scss";

let imgStyle = {
  enableImageSelection: "false",
  isSelected: "false",
  minHeight: "1",
  margin: 25
};

/*
* No reliable instagram/flickr 3rd party components for large image imports
*
*/

const GalleryImages = [
  {
    src: "https://farm8.staticflickr.com/7856/47265870961_58d52ae1aa_o.jpg",
    thumbnail:
      "https://farm8.staticflickr.com/7856/47265870961_58d52ae1aa_o.jpg",
    thumbnailWidth: 500,
    thumbnailHeight: 500
  },
  {
    src: "https://farm8.staticflickr.com/7871/47265871421_ec83b2b305_o.jpg",
    thumbnail:
      "https://farm8.staticflickr.com/7871/47265871421_ec83b2b305_o.jpg",
    thumbnailWidth: 400,
    thumbnailHeight: 350
  },

  {
    src: "https://farm8.staticflickr.com/7899/47265871181_e55514b2fb_o.jpg",
    thumbnail:
      "https://farm8.staticflickr.com/7899/47265871181_e55514b2fb_o.jpg",
    thumbnailWidth: 350,
    thumbnailHeight: 352
  },
  {
    src: "https://farm8.staticflickr.com/7822/47214044272_cb413549b1_o.jpg",
    thumbnail:
      "https://farm8.staticflickr.com/7822/47214044272_cb413549b1_o.jpg",
    thumbnailWidth: 480,
    thumbnailHeight: 512
  },
  {
    src: "https://farm8.staticflickr.com/7919/32325128807_7ca725cce4_o.jpg",
    thumbnail:
      "https://farm8.staticflickr.com/7919/32325128807_7ca725cce4_o.jpg",
    thumbnailWidth: 600,
    thumbnailHeight: 500
  },
  {
    src: "https://farm8.staticflickr.com/7906/47265871471_eb234bdffc_o.jpg",
    thumbnail:
      "https://farm8.staticflickr.com/7906/47265871471_eb234bdffc_o.jpg",
    thumbnailWidth: 420,
    thumbnailHeight: 440
  },
  {
    src: "https://farm8.staticflickr.com/7802/47265871491_3a94546239_o.jpg",
    thumbnail:
      "https://farm8.staticflickr.com/7802/47265871491_3a94546239_o.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 312
  },
  {
    src: "https://farm8.staticflickr.com/7912/47265871551_59a628c8e8_o.jpg",
    thumbnail:
      "https://farm8.staticflickr.com/7912/47265871551_59a628c8e8_o.jpg",
    thumbnailWidth: 420,
    thumbnailHeight: 412
  },
  {
    src: "https://farm8.staticflickr.com/7880/47265871121_55fe50e3ba_o.jpg",
    thumbnail:
      "https://farm8.staticflickr.com/7880/47265871121_55fe50e3ba_o.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 312
  },
  {
    src: "https://farm8.staticflickr.com/7880/47265871141_eef5546d8d_o.jpg",
    thumbnail:
      "https://farm8.staticflickr.com/7880/47265871141_eef5546d8d_o.jpg",
    thumbnailWidth: 520,
    thumbnailHeight: 512
  },
  {
    src: "https://farm8.staticflickr.com/7849/47265871101_043aff5326_o.jpg",
    thumbnail:
      "https://farm8.staticflickr.com/7849/47265871101_043aff5326_o.jpg",
    thumbnailWidth: 420,
    thumbnailHeight: 412
  },
  {
    src: "https://farm8.staticflickr.com/7894/40301292823_bac3e44a8a_o.jpg",
    thumbnail:
      "https://farm8.staticflickr.com/7894/40301292823_bac3e44a8a_o.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 312
  },
  {
    src: "https://farm8.staticflickr.com/7892/47265871831_98cb8361da_o.jpg",
    thumbnail:
      "https://farm8.staticflickr.com/7892/47265871831_98cb8361da_o.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 312
  },
  {
    src: "https://farm8.staticflickr.com/7894/47265871611_379248486b_o.jpg",
    thumbnail:
      "https://farm8.staticflickr.com/7894/47265871611_379248486b_o.jpg",
    thumbnailWidth: 420,
    thumbnailHeight: 412
  },
  {
    src: "https://farm8.staticflickr.com/7846/47265871661_93fce57e4d_o.jpg",
    thumbnail:
      "https://farm8.staticflickr.com/7846/47265871661_93fce57e4d_o.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 312
  },
  {
    src: "https://farm8.staticflickr.com/7856/47265871751_1e714bb27b_o.jpg",
    thumbnail:
      "https://farm8.staticflickr.com/7856/47265871751_1e714bb27b_o.jpg",
    thumbnailWidth: 420,
    thumbnailHeight: 412
  },
  {
    src: "https://farm8.staticflickr.com/7811/40301292623_f1acc013fe_o.jpg",
    thumbnail:
      "https://farm8.staticflickr.com/7811/40301292623_f1acc013fe_o.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 312
  },
  {
    src: "https://farm8.staticflickr.com/7889/47265871241_ae5a5619f8_o.jpg",
    thumbnail:
      "https://farm8.staticflickr.com/7889/47265871241_ae5a5619f8_o.jpg",
    thumbnailWidth: 420,
    thumbnailHeight: 412
  },
  {
    src: "https://farm8.staticflickr.com/7856/47265871711_82fd1b4d5e_o.jpg",
    thumbnail:
      "https://farm8.staticflickr.com/7856/47265871711_82fd1b4d5e_o.jpg",
    thumbnailWidth: 520,
    thumbnailHeight: 512
  }
];

// &nbsp == spaghetti

class Illustrations extends React.Component {
  render() {
    return (
      <Container style={imgStyle} className="image-container">
        <SocialIcon
          id="art-social"
          url="https://www.flickr.com/photos/156683253@N07/"
          style={{ height: 50, width: 50 }}
          target="_blank"
        />
        &nbsp; &nbsp; &nbsp;
        <SocialIcon
          id="art-social"
          url="https://www.instagram.com/_justinwastaken/"
          style={{ height: 50, width: 50 }}
          target="_blank"
        />
        <Gallery id="gallery-panel" images={GalleryImages} />
      </Container>
    );
  }
}

export default Illustrations;
