import dynamic from "next/dynamic";

const AgoraRTMWrapper = dynamic(() => import("@/component/RTMWrapper"), {
	ssr: false,
});

export default function Home() {
	return (
		<div>
			<AgoraRTMWrapper />
		</div>
	);
}
