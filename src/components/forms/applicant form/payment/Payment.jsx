import { useState } from "react";
import { Button, Form, Input, Col, Row } from "antd";
import "../style/Registration.css";
// import { Form, Button, Container, Row, Col, Card} from 'react-bootstrap';
// import smitlogo from '../../../../images/logo/smitlogo.png';

const Payment = () => {
  const [cnicNumber, setCnicNumber] = useState("");
  const [kuickpayId, setKuickpayId] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setCnicNumber(e.target.value);
  };

  const onFinish = (values) => {
    const {cnic}=values
    if (validateCnicNumber(cnic)) {
      setError("");
      const id = generateKuickpayId(cnic);
      setKuickpayId(id);
    } else {
      setError("Please enter a valid 13-digit CNIC number.");
    }
  };
  const onFinishFailed = () => {
    console.log("Failed.");
  };
  const validateCnicNumber = (number) => {
    console.log("Validate No:",number)
    const regex = /^[0-9]{13}$/;
    return regex.test(number);
  };

  const generateKuickpayId = (cnicNumber) => {

    // Simple example: hash the number and convert it to a numeric value
    const randomLength = Math.floor(Math.random() * (18 - 12 + 1)) + 12;
    let randomId = "";
    for (let i = 0; i < randomLength; i++) {
      randomId += Math.floor(Math.random() * 10);
    }
    return randomId;
  };
  console.log("Kuick Pay",kuickpayId)
  return (
    <Col xs={22} sm={22} md={16} lg={12} xl={12} className="formContainer">
      <Row justify="center">
        <Col span={24} style={{ textAlign: "center" }}>
          <br />
          <h1>Fees Payment</h1>
          <br />
        </Col>

        <Col span={24}>
          <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
            <Row justify="center">
              <Col xs={22} sm={22} md={16} lg={16} xl={16}>
                <Form.Item
                  name="cnic"
                  rules={[
                    {
                      required: true,
                      message: "Please input your CNIC!",
                    },
                  ]}
                >
                  <Input
                    placeholder="CNIC (Which you provided during form submission)"
                    size={"large"}
                    onChange={handleChange}
                    isInvalid={!!error}
                    className="inputBox"
                    type="number"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row justify="center">
                <Col xs={22} sm={22} md={16} lg={16} xl={16}>
                  <Form typeof="invalid">
                    <p style={{
                        color:"red"
                    }}>{error}</p>
                  </Form>
                </Col>
            </Row>

            <Row justify={"center"}>
              <Col xs={22} sm={22} md={16} lg={16} xl={16}>
                <Form.Item>
                  <Button
                    className="submitBtn"
                    htmlType="submit"
                    type="primary"
                    size={"large"}
                  >
                    Generate Kuickpay ID
                  </Button>
                </Form.Item>
              </Col>
            </Row>
            <Row justify="center">
              <Col xs={22} sm={22} md={16} lg={16} xl={16}>
                {kuickpayId && (
                  <p style={{
                    color:"black",
                    fontSize:"20px"
                  }}>
                    Your Kuickpay ID: {kuickpayId}
                  </p>
                )}
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Col>
    // <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
    //   <Row >
    //     <Col md={6} className="mx-auto">
    //       <Card className="p-4 shadow-sm" style={{ backgroundColor: 'rgba(139, 185, 160, 0.349)' }}>
    //         <Card.Body className="text-center">
    //           {/* <img src={smitlogo} alt="Logo" style={{ width: '150px', marginBottom: '20px' }} /> */}
    //           <Form onSubmit={handleSubmit}>
    //             <Form.Group controlId="formCnicNumber" className="mb-3">
    //               <Form.Label>Enter your CNIC number</Form.Label>
    //               <Form.Control
    //                 type="text"
    //                 value={cnicNumber}
    //                 onChange={handleChange}
    //                 placeholder="Enter CNIC number"
    //                 isInvalid={!!error}
    //               />
    //               <Form.Control.Feedback type="invalid">
    //                 {error}
    //               </Form.Control.Feedback>
    //             </Form.Group>
    //             <Button variant="primary" type="submit" style={{ backgroundColor: 'blue', borderColor: 'blue' }}>
    //               Generate Kuickpay ID
    //             </Button>
    //           </Form>
    //           {kuickpayId && <p className="mt-4 text-success">Your Kuickpay ID: {kuickpayId}</p>}
    //         </Card.Body>
    //       </Card>
    //     </Col>
    //   </Row>
    // </Container>
  );
};

export default Payment;
