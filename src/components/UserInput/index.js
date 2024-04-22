import {ListItem, Desc} from './styledComponents'

const UserInput = props => {
  const {userInputDetails} = props
  const {id, enterText, textLength} = userInputDetails
  console.log(id)
  return (
    <ListItem>
      <Desc>
        {enterText} : {textLength}
      </Desc>
    </ListItem>
  )
}

export default UserInput
