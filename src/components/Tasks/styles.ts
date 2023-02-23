import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
 
    color: #fff;

    .container-cards {
        max-width: 736px;
        width: 100%;
        margin: 0 auto;
        padding-top: 84px;

        .items {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 24px;

            h2 {
                color: #4EA8DE;
                display: flex;
                align-items: center;
                gap: 10px;
            }

            .radius-items {
                    width: 26px;
                    height: 22px;
                    color: #D9D9D9;
                    font-size: 14px;
                    background-color: #333333;
                    padding: 3px 8px;
                    border-radius: 50%;
            }

            h4 {
                color: #8284FA;
            }
        }
    }

`;


export const EmptyContainer = styled.div`
        border-top: 1px solid #333333; 

        .empty-info {
            display: flex;
            align-items: center;
            flex-direction: column;
            margin-top: 4rem;

            img {
                color: red;
                margin-bottom: 1rem;
            }

            p {
                color: #808080;
                font-weight: 700;
            }

            span {
                color: #808080;
            }
        }
`;