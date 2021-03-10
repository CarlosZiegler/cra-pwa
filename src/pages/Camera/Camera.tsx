import React, { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import styled from "styled-components";


const videoConstraints = {
    facingMode: "user"
  };

export default function Camera() {
    const webcamRef = useRef<Webcam>(null);
    const [imgSrc, setImgSrc] = useState<string | null>(null);

    const capture = useCallback(() => {
        const imageSrc = webcamRef.current?.getScreenshot();
        setImgSrc(imageSrc ?? null);
    }, [webcamRef, setImgSrc]);

    return (
        <Container>
            <CameraContainer>
                <Webcam
                    audio={false}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    videoConstraints={videoConstraints}
                    height={250}
                    

                />
            </CameraContainer>
            
            
            <Button onClick={capture}>Capture photo</Button>
            {imgSrc && (
                <img
                    src={imgSrc}
                    alt="user"
                    width={250}
                />
            )}
        </Container>
    );
}

const Button = styled.button`
    margin:10px;
    background:#005596;
    border-radius: 10px;
    padding: 5px 10px;
    color:white;
`
const Container = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const CameraContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 300px;
    margin:10px auto;
    
`