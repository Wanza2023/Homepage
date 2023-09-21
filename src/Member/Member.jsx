import React from "react";
import meatball_1 from '../img/meatball_1.png'

const styles = {
    wrapper:{
        margin: 8,
        padding: 8,
        display:"flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRadius: 16,
    },
    imageContainer: {},
    
    image:{
        width: 50,
        height:50,
        borderRadius: 25,
    },

    contentContainer: {
        marginLeft: 8,
        display: "flex",
        flexDirection: "column",
        justifyConetent: "center",
    },
    nameText:{
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
    },
    commentText:{
        color: "black",
        fontSize: 16,
    },
}

function Member(props){
    return(
    <div style = {styles.wrapper}>
        <div style={styles.imageContainer}>
        <img src="C:\Users\nmh90\OneDrive\Desktop\WANZA\Homepage\src\img\meatball_1.png" style={styles.image} />
    </div>
    <div style={styles.contentContainer}>
        <span style={styles.nameText}> {props.name}</span>
        <span style={styles.commentText}>{props.comment}</span> </div>
    </div> );
    }


export default Member;