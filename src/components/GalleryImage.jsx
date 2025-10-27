import '../css/GalleryImage.css';
import { useState } from 'react';

const GalleryImage = ({before, after}) => {
    // Track whether image is in "before" state and whether it's locked by click
    const [isShowingBefore, setIsShowingBefore] = useState(false);
    const [isLocked, setIsLocked] = useState(false);

    // Handle hover events only if not locked by click
    const handleMouseEnter = () => {
        if (!isLocked) setIsShowingBefore(true);
    };

    const handleMouseLeave = () => {
        if (!isLocked) setIsShowingBefore(false);
    };

    // Handle click - toggle locked state and force image state
    const handleClick = () => {
        setIsLocked(!isLocked);
        setIsShowingBefore(!isShowingBefore);
    };

    return (
        <div 
            className="gallery-image-container"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
        >
            <img 
                className="displayImg" 
                src={isShowingBefore ? before : after}
                alt={isShowingBefore ? "Before" : "After"}
            />
        </div>
    );
};

export default GalleryImage;