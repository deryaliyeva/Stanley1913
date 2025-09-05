function MessiVideoPlayer() {
    return (
        <div className="w-full relative pb-[56.25%]">
            <iframe
                src="https://player.vimeo.com/video/1097028467?h=a260adeaa5&title=0&byline=0&portrait=0&muted=1&autoplay=1&loop=1&app_id=122963"
                className="absolute top-0 left-0 w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
}

export default MessiVideoPlayer;
