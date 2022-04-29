import React from 'react';
import styled from 'styled-components/native'
import { Act, BlueClock, Calender, Dir, Doc, File, Lightmoney, Money, Overtime, Person, Salry, Setting, Wallet, Event } from '../../components/assets'
import { Menu } from '../../components'

const MoreMenu = ({ navigation }) => {

    const Container = styled.View`
        flex: 1;
        background-color: #fff;
    `
    const Feature = styled.View`
        margin: 26px 15px;
    `
    const SubFeature = styled.View`
        flex-direction: row;
        justify-content: space-between;
        margin: 10px 0px;
    `
    return (
        <Container>
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
                    <Menu title="Reimburse" icon={Lightmoney} />
                    <Menu title="Cash Advance" icon={Wallet} />
                </SubFeature>
                <SubFeature>
                    <Menu title="Gaji" icon={Salry} />
                    <Menu title="Berkas" icon={File} />
                    <Menu title="Inventaris" icon={Doc} />
                    <Menu title="Direktori" icon={Dir} />
                </SubFeature>
                <SubFeature>
                    <Menu title="Aktivitas" icon={Act} />
                    <Menu title="Setting" icon={Setting} />
                    <Menu bg="rgba(0,0,0, 0)"/>
                    <Menu bg="rgba(0,0,0, 0)" />
                </SubFeature>
            </Feature>
        </Container>
    )
}

export default MoreMenu;