import { useEffect, useState } from 'react';

let recognition: any = null;

if ('webkitSpeechRecognition' in  window) {
    recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.lang = 'en-US';
}

const useRecognition = () => {
    const [text, setText] = useState<string>('');
    const [isListening, setIsListening] = useState<boolean>(false);

    useEffect(() => {
        if(!recognition) return;
        recognition.onresult = (event: SpeechRecognitionEvent) => {
            console.log(event, 'event')
            setText(event.results[0][0].transcript);
            recognition.stop();
            setIsListening(false);
        }
    }, []);

    const startRecordSpeech = (): void => {
        setText('');
        setIsListening(true);
        recognition.start();
    };

    const stopRecordSpeech = (): void => {
        setIsListening(false);
        recognition.stop();
    };

    return {
        startRecordSpeech,
        isListening,
        stopRecordSpeech,
        text,
        hasRecognitionSupport: !!recognition,
    }
}

export default useRecognition;
