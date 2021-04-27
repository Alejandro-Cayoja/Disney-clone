import styled from "styled-components";

const Home = (props) => {
    return (
        <Container>
            <h2>Hallo</h2>
            <h2>Hallo</h2>
        </Container>
    )
};

const Container = styled.main`
    position: relative;
    min-height: calc(100vh -250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);

    
    `;

export default Home;