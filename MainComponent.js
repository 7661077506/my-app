import React from 'react'

const UserTable = (props) =>(
	<table>
	<thead>
	  <tr>
		<th>Roll.No.</th>
		<th>First Name</th>
		<th>Last Name</th>
		<th>Email</th>
		<th>Gender</th>
		<th>Actions</th>
	  </tr>
	</thead>
	<tbody>
	{props.users.length > 0 ? (
        props.users.map((user) => (
	  <tr key={user.id}>
	  <td>{user.id}</td>
		<td>{user.firstname}</td>
		<td>{user.lastname}</td>
		<td>{user.email}</td>
		<td>{user.gender}</td>
		<td>
		  <button className="button muted-button"  onClick={() => { props.editRow(user)}}>Edit</button>
		  <button className="button muted-button"  onClick={() => props.deleteUser(user.id)}>Delete</button>
		</td>
	  </tr>
		))
		) : (
			<tr>
			  <td colSpan={3}>No users</td>
			</tr>
		  )}
	</tbody>
  </table>
)

export default UserTable;