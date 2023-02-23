import styled from 'styled-components';

export const TaskContainer = styled.div`
    .card {
        width: 100%;
        height: 72px;
        background-color: #333333;
        padding: 1rem;

        display: flex;
        align-items: center;
        justify-content: space-between;

        & {
            margin-bottom: .8rem;
        }

        .btn-completed {
            div {
                width: 1.4rem;
                height: 1.4rem;
                border: 2px solid #4EA8DE;
                border-radius: 50%;
            }

            svg {
                width: 1.4rem;
                height: 1.4rem;
                color: #4EA8DE;
            }
        
        }


        button {
            background: transparent;
            border: none;
            cursor: pointer;

            svg {
                color: #fff;
                font-size: 1rem;
            }
        }
    }
`;

interface TitleProps {
    isCompleted: boolean;
}


export const Title = styled.div<TitleProps>`
        color: ${({isCompleted}) => isCompleted ? '#ccc' : '#fff'};
        text-decoration: ${({isCompleted}) => isCompleted ? 'line-through' : 'none'};
`;