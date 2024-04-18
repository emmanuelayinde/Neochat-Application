import { Image } from "@chakra-ui/react";
import { useState, useEffect } from "react";





export const ChatImageGallery = ({ images }: { images: string[] }) => {
    const [displayedImages, setDisplayedImages] = useState(images);
    const [gridTemplateColumns, setGridTemplateColumns] = useState<string | undefined>(undefined);
    const [gridTemplateRows, setGridTemplateRows] = useState<string | undefined>(undefined);
    // const [gridSpan, setGridSpan] = useState<{ start: number, end: number } | undefined>(undefined);
    
    useEffect(() => {
        const imageGrid = () => {
            if (images.length === 2) {
                setGridTemplateColumns('repeat(2, 145px)')
                setGridTemplateRows('repeat(1, 145px)')
                return
            }
            else if (images.length === 3) {
                setGridTemplateColumns('repeat(2, 145px)')
                setGridTemplateRows('repeat(2, 145px)')
                return
            }
            else if (images.length >= 4) {
                setGridTemplateColumns('repeat(2, 145px)')
                setGridTemplateRows('repeat(2, 145px)')
                setDisplayedImages(images.slice(0, 4))
                return
            }
            else {
                return
            }
        }

        return imageGrid()
    }, [images])


    return (
        <div className="grid gap-1.5" style={{ gridTemplateColumns, gridTemplateRows }}>
            {displayedImages.map((image, index) => (
                <div
                    key={image + index}
                    style={{
                        gridRowStart: images.length === 3 && index === 0 ? 'span 2' : undefined,
                        // gridColumnStart: images.length === 3 && index === 2 ? 'span 2' : undefined,
                        gap: 1,
                    }}
                    className={`relative rounded-md cursor-pointer overflow-hidden  ${index === 3 && images.length > 4 && 'opacity-50'}`}
                >
                    {index === 3 && images.length > 4 ? <div className="overlay">{`+${images.length - 4}`}</div> : null}
                    <Image
                        src={image}
                        alt={`Image ${index + 1}`}
                        className="w-full h-full object-cover"
                    />
                </div>
            ))}
        </div>
    );
}


export const ChatVideoGallery = () => {
    // const [videos, setVideos] = useState([sampleImages[0], sampleImages[1], sampleImages[2], sampleImages[3]]);

    return (
        <div>
            video
        </div>
    );
}











{/* <div>
<Gallery
    images={images}
    onSelect={() => { }}
    enableImageSelection={false}
    rowHeight={175}
    maxRows={2}
    margin={1.5}
    // thumbnailImageComponent={(item) => <img src={item.imageProps.src} className="border-2 border-red-500 rounded-lg" />}
/>
</div> */}