"use client"

import { useVapi } from "@/modules/widget/hooks/use-vapi";
import { Button } from "@workspace/ui/components/button";


export default function Page() {
  const { startCall, endCall, isConnected, isConnecting, isSpeaking, transcript } = useVapi();

  return (
    <div className="flex items-center justify-center min-h-svh">
        <Button onClick={() => startCall()}>start call</Button>
        <Button onClick={() => endCall()}>end call</Button>
        <p>is connected: {isConnected ? "true" : "false"}</p>
        <p>is connecting: {isConnecting ? "true" : "false"}</p>
        <p>is speaking: {isSpeaking ? "true" : "false"}</p>
        <p>transcript: {JSON.stringify(transcript)}</p>
            
    </div>
  )
}
