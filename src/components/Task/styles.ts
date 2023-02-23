import styled from 'styled-components';

export const TaskContainer = styled.div`
    
    .card {
        width: 100%;
        min-height: 72px;
        background-color: #333333;
        padding: 1rem;

        display: flex;
        align-items: center;
        justify-content: space-between;

        .card-infos {
            display: flex;
            gap: 1.2rem;
        }

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

            img {
                transition: all .4s ease;

                &:hover {
                   filter: brightness(1.5);
                   transform: scale(1.2);
                }
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