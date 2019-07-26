import React, {useState} from 'react';
import Form from "./component/Form";
import MemberCard from "./component/MemberCard";

import './App.css';


function App() {
  const [members, setMembers] = useState([]);
  const [membertoEdit, setMembertoEdit] =useState();
  const addMember = member =>{
    setMembers([...members,member]);
  };
  const editMember =(updates)=>{
    if (typeof updates ==="object"){
    let target = members.indexof(membertoEdit);
    members[target]= {...membertoEdit,...updates};
    setMembers([...members]);
    setMembertoEdit();}
  };

  return (
    <div className="App">
      <header>
     <h1>Form</h1>
     {(() => {
      if(membertoEdit) return <Form setter ={editMember} membertoEdit={membertoEdit} />;
      else return <Form setter={addMember} />;
     })()}
      <div>
      {members.map(member => {
        return <MemberCard key={member.email} member={member} setEdit={setMembertoEdit} />;
      })}
      </div>
      </header>  
    </div>
  );
}

export default App;
