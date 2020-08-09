import { createGlobalStyle } from "styled-components";

const globalStyles = createGlobalStyle`
    
    a{
        text-decoration:none;
        color:inherit;
    }
    body{
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size:16px;
        margin : 0;
    }
`;

export default globalStyles;