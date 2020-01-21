/* istanbul ignore file */
import styled from 'styled-components';
import { StyleUtils } from '../../index';

const { pxToEm } = StyleUtils.ConverterUtils;

export const StoryArticle = styled.article`
    background: #f8f9fa;
    box-sizing: border-box;
    padding: 30px 2%;
    min-height: 100vh;
`;

export const StoryHeader = styled.header`
    margin-bottom: ${pxToEm(20)};
`;

export const StorySection = styled.section`
    img {
        display: block;
        margin: 0 auto ${pxToEm(30)};
        max-width: 80%;
    }
`;

export const NoShow = styled.span`
    opacity: 0;
    position: relative;
    visibility: hidden;
    z-index: -1;
`;