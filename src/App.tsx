import React from 'react';
import CustomButton from './components/CustomButton';
import RenderTextComponent from './components/RenderTextComponent';
import useRecognition from './components/useRecognition';

function App() {
    const {
        text,
        isListening,
        startRecordSpeech,
        stopRecordSpeech,
        hasRecognitionSupport,
    } = useRecognition();

    return (
    <div className="app">
        {
            hasRecognitionSupport ? (
                <>
                    { isListening ? 'Говорите...' : ''}

                    <RenderTextComponent text={text} />

                    <CustomButton
                        btnText={isListening ? 'завершить' : 'распознать речь'}
                        onClick={() => isListening ? stopRecordSpeech() : startRecordSpeech()}
                    />
                </>
            ) : <p>Ваш браузер не поддерживает запись речи.</p>
        }
    </div>
  );
}

export default App;
