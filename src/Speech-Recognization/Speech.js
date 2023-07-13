import './Speech.css'
import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Dictaphone = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();
 
  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }else{
    SpeechRecognition.startListening({ continuous: true })
  }

  return (
    <div className='container1'>
      <div className='Main-Context'>
        <p>{transcript}</p>
      </div>
      <p>Microphone: {listening ? 'on' : 'off'}</p>

      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
    </div>
  );
};
export default Dictaphone;