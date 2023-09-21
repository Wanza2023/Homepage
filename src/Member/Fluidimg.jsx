import React from 'react';
import Image from 'react-bootstrap/Image';
import teampic from '../img/wanza_pic.jpg';

function CenteredExample() {
    return (
        <>
            <h2 style={{textAlign:'center'}}>팀원</h2>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <Image src={teampic} fluid style={{ maxWidth: '50%', height: 'auto' }} />
            </div>
        </>
    );
}

export default CenteredExample;