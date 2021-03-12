import axios from "axios";
import useSWR from "swr";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
import { register } from "../../serviceWorkerRegistration";
import * as S from "../../styles";
import React from "react";
import { FeaturesContainer } from "./styles";

const fetcher = (url: string) => axios.get(url);

const detectedFeatures = () => ({
	OfflineCapabilities: "caches" in window,
	PushNotifications: "pushManager" in register,
	AddtoHomeScreen:
		(document.createElement("link") as HTMLLinkElement).relList.supports(
			"manifest"
		) && "onbeforeinstallprompt" in window,
	BackgroundSync: "sync" in register,
	NavigationPreload: "navigationPreload" in register,
	SilentPush: "budget" in navigator && "reserve" in navigator["budget"],
	StorageEstimation:
		"storage" in navigator && "estimate" in navigator["storage"],
	PersistentStorage:
		"storage" in navigator && "persist" in navigator["storage"],
	WebShare: "share" in navigator,
	MediaSession: "mediaSession" in navigator,
	MediaCapabilities: "mediaCapabilities" in navigator,
	DeviceMemory: "deviceMemory" in navigator,
	GettingInstalledRelatedApps: "getInstalledRelatedApps" in navigator,
	PaymentRequest: "PaymentRequest" in window,
	CredentialManagement: " credentials" in navigator,
});

export default function Home() {
	const { data, error } = useSWR(`https://swapi.dev/api/people/1/`, fetcher);
	const features = detectedFeatures();

	if (error) return <div>failed to load</div>;
	if (!data) return <div>loading...</div>;
	const { name, birth_year, gender } = data.data;

	document.addEventListener(
		"message",
		function (event: any) {
			console.log("Received post message", event);

			alert(event.data);
		},
		false
	);

	return (
		<S.Container>
			<h2>API</h2>
			<p id="name">Name: {name}</p>
			<p id="birth">Birth: {birth_year}</p>
			<p id="gender">Gender: {gender}</p>

			<div>
				<h2>Features PWA</h2>

				{features &&
					Object.entries(features).map((element, index) => (
						<FeaturesContainer key={index}>
							{element[0]}
							{element[1] ? (
								<AiFillCheckCircle style={{ color: "green" }} />
							) : (
								<AiFillCloseCircle style={{ color: "red" }} />
							)}
						</FeaturesContainer>
					))}
			</div>
		</S.Container>
	);
}
