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
        <CameraContainer>
            <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                videoConstraints={videoConstraints}
                height={600}

            />
            
            <button onClick={capture}>Capture photo</button>
            {imgSrc && (
                <img
                    src={imgSrc}
                    alt="user"
                    width={600}
                />
            )}
        </CameraContainer>
    );
}

const CameraContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`