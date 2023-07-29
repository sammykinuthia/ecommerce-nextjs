"use client"
import { Slide } from 'react-slideshow-image';

export default function Hero() {
    const spanStyle = {
        padding: '20px',
        background: '#efefef',
        color: '#000000'
    }

    const divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
        aspectRatio:"video",
        width:"100%",
        minHeight:"200px"
        // height: '400px'
    }
    const slideImages = [
        {
            url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
            caption: 'Slide 1'
        },
        {
            url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
            caption: 'Slide 2'
        },
        {
            url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
            caption: 'Slide 3'
        },
    ];
 

    return (
        <div className="slide-container my-12 rounded-2xl overflow-hidden">
            <Slide >
                {slideImages.map((slideImage, index) => (
                    <div key={index}>
                        <div className='md:h-72 xl:h-80 2xl:h-96' style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                            <span style={spanStyle}>{slideImage.caption}</span>
                        </div>
                    </div>
                ))}
            </Slide>
        </div>
    )

}

