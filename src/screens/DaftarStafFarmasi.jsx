import React from 'react';
import { DaftarPasienRow } from '../components/DaftarPasienRow';
import { Loading } from '../components/Loading';
import { TableContainer } from '../containers/TableContainer';
import { Appointment } from '../utils/Appointment';

export class DaftarAllStaffFarmasi extends React.Component {
    constructor(props) {
		super(props)
		this.state = {
			loading: true,
			listStaffFarmasi: []
        }
        
        Appointment.getAllStaffFarmasi().then(response => {
            this.setState({
                loading: false,
                listStaffFarmasi: response.result
            })
        })
    }

    render() {
        if (this.state.loading) {
            return (
                <Loading msg="Fetching Data..."/>
            )
        } else {
            return (
                <TableContainer title="Daftar Staff Farmasi" header={['Nama Staff', 'Jenis Staff']}>
                    <DaftarPasienRow listPasien={this.state.listPasien}/>
                </TableContainer>
            )
        }
	}

}