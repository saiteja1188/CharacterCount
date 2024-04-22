import styled from 'styled-components/macro'

export const AppContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`
export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 50px;
  width: 100%;
  background-color: #ffc533;
  color: #0f172a;
  padding-top: 50px;
  height: 100%;
`
export const HeadingContainer = styled.div``
export const Heading = styled.h1``
export const UserInputList = styled.ul`
  margin-top: 50px;
  padding-left: 0px;
`
export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #0f172a;
  color: #ffc533;
  padding-top: 50px;
`
export const CounterHeading = styled.h1``
export const AddInputContainer = styled.form`
  display: flex;
`
export const Input = styled.input`
  color: #334155;
  padding: 8px 20px;
  border-radius: 5px;
  min-width: 100%;
  font-family: robot;
  font-size: 16px;
  font-weight: 500;
`
export const InputButton = styled.button`
  color: #334155;
  background-color: #ffc533;
  border: none;
  border-radius: 5px;
  padding: 8px 20px;
  margin-left: 10px;
  width: 150px;
  font-family: robot;
  font-size: 16px;
  font-weight: 500;
`
export const EmptyImage = styled.img`
  width: 80%;
  height: 80%;
  margin-top: 100px;
`
