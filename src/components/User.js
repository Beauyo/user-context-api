import React from 'react'
import { Card } from 'semantic-ui-react'
import { UserConsumer} from '../providers/UserProvider'

const User = () => (
 <UserConsumer>
    { value => (
     <Card>
        <Card.Content>
            <Card.Header>{value.email}</Card.Header>
            <Card.Meta>
                First Name: { value.firstName }
            </Card.Meta>
        </Card.Content>
        <Card.Content>
            Last Name: { value.lastName }
        </Card.Content>
        <Card.Content>
            Age: { value.age }
        </Card.Content>
     </Card>
     )}
</UserConsumer>
)

export default User