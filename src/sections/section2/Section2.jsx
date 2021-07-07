/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./Section2.css";
import { Image1 } from "../../svg";
import image2 from "../../resources/image-section-2.svg";

export default ({ visible }) => {
  return (
    <div id="sobremi" className="conteiner-section-2">
      {visible ? (
        <div className="center">
          <div className="left">
            <h1>Sobre mí</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse venenatis molestie vehicula. Nam porta sapien at augue
              consequat posuere vel quis lacus. Donec sit amet egestas nulla.
              Integer magna lacus, tincidunt eget nunc sed, tristique ultrices
              urna. Duis nec turpis consectetur, malesuada ex at, dignissim
              lacus. Cras erat nulla, consectetur nec laoreet sed, mattis in
              massa. Cras pellentesque varius leo vel aliquam. Nam ac neque
              vulputate, fermentum mauris a, accumsan est. Nam lacus augue,
              pellentesque imperdiet felis sed, rutrum congue mauris. Vestibulum
              ante ipsum primis in faucibus orci luctus et ultrices posuere
              cubilia curae; Interdum et malesuada fames ac ante ipsum primis in
              faucibus. Aenean tristique ligula eget lacus accumsan auctor.
              Nullam non laoreet velit, quis dapibus enim. Donec aliquam odio
              sit amet molestie accumsan. Etiam quis placerat massa, sed
              volutpat leo.
            </p>
          </div>
          <div className="rigth">
            {/* <img src={image2} alt="ilustration" /> */}
            <object type="image/svg+xml" data={image2}>
              svg-animation
            </object>
            {/* <Image1 /> */}
          </div>
        </div>
      ) : null}
    </div>
  );
};
