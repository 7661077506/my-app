import React, { useState } from 'react';
import UserTable  from './MainComponent'
import AddUserForm from './AddUserForm';
import EditUserForm from './EditUserForm';

const Student = () => {

    const usersData = [
          {
                id: 1,
                firstname: "Jo",
                lastname: "Pennell",
                email: "jpennell0@epa.gov",
                gender: "Female"
              },
              {
                id: 2,
                firstname: "Kellby",
                lastname: "Huggins",
                email: "khuggins1@examiner.com",
                gender: "Female"
              },
              {
                id: 3,
                firstname: "Jerome",
                lastname: "Wycliffe",
                email: "jwycliffe2@businessinsider.com",
                gender: "Female"
              },
              {
                id: 4,
                firstname: "Dmitri",
                lastname: "Friman",
                email: "dfriman3@histats.com",
                gender: "Male"
              },
              {
                id: 5,
                firstname: "Jo",
                lastname: "Pennell",
                email: "jpennell0@epa.gov",
                gender: "Female"
              },
              {
                id: 6,
                firstname: "Kellby",
                lastname: "Huggins",
                email: "khuggins1@examiner.com",
                gender: "Female"
              },
              {
                id: 7,
                firstname: "Jerome",
                lastname: "Wycliffe",
                email: "jwycliffe2@businessinsider.com",
                gender: "Female"
              },
              {
                id: 8,
                firstname: "Dmitri",
                lastname: "Friman",
                email: "dfriman3@histats.com",
                gender: "Male"
              }
        ]

        const [users, setUsers] = useState(usersData)

        const addUser = (user) => {
            user.id = users.length + 1
            setUsers([...users, user])
          }

          const deleteUser = (id) => {
            setUsers(users.filter((user) => user.id !== id))
          }

          const [editing, setEditing] = useState(false)

          const initialFormState = { id: null, firstname: '', lastname: '',email:'',gender:'' }

          const [currentUser, setCurrentUser] = useState(initialFormState)

          const editRow = (user) => {
            setEditing(true)
          
            setCurrentUser({ id: user.id, firstname: user.firstname, lastname: user.lastname,email : user.email,gender : user.gender })
          }

          const updateUser = (id, updatedUser) => {
            setEditing(false)
          
            setUsers(users.map((user) => (user.id === id ? updatedUser : user)))
          }

       return(
        <div className="container">
           <div className="flex-large">
  {editing ? (
    <div>
      <h2>Edit user</h2>
      <EditUserForm
        setEditing={setEditing}
        currentUser={currentUser}
        updateUser={updateUser}
      />
    </div>
  ) : (
    <div>
      <h2>Add user</h2>
      <AddUserForm addUser={addUser} />
    </div>
  )}
</div>
             <div className="flex-large">
                  <h2>View users</h2>
                  <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
            </div>
        </div>
          )       
    }


export default Student;