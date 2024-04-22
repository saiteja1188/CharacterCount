import {Component} from 'react'

import {v4} from 'uuid'

import UserInput from '../UserInput'

import {
  AppContainer,
  LeftContainer,
  HeadingContainer,
  Heading,
  UserInputList,
  RightContainer,
  CounterHeading,
  AddInputContainer,
  Input,
  InputButton,
  EmptyImage,
} from './styledComponents'

class CharacterCount extends Component {
  state = {
    userInput: '',
    userInputList: [],
  }

  onChangeInput = event => {
    this.setState({userInput: event.target.value})
  }

  onAddButton = event => {
    event.preventDefault()
    const {userInput} = this.state
    const newUserInput = {
      id: v4(),
      enterText: userInput,
      textLength: userInput.length,
    }
    this.setState(prev => ({
      userInputList: [...prev.userInputList, newUserInput],
      userInput: '',
    }))
  }

  renderUserInputs = () => {
    const {userInputList} = this.state

    return userInputList.length > 0 ? (
      userInputList.map(eachItem => (
        <UserInput key={eachItem.id} userInputDetails={eachItem} />
      ))
    ) : (
      <EmptyImage
        src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
        alt="no user inputs"
      />
    )
  }

  render() {
    const {userInput} = this.state
    return (
      <AppContainer>
        <LeftContainer>
          <HeadingContainer>
            <Heading>Count the characters like a Boss</Heading>
          </HeadingContainer>
          <UserInputList>{this.renderUserInputs()}</UserInputList>
        </LeftContainer>
        <RightContainer>
          <CounterHeading>Character Counter</CounterHeading>
          <AddInputContainer onSubmit={this.onAddButton}>
            <Input
              type="search"
              placeholder="Enter the Characters here"
              onChange={this.onChangeInput}
              value={userInput}
              data-testid="search"
              className="user-input"
            />
            <InputButton type="submit">Add</InputButton>
          </AddInputContainer>
        </RightContainer>
      </AppContainer>
    )
  }
}

export default CharacterCount
