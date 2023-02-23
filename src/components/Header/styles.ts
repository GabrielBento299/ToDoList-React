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

        @media screen and (max-width: 736px) {
            width: 95%;
        }
    }
`;

export const Input = styled.input`
            width: 100%;
            height: 54px;
            background-color: #262626;
            outline: none;
            border: none;
            color: #fff;
            padding: 0 1rem;
            border-radius: 8px;

            transition: all .3s;

            &::placeholder {
                color: #808080;
            }

            &:focus {
                border: 2px solid #1E6F9F;
                padding: 1.2rem;
            }    
`;

export const Button = styled.button`
            width: 90px;
            height: 52px;
            border: none;
            outline: none;
            background-color: #1E6F9F;
            border-radius: 8px;
            color: #fff;
            cursor: pointer;

            display: flex;
            align-items: center;
            justify-content: center;
            gap: .5rem;

            transition: filter .3s ease-in-out;

            &:hover {
                filter: brightness(1.1);
            }
`;