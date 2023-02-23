import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 200px;

    background-color: #0D0D0D;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;

    form {
        position: absolute;
        max-width: 736px;
        width: 100%;
        height: 200px;
        display: flex;
        align-items: center;
        gap: 8px;
        bottom: calc(-200px / 2);

        input {
            width: 100%;
            height: 54px;
            background-color: #262626;
            outline: none;
            border: none;
            color: #fff;
            padding: 0 1rem;
            border-radius: 8px;


            &::placeholder {
                color: #808080;
            }
        }

        button {
            width: 90px;
            height: 52px;
            border: none;
            outline: none;
            background-color: #1E6F9F;
            border-radius: 8px;
            color: #fff;
        }
    }

    img {
        
    }
`;
