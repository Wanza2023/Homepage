import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import meatball_1 from '../img/meatball_1.png'
import meatball_2 from '../img/meatball_2.png'
import meatball_3 from '../img/meatball_3.png'
import meatball_4 from '../img/meatball_4.png'
import github from '../img/github.png'
import mail from '../img/mail.png'


function MemberList(){
    const memberItems = [
        {id: 1 , 
            imageUrl: meatball_1, 
            name: '윤희정', 
            job:'Software Engineer ',
            githubUrl:'https://github.com/yoon520',
            emailAddress:''},
        {id: 2 , 
            imageUrl: meatball_2, 
            name: '오수진', 
            job:'Software Engineer',
            githubUrl:'https://github.com/ohdeng02', 
            emailAddress:''},
        {id: 3 , 
            imageUrl: meatball_3, 
            name: '나민혁', 
            job:'Software Engineer',
            githubUrl:'https://github.com/NaMinhyeok', 
            emailAddress:'nmh9097@gachon.ac.kr'},
        {id: 4 , 
            imageUrl: meatball_4, 
            name: '조현성', 
            job:'Software Engineer',
            githubUrl:'https://github.com/gustjdw',
            emailAddress:''},
    ]

    

    const listItems = memberItems.map((item,index) => (
        <div key={index}>
            <img src={item.imageUrl} alt={item.name}/>
            <span>{item.name}</span>
            <span>{item.job}</span>
            <a href={item.githubUrl} target="_blank">
                <img src={github} />
            </a>
            <a href={`mailto:${item.emailAddress}`}>
                <img src={mail} />
            </a>
            
        </div>
    ))


    return (
        <div>
            {listItems}
        </div>
    )
}

export default MemberList;