import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function GroupExample() {
    return (
        <CardGroup>
        <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
                Software Engineer
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">깃헙주소,이메일주소 이미지로 링크타게</small>
            </Card.Footer>
        </Card>
        <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
                Software Engineer
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">깃헙주소,이메일주소 이미지로 링크타게</small>
            </Card.Footer>
        </Card>
        <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
                Software Engineer
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">깃헙주소,이메일주소 이미지로 링크타게</small>
            </Card.Footer>
        </Card>
        <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
                SoftWareEngineer
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">깃헙주소,이메일주소 이미지로 링크타게</small>
            </Card.Footer>
        </Card>
        </CardGroup>
    );
}

export default GroupExample;