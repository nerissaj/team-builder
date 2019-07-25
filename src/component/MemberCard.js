import  React from 'react';
export default function MemberCard(props){
    let member = props.member;
    let setEdit = props.setEdit;

    return(
        <div><h2>{member.username}</h2>
        <p>Email:{member.email}</p>
        <p>Role:{member.role}</p>
        <button onClick={() =>setEdit(member)}>Edit</button>
        </div>
    )
}