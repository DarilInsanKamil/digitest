import React from 'react'
import { FlatList, Text } from 'react-native'
import styled from 'styled-components/native'
import { NewBoardCard } from '../../components'
import { DataBoard } from '../../data/dataBoard'

const BoardingPage = () => {

  const ItemBoard = ({ item }) => {
    return (
      <NewBoardCard
        title={item.title}
        desc={item.desc}
        date={item.date}
        img={item.icon}
      />
    )
  }
  const Container = styled.View`
    flex: 1;
    background-color: #fff;
    padding: 15px;
  `
  return (
    <Container>
      <FlatList
        data={DataBoard}
        renderItem={ItemBoard}
        keyExtractor={item => item.id}
      />
    </Container>
  )
}

export default BoardingPage;