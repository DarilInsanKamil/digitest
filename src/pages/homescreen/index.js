import React from 'react'
import { FlatList, ScrollView, StatusBar } from 'react-native';
import { BlueClock, Calender, Calender1, Calender2, Clock, Event, MenuIcon, Money, Overtime, Person, Scan, Wallet } from '../../components/assets';
import { BoardCard, CardFloat, EventCard, HeaderBackground, JustifyText, Menu } from '../../components';
import { Card, Container, Gap, Line, MainMenu, Feature, SubFeature, NavigationBar, Scrollable } from './home.styled';
import { DataEvent } from '../../data/dataEvent';
import { DataBoard } from '../../data/dataBoard';

const HomeScreen = ({ navigation }) => {

    const ItemBoard = ({ item }) => {
        return (
            <BoardCard
                title={item.title}
                desc={item.desc}
                date={item.date}
            />
        )
    }

    const ItemEvent = ({ item }) => {
        return (
            <EventCard
                w="375px"
                title={item.title}
                desc={item.desc}
                time={item.time_left}
            />
        )
    }
    return (
        <Container>
            <StatusBar barStyle='auto' />
            <ScrollView>
                <HeaderBackground date="24 February" name="Danny Rachmat Mustofa" status="karyawan" />
                <Card m="-30px 15px">
                    <CardFloat image={Scan} title="Scan QR Code" secondary="Masuk dikantor?" />
                    <Line />
                    <CardFloat image={Clock} title="Clock in" secondary="Lapangan . WFH" />
                </Card>
                <MainMenu>
                    <Gap h="50px" />
                    <Feature>
                        <SubFeature>
                            <Menu title="Profile" icon={Person} />
                            <Menu title="Cuti" icon={Calender} />
                            <Menu title="Absensi" icon={BlueClock} />
                            <Menu title="Lembur" icon={Overtime} />
                        </SubFeature>
                        <SubFeature>
                            <Menu title="Event" icon={Event} />
                            <Menu title="Klaim" icon={Money} />
                            <Menu title="Cash Advance" icon={Wallet} />
                            <Menu title="Lainnya" icon={MenuIcon} onPress={() => navigation.navigate('MoreMenu')} />
                        </SubFeature>
                    </Feature>
                    <Gap h="20px" />
                    <Card bg="rgba(244, 244, 244, 0.6)">
                        <CardFloat c="#000" secondcolor="#9E9E9E" image={Calender1} title="Saldo Cuti" secondary="Cuti Tahunan" />
                        <Line bg="rgba(229, 229, 229, 1)" />
                        <CardFloat c="#000" secondcolor="#9E9E9E" image={Calender2} title="Idul Fitri 1440 H" secondary="Libur Selanjutnya" />
                    </Card>
                    <Gap h="20px" />
                    <JustifyText title="OnBoarding" />
                    <Gap h="6px" />
                    {/* <EventSection />
                     */}
                    <FlatList
                        data={DataBoard}
                        horizontal={true}
                        renderItem={ItemBoard}
                        keyExtractor={item => item.id}
                        showsHorizontalScrollIndicator={false}
                    />
                    <Gap h="20px" />
                    <JustifyText title="Event" />
                    <Gap h="6px" />
                    {/* <BoardingSection /> */}
                    <FlatList
                        data={DataEvent}
                        horizontal={true}
                        renderItem={ItemEvent}
                        keyExtractor={item => item.id}
                        showsHorizontalScrollIndicator={false}
                    />
                </MainMenu>
            </ScrollView>
        </Container>
    )
}

export default HomeScreen;

