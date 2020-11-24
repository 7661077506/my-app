import React, { useState } from 'react'

const EditUserForm = (props) => {
  const [user, setUser] = useState(props.currentUser)

  const handleInputChange = (event) => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()

        props.updateUser(user.id, user)
      }}
    >
      <label>FirstName</label>
      <input
        type="text"
        name="firstname"
        value={user.firstname}
        onChange={handleInputChange}
      />
      <label>Lastname</label>
      <input
        type="text"
        name="lastname"
        value={user.lastname}
        onChange={handleInputChange}
      />
       <label>Email</label>
      <input
        type="text"
        name="email"
        value={user.email}
        onChange={handleInputChange}
      />
       <label>Gender</label>
      <input
        type="text"
        name="gender"
        value={user.gender}
        onChange={handleInputChange}
      />
      <button>Update user</button>
      <button
        onClick={() => props.setEditing(false)}
        className="button muted-button"
      >
        Cancel
      </button>
    </form>
  )
}

export default EditUserForm