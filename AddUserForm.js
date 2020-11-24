import React, { useState } from 'react'

const AddUserForm = (props) => {

    const initialFormState = {id: null, firstname: '', lastname: '',email : '',gender: '' }
    const [user, setUser] = useState(initialFormState)

    const handleInputChange = (event) => {
        const { name, value } = event.target
    
        setUser({ ...user, [name]: value })
      }

  return (
    <form onSubmit={(event) => {
        event.preventDefault()
        if (!user.first_name || !user.last_name)
        
          return
          props.addUser(user)
          setUser(initialFormState)
        
      }}>
      <label>RollNo.</label>
      <input type="number" name="id" value={user.id} onChange={handleInputChange} />
      <label>Firstname</label>
      <input type="text" name="firstname" value={user.firstname} onChange={handleInputChange} />
      <label>Lastname</label>
      <input type="text" name="lastname" value={user.lastname} onChange={handleInputChange} />
      <label>Email</label>
      <input type="text" name="email" value={user.email} onChange={handleInputChange} />
      <label>Gender</label>
      <input type="text" name="gender" value={user.gender} onChange={handleInputChange} />
      <button>Add new user</button>
    </form>
  )
}

export default AddUserForm