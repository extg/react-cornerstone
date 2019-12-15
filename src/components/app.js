import React from 'react'
import Image from '../../src/components/Image.js'
import cornerstone from '../../public/cornerstone/cornerstone2.js';
import DcmLoader from '../../public/cornerstone/DcmLoader.js';

// export default class App extends React.Component {
//
//     constructor(props) {
//         super(props);
//     }
//
//
//     handleDocumentUploadChange(event) {
//
//         var fileInput = document.querySelector("#input-file");
//         var element = document.getElementById('dicomImage');
//
//
//         if (fileInput.files) {
//             var file = fileInput.files[0];
//             var imageId = DcmLoader.wadouri.fileManager.add(file);
//             window.addEventListener('resize', this.handleResize);
//             cornerstone.loadImage(imageId).then(function (image) {
//                 var viewport = cornerstone.getDefaultViewport(element.children[0], image);
//
//                 cornerstone.displayImage(element, image, viewport);
//
//                 cornerstoneTools.mouseInput.enable(element);
//                 cornerstoneTools.mouseWheelInput.enable(element);
//                 cornerstoneTools.wwwc.activate(element, 1); // ww/wc is the default tool for left mouse button
//                 cornerstoneTools.pan.activate(element, 2); // pan is the default tool for middle mouse button
//                 cornerstoneTools.zoom.activate(element, 4); // zoom is the default tool for right mouse button
//                 cornerstoneTools.zoomWheel.activate(element); // zoom is the default tool for middle mouse wheel
//
//                 cornerstoneTools.touchInput.enable(element);
//                 cornerstoneTools.panTouchDrag.activate(element);
//                 cornerstoneTools.zoomTouchPinch.activate(element);
//
//             });
//
//
//         }
//
//     }
//
//
//     componentDidMount() {
//         var element = document.getElementById('dicomImage');
//         cornerstone.enable(element);
//
//     }
//
//
//     // render() {
//     //     return (
//     //         <center>
//     //             <div>
//     //                 <div id="dicomImage" style={{width: '512px', height: '512px'}}/>
//     //                 <input id='input-file' multi type='file'
//     //                        onChange={this.handleDocumentUploadChange.bind(null, this)}/>
//     //             </div>
//     //         </center>
//     //     )
//     // }
//
//
// }

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    renderImage() {
        return <Image />
    }


    render() {
        return (
            <div className="container">
                {this.renderImage()}
            </div>
        );
    }
}