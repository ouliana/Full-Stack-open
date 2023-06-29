import { CoursePart } from '../types'; 

import styled from 'styled-components'

const NameDiv = styled.div`
  font-weight:bold;
`
const DescriptionDiv = styled.div`
  font-style: italic;
`
const Container = styled.div`
  margin: 20px 0;
`
const assertNever = (value: never): never => {
  throw new Error(
    `Unhandled discriminated union member: ${JSON.stringify(value)}`
  )
}

const Part = ({coursePart}: {coursePart: CoursePart}) => {
  let extendedPart: JSX.Element = <div></div>;
  switch (coursePart.kind) {
    case 'basic':
      extendedPart = (
        <DescriptionDiv>
          {coursePart.description}
        </DescriptionDiv>);
      break;
    case 'group':
      extendedPart = (
        <div>
         project exercises {coursePart.groupProjectCount}
        </div>);
      break;
      case 'background':
      extendedPart = (
          <>
          <DescriptionDiv>
          {coursePart.description}
          </DescriptionDiv>
          <div>
            {coursePart.backgroundMaterial}
          </div>
        </>)
      break;
      case 'special':
        extendedPart = (
            <>
            <DescriptionDiv>
            {coursePart.description}
            </DescriptionDiv>
            <div>
              required skills: {coursePart.requirements.join(', ')}
            </div>
          </>)
          break;
    default:
      assertNever(coursePart);
   }
  return (
    <Container>
        <NameDiv>{coursePart.name} {coursePart.exerciseCount}</NameDiv>   {extendedPart}
    </Container>
  )
}

export default Part;