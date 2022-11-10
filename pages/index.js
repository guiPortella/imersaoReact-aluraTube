import config from "../config.json";
import styled from "styled-components";

function HomePage() {
    const estiloHomePage = { background: "red" };

    // console.log(config.playlists)

    return (
        <div style={estiloHomePage}>
            <Menu />
            <Header />
            <TimeLine playlists={config.playlists} />
        </div>

    );
};

export default HomePage

function Menu() {
    return (
        <div>
            Menu
        </div>
    );
};

const StyledHeader = styled.div`
    img{
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info{
        margin-top: 50px;
        display: flex;
        align-items: center;
        width:100%;
        padding: 16px 32px;
        gap: 16px;
    }
`;
function Header() {
    return (
        <StyledHeader>
            {/* <img src="" /> */}
            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`} />
                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.job}
                    </p>
                </div>
            </section>
        </StyledHeader>
    );
};

function TimeLine(props) {
    // console.log("Dentro do componente", props.playlists);
    const playlistNames = Object.keys(props.playlists);

    //Statement
    //Retorno por expressão

    return (
        <div>
            {playlistNames.map((playlistNames) => {
                const videos = props.playlists[playlistNames];
                console.log(playlistNames);
                console.log(videos);
                return videos.map((video) => {
                    return(
                        <a href={video}>
                            <img src={video.thumb} />
                            <span>
                                {video.title}
                            </span>
                        </a>
                    )
                }); 
            })}
        </div>
    );
};