import React, { useState, useEffect } from "react";
import { Text, View } from "../styled";

import {
    RTCPeerConnection,
    mediaDevices,
    RTCIceCandidate,
    RTCSessionDescription,
    MediaStream,
} from "react-native-webrtc";


const configuration = {
    iceServers: [{ urls: ["stun:stun1.l.google.com:19302", "stun:stun2.l.google.com:19302"], }],
    iceCandidatePoolSize: 10,
};

function MainVideoFeed({ }) {
    const [localStream, setLocalStream] = useState(null);
    const [remoteStream, setRemoteStream] = useState(null);
    const [cachedLocalPC, setCachedLocalPC] = useState(null);
    const [isMuted, setIsMuted] = useState(false);
    const [isOffCam, setIsOffCam] = useState(false);


    return <View>
        <Text>Videofeed</Text>
    </View>


}
export default MainVideoFeed