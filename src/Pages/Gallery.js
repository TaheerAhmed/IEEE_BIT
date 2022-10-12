import React from 'react';
import axios from 'axios';
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';
// https://www.npmjs.com/package/react-image-gallery

const image = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];

const MyGallery = () => {
  const [images, setImages] = React.useState(null);

  React.useEffect(() => {
    let shouldCancel = false;

    const call = async () => {
      const response = await axios.get(
        'https://google-photos-album-demo2.glitch.me/4eXXxxG3rYwQVf948'
      );
      if (!shouldCancel && response.data && response.data.length > 0) {
        setImages(
          response.data.map((url) => ({
            original: `${url}=w1024`,
            thumbnail: `${url}=w100`,
          }))
        );
      }
    };
    call();
    return () => (shouldCancel = true);
  }, []);

    return (
        <div className="gallery" style={{
            backgroundColor: "wheat",
            height: "100vh",
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            color: "#ffffff",
            // borderRadius: 10,
            boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.5)",
            border: "1px solid #ffffff",
      }}>
            {image ? <ImageGallery fullscreen showIndex   items={image} /> : null}
      </div>
    );
};

export default MyGallery;
