import React from 'react';
import Icon from './Components/Icon';
import { ToastContainer } from 'react-toastify';
import { Card, CardBody, Button, Container, Col, Row } from 'reactstrap';
const Games = ({
  onChangeItem,
  onReload,
  isCross,
  win,
  itemArray,
  winPopup,
}) => {
  return (
    <Container className='p-5'>
      <div>
        <h1 className='text-success text-uppercase text-center mb-2'>
          Tick Tac Toe
        </h1>
      </div>
      <ToastContainer position='top-center' />
      <Row>
        <Col className='offset-md-3'>
          {win ? (
            <div className='text'>
              {winPopup(win, {
                theme: 'colored',
                type: 'success',
                autoClose: 1800,
              })}
              <h4 className='text-success text-uppercase text-center '>
                {win}
              </h4>
              <Button color='success' block onClick={onReload}>
                Play Again
              </Button>
            </div>
          ) : (
            <h4 className='text-center text-warning mb-4 mt-5'>
              {isCross ? 'Cross' : 'Circle'}
            </h4>
          )}
          <div className='grid'>
            {itemArray.map((item, index) => {
              return (
                <Card
                  key={Math.random() * 100}
                  color='secondary'
                  onClick={() => onChangeItem(index)}
                >
                  <CardBody className='box'>
                    <Icon name={item} />
                  </CardBody>
                </Card>
              );
            })}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Games;
