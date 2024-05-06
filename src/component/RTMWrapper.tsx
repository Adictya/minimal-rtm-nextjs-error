"use client";
import AgoraRtm from "agora-rtm-sdk";
import { useEffect } from "react";

export default function AgoraRtmWrapper() {
	useEffect(() => {
		console.log(AgoraRtm);
	}, []);
	return <div>Using Agora RTM {AgoraRtm.VERSION}</div>;
}
