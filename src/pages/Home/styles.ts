import { styled } from "styled-components";

export const Container = styled.div`
    margin: 0 auto;
`;

export const ProjectsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    gap: 1em;
    margin-top: 2em;
    justify-items: center;
`;

export const CenteredHeader = styled.h1`
    margin: 64px 0 16px;
    text-align: center;
    font-size: 64px;
`;