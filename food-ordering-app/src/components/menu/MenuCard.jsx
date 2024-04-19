import { Card, Container, Row, Col } from 'react-bootstrap';

const MenuCard=({menus})=>
{
    return (
        <Container>
          <Row>
            {menus.map((menus, index) => (
              <Col key={index} md={2} className="mb-2">
                <Card>
                  <div className="d-flex flex-column align-items-center">
                    <Card.Img  variant="top" src={menus.imgUrl}  style={{ width: '20', height: '150px'}} />
                    <Card.Text className="text-center mt-2">{menus.name}</Card.Text>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      );
}

export default MenuCard