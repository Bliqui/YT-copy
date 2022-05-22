export const VideoPlayer = ({videoId}) => {
    return(
        <iframe width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoId}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
        </iframe>
    )
}