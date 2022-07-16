import styled from "styled-components";

const Welcome = styled.h2`
    text-align: center;
`

export const Inicio = () => {
    return (
        <>
            <Welcome>Seja Bem-vindo</Welcome>
            <Welcome>Logo acima, você poderá escolher quais tópicos quera dar uma olhada</Welcome>
        </>
    )
}