import React from 'react';


class ImageCard extends React.Component{
    

    render(){
        return(
            <div className="image-container">
                <img src="https://picsum.photos/200/300" alt="" className="image-view"/>
            </div>
        )
    }
}

export default ImageCard;