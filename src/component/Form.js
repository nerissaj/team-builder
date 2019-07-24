import React, {useState} from "react";

const Form = () => {
    const [member, setMember] = useState({ name: "", email: "" , role:""});
    
    const handleChange = event => {
        setUser({ ...member, [event.target.name]: event.target.value });
      };
   
              
              const handlePasswordChange = event => {
                setUser({ ...member, [event.target.name]: event.target.value });
              };
    
    
      
        
   
          const handleSubmit = event => {
            event.preventDefault();
            console.log(member.name);
            console.log(member.email);
            console.log(member.role);
          };
        
    
      return (
        <div className="form">
   {console.log(member)}
            <form onSubmit={event => handleSubmit(event)}>
            <label>
              name:
              <input type="text" name="name" value={member.name} onChange={event => handleChange(event)} />
            </label>
            <label>
             Email:
              <input type="text" name="email" value={member.email} onChange={event => handleChange(event)}
              />
            </label>
            <label>
                Role:
                <input type="text"name="role" value={member.role} onChange={event => handleChange(event)} />
            </label>
            <button onSubmit={() => handleSubmit()}>Submit!</button>
          </form>
        </div>
      );
    
          
      }
    export default Form;

    

    
    
      
     
            
    
    
}