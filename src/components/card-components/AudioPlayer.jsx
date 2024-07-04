import React, { useState, useRef, useEffect } from "react";
import { FaPause, FaPlay } from "react-icons/fa";

const AudioPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(0.05);
    const audioRef = useRef(null);

    const song = {
        title: 'Dove - Bôa',
        song: 'music/song.mp3'

    }

    const handleSeek = (e) => {
        audioRef.current.currentTime = e.target.value;
        setCurrentTime(e.target.value);
    };

    const handleTimeUpdate = () => {
        setCurrentTime(audioRef.current.currentTime);
        setDuration(audioRef.current.duration);
    };

    const handlePlay = () => {
        audioRef.current.play();
        setIsPlaying(true);
    };

    const handlePause = () => {
        audioRef.current.pause();
        setIsPlaying(false);
    };

    const handlePlayPause = () => {
        if (isPlaying) {
            handlePause();
        } else {
            handlePlay();
        }
    };

    const handleVolumeChange = (e) => {
        const newVolume = e.target.value;
        audioRef.current.volume = newVolume;
        setVolume(newVolume);
    };

    function formatDuration(durationSeconds) {
        const minutes = Math.floor(durationSeconds / 60);
        const seconds = Math.floor(durationSeconds % 60);
        const formattedSeconds = seconds.toString().padStart(2, "0");
        return `${minutes}:${formattedSeconds}`;
    }

    useEffect(() => {
        const audio = audioRef.current;
        audio.addEventListener("timeupdate", handleTimeUpdate);

        const playAudioOnLoad = async () => {
            try {
                await audio.play();
                setIsPlaying(true);
            } catch (err) {
                console.error("Failed to play audio on load", err);
            }
        };

        playAudioOnLoad();

        return () => {
            audio.removeEventListener("timeupdate", handleTimeUpdate);
        };
    }, []);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume; // Ensure volume is set on mount
        }
    }, [volume]);

    return (
        <div className="w-full card-bg flex flex-col items-center p-2">
            <h3 className="p-3">{song.title}</h3>
            <div className="flex flex-col w-full">
                <input className="progessbar"
                    type="range"
                    min="0"
                    max={duration}
                    value={currentTime}
                    onChange={handleSeek}
                />
                <audio src={song.song} loop ref={audioRef}></audio>
                <div className="Track-duration flex justify-between p-2">
                    <p className="p-2">{formatDuration(currentTime)}</p>
                    <button onClick={handlePlayPause}>
                        <span>
                            {isPlaying ? <FaPause /> : <FaPlay />}
                        </span>
                    </button>
                    <p className="p-2">{formatDuration(duration)}</p>
                </div>
                <div className="flex items-center flex-col">
                    <input className="volume"
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={volume}
                        onChange={handleVolumeChange}
                    />
                    <p className="p-2">volume</p>
                </div>
            </div>
        </div>
    );
};

export default AudioPlayer;
