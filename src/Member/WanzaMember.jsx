import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './Member.css'
import meatball_1 from '../img/meatball_1.png';
import meatball_2 from '../img/meatball_2.png';
import meatball_3 from '../img/meatball_3.png';
import meatball_4 from '../img/meatball_4.png';
import github from '../img/github.png';
import mail from '../img/mail.png';
import teampic from '../img/wanza_pic.jpg';


function WanzaMember() {
  const memberItems = [
    {
      id: 1,
      imageUrl: meatball_4,
      name: '강예진',
      job: 'Software Engineer',
      githubUrl: 'https://github.com/',
      emailAddress: '',
    },
    {
      id: 2,
      imageUrl: meatball_3,
      name: '조현성',
      job: 'Software Engineer',
      githubUrl: 'https://github.com/gustjdw',
      emailAddress: '',
    },
    {
      id: 3,
      imageUrl: meatball_4,
      name: '오수진',
      job: 'Software Engineer',
      githubUrl: 'https://github.com/ohdeng02',
      emailAddress: '',
    },
    {
      id: 4,
      imageUrl: meatball_1,
      name: '나민혁',
      job: 'Software Engineer',
      githubUrl: 'https://github.com/NaMinhyeok',
      emailAddress: 'nmh9097@gachon.ac.kr',
    },
    {
      id: 5,
      imageUrl: meatball_2,
      name: '윤희정',
      job: 'Software Engineer ',
      githubUrl: 'https://github.com/yoon520',
      emailAddress: '',
    },
  ];

  const cardItems = memberItems.map((item) => (
    <Card
      key={item.id}
      className="custom-card" 
      style={{border:'none'}}
      // 카드에 클래스를 추가.
    >
      <Card.Img variant="top" src={item.imageUrl} alt={item.name} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>{item.job}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          <a href={item.githubUrl} target="_blank" rel="noopener noreferrer">
            <img src={github} alt="GitHub" />
          </a>
          &nbsp;
          <a href={`mailto:${item.emailAddress}`}>
            <img src={mail} alt="Email" />
          </a>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  ));

  return (
    <>
      <h2 className='team'>팀원</h2>
      <div className='img-container'>
        <img src={teampic} alt='wanza'className='responsive-img'/>
      </div>
      <div className="card-container"> {/* 카드 컨테이너에 클래스를 추가합니다. */}
        {cardItems}
      </div>
    </>
  );
}

export default WanzaMember;