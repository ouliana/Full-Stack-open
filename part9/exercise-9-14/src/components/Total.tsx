import React from 'react';
import { CoursePart } from '../types'; 

import styled from 'styled-components'
const Container = styled.div`
  margin-top: 30px;
`

const Total = ({ courseParts }: { courseParts: CoursePart[] }) => {
  return (
    <Container>
        Number of exercises{" "}
        {courseParts.reduce((carry, part) => carry + part.exerciseCount, 0)}
    </Container>
)
}

export default Total;