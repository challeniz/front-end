import React from 'react';
import styled from 'styled-components';

const Footer = () => {

    return(
        <div>
            <FooterBox>
                <h4>
                    ©2023.challenge All rights reserved.
                </h4>
            </FooterBox>
        </div>
    )
};

const FooterBox = styled.div`
position: relative;
	top: 54rem;
	bottom: 0;
	width: 100vw;
	height: 180px;
	background-color: #339af0;
	text-align: center;

    h4{
        color: #eaeaea;
        position: absolute;
        top: 50%;
        text-align: center;
    }

`
export default Footer;