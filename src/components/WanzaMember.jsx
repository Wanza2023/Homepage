import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import '../styles/Member.css'
import meatball_1 from '../assets/images/meatball_1.png';
import meatball_2 from '../assets/images/meatball_2.png';
import meatball_3 from '../assets/images/meatball_3.png';
import meatball_4 from '../assets/images/meatball_4.png';
import meatball_5 from '../assets/images/meatball_5.png';
import github from '../assets/images/github.png';
import mail from '../assets/images/mail.png';
import teampic from '../assets/images/wanza_pic.jpg';


function WanzaMember() {
  const memberItems = [
    {
      id: 1,
      imageUrl: meatball_5,
      name: '강예진',
      job: '컴퓨터공학과',
      githubUrl: 'https://github.com/kang-ye-jin',
      emailAddress: 'yejin331@gachon.ac.kr',
    },
    {
      id: 2,
      imageUrl: meatball_3,
      name: '조현성',
      job: '컴퓨터공학과',
      githubUrl: 'https://github.com/gustjdw',
      emailAddress: 'johs710@gachon.ac.kr',
    },
    {
      id: 3,
      imageUrl: meatball_4,
      name: '오수진',
      job: '컴퓨터공학과',
      githubUrl: 'https://github.com/ohdeng02',
      emailAddress: 'tnwls5792@gachon.ac.kr',
    },
    {
      id: 4,
      imageUrl: meatball_1,
      name: '나민혁',
      job: '컴퓨터공학과',
      githubUrl: 'https://github.com/NaMinhyeok',
      emailAddress: 'nmh9097@gachon.ac.kr',
    },
    {
      id: 5,
      imageUrl: meatball_2,
      name: '윤희정',
      job: '컴퓨터공학과',
      githubUrl: 'https://github.com/yoon520',
      emailAddress: 'qpow100@gachon.ac.kr',
    },
  ];

  const cardItems = memberItems.map((item) => (
    <Card
      key={item.id}
      className="custom-card" 
      style={{border:'none'}}
      // 카드에 클래스를 추가.
    >
      <Card.Img variant="top" src={item.imageUrl} alt={item.name} style={{width:'50%'}}/>
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
    <div style={{paddingTop: "2rem"}}>
      <h2 className='team'>팀원</h2>
      <div className='img-container'>
        <img src={teampic} alt='wanza'className='responsive-img'/>
      </div>
      <div className="card-container"> {/* 카드 컨테이너에 클래스를 추가합니다. */}
        {cardItems}
      </div>
    </div>
  );
}

export default WanzaMember;