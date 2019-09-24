import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import PinchZoomPan from "react-responsive-pinch-zoom-pan";
import ReactImageMagnify from 'react-image-magnify';


import watchImg1 from './images/T_cancer.jpg';



class T extends React.Component {
    render() {
        return (
            <div className="fluid">
                <div className="fluid__image-container">
                    <ReactImageMagnify {...{
                        smallImage: {
                            alt: 'Wristwatch by Ted Baker London',
                            isFluidWidth: true,
                            src: watchImg1,
                        },
                        largeImage: {
                            src: watchImg1,
                            width: 1200,
                            height: 1800
                        }
                    }} />
				</div>
		</div>)
	}
}

export default T
