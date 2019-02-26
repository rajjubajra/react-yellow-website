import React from 'react';
import styled from 'styled-components';
import ReactHtmlParser from 'react-html-parser';
import { Page, Image, Text } from './Page-style';
import ScrollAnimation from 'react-animate-on-scroll';

const Parallax = styled.div`
        min-height: 800px;
        /* image path REST API is defined on inline style */
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
`;



const Develope = (props) => {
    const bgImages = props.bgImages && props.bgImages.field_background_image;
    const apiUrl = props.apiUrl && props.apiUrl;
    const title = props.data && props.data.title;
    const text = props.data && props.data.body;
    //const image = props.data && props.apiUrl + '/' + props.data.field_image;
  return(
    <Parallax style={{backgroundImage:`url(${apiUrl}/${bgImages})`}}>
            <Page>
            <section>
                    <div className="left">
                    
                    </div>
                    <div className="right">
                        <Text>
                            <ScrollAnimation animateIn="fadeIn" animateOnce={false}>
                                <h3>{ReactHtmlParser(title)}</h3>
                                {ReactHtmlParser(text)}
                            </ScrollAnimation>
                        </Text>
                    </div>
            </section>
            </Page> 
    </Parallax>        
  )
}
export default Develope;