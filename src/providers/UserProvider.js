import React from 'react'

const UserContext = React.createContext()

export const UserConsumer = UserContext.Consumer

class UserProvider extends React.Component {
    state ={ 
        email: 'bleepblopp@hotmail.com',
        firstName: "bleep",
        lastName: "bloop",
        age: "344"

    }

    render() {
        return (
            <UserContext.Provider value={this.state}>
                { this.props.children}
            </UserContext.Provider>
        )
    }
}

export default UserProvider