import React from 'react'
import { Form } from 'semantic-ui-react'
import { UserConsumer } from '../providers/UserProvider'

class UserForm extends React.Component {
    state = { email: '', firstName: '', lastName: '', age: ''}

    handleChange = ( e, { name, value }) => this.setState({ [name]: value })

    handleSubmit = (e) => {
        e.preventDefault()
    }

    render() { 
        const { email, firstName, lastName, age } = this.state
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Input
                    label='Enter Email'
                    type='text'
                    name='email'
                    value={email}
                    onChange={this.handleChange}
                    />
                <Form.Input
                    label='Enter First name'
                    type='text'
                    name='firstName'
                    value={firstName}
                    onChange={this.handleChange}
                    />
                <Form.Input
                    label='Enter Last Name'
                    type='text'
                    name='lastName'
                    value={lastName}
                    onChange={this.handleChange}
                    />
                <Form.Input
                    label='Enter Age'
                    type='text'
                    name='age'
                    value={age}
                    onChange={this.handleChange}
                    />
            </Form> 
        )
    }
}

const ConnectedUserForm = (props) => {
    return (
        <UserConsumer>
            { value => (
                <UserForm 
                { ...props }
                email={value.email}
                firstName={value.firstName}
                lastName={value.lastName}
                age={value.age}
                updateUser={value.updateUser}
                />
            )}
        </UserConsumer>
    )
}

export default ConnectedUserForm