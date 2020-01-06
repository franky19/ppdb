import React from 'react';
import Header from '../Header/Header';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Container,Row,Col,Carousel,CarouselCaption} from 'react-bootstrap';

export default class Home extends React.Component{
    render(){
        return(
            <Container className="Con-Body">
                <Row>
                    <Col>
                    <Header />
                    </Col>
                </Row>
                <Row >
                  <Col>
                  {/* <CarouselHome/> */}
                  </Col>  
                </Row>
            </Container>
        )
    }
}
// class CarouselHome extends React.Component {
//     render() {
//       const settings = {
//         dots: true,
//         autoplay: true,
//         infinite: true,
//         slidesToShow: 3,
//         slidesToScroll: 1
//       };
//       return (
//         <div className="container">
//           <Slider {...settings}>
//           <div><img src={guru} alt="Credit to Joshua Earle on Unsplash"/></div>
//           <div><img src={siswa} alt="Credit to Alisa Anton on Unsplash"/></div>
//           <div><img src={sman2} alt="Credit to Igor Ovsyannykov on Unsplash"/></div>
//           </Slider>
//         </div>
//       );
//     }
//   }