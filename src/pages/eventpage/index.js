import React from 'react'
import { FlatList, Text } from 'react-native'
import { EventCard } from '../../components';
import { DataEvent } from '../../data/dataEvent';
import styled from 'styled-components/native';

const EventPage = () => {

  const ItemEvent = ({ item }) => {
    return (
      <EventCard
        title={item.title}
        desc={item.desc}
        time={item.time_left}
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
        data={DataEvent}
        renderItem={ItemEvent}
        keyExtractor={item => item.id}
      />
    </Container>
  )
}

export default EventPage;