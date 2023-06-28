interface IAudioWordProps {
  audio: string;
}

const AudioWord = ({ audio }: IAudioWordProps) => {
  const handlePlayAudio = () => {
    const wordAudio = new Audio(audio);
    wordAudio.play();
  };

  return (
    <button
      className="w-16 h-16 rounded-full bg-[#e9d0fa]"
      onClick={() => handlePlayAudio()}
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M15 12.3301L9 16.6603L9 8L15 12.3301Z" fill="#a645f0" />
      </svg>
    </button>
  );
};

export default AudioWord;
