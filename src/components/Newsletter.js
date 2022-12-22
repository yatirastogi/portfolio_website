import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import "./styles.css";
import Resume from "../assets/img/Resume.pdf"


export const Newsletter = ({  }) => {
  return (
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp">
          <Row>
            
            <Col md={12} xl={12}>        
                <div className="new-email-bx"> 
                
                <h2 className="thanks"> You can get to know more about me by contacting me on my email id or by downloading my resume. I would love to hear from you</h2>
                <a href={Resume} download target="_blank"> <button className="download" >Download Resume</button></a>
                </div>
             
            </Col>
          </Row>
        </div>
      </Col>
  )
}
