import React, { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import * as S from "./styles";

const videoConstraints = {
	facingMode: "user",
};

export default function Camera() {
	const webcamRef = useRef<Webcam>(null);
	const [imgSrc, setImgSrc] = useState<string | null>(null);

	const capture = useCallback(() => {
		const imageSrc = webcamRef.current?.getScreenshot();
		setImgSrc(imageSrc ?? null);
	}, [webcamRef, setImgSrc]);

	return (
		<S.Container>
			<S.CameraContainer>
				<Webcam
					audio={false}
					ref={webcamRef}
					screenshotFormat="image/jpeg"
					videoConstraints={videoConstraints}
					height={250}
				/>
			</S.CameraContainer>

			<S.Button onClick={capture}>Capture photo</S.Button>
			{imgSrc && <img src={imgSrc} alt="user" width={250} />}
		</S.Container>
	);
}
