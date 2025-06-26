import styled from "styled-components";
import Text from "../atoms/Text";

const LinkContainer = styled.a`
    text-decoration: none;

    &:hover {
        box-shadow: 5px 5px 1rem var(--Neutral_300);
        transform: scale(1.05);
    }

`

const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.5rem;
    border: 1px solid var(--Neutral_200);
    border-radius: 0.25rem;

    @media (max-width: 767.98px) {
        flex-direction: column;
    }
`;
const VideoContainer = styled.div`
    flex: 1;

    img {
        width: 100%;
    }
`;
const ContentContainer = styled.div`
    flex: 1;
`;

function LessonCard({ title, status, publish_date, video_url }) {
    function getYoutubeVideoId(url) {
        const rx =
            /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/|v\/))([A-Za-z0-9_-]{11})(?:\S+)?$/;

        const match = url.match(rx);
        return match && match[1].length === 11 ? match[1] : null;
    }

    const videoId = getYoutubeVideoId(video_url);


    return (
        <LinkContainer href={video_url} target="_blank">
            <Container>
                <VideoContainer>
                    <img
                        src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
                        alt={title}
                    />
                </VideoContainer>
                <ContentContainer>
                    <Text type="medium" text={title} />
                    <p>Status: {status}</p>
                    <p>
                        Publicado:{" "}
                        {new Date(publish_date).toLocaleDateString("pt-BR")}
                    </p>
                </ContentContainer>
            </Container>
        </LinkContainer>
    );
}

export default LessonCard;
