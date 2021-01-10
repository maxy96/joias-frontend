import React, { Component, Fragment } from 'react';
import Navbar from './components/Navbar/Navbar';
import Container from './components/Container/Container';
import Form from './components/Form/Form';
import Card from './components/Card/Card';
import { RowCenter }  from './components/Row/Row';
import { ColMd8 } from './components/Col/Col';
import Footer from './components/Footer/Footer';

export default class App extends Component{
    render(){
        return (
            <Fragment>
                <Navbar></Navbar>
                <Container>
                    <RowCenter>
                        <ColMd8>
                            <Card>
                                <h2 className="text-center mb-2">Titulo</h2>
                                <hr/>
                                <Form></Form>
                            </Card>
                        </ColMd8>
                    </RowCenter>
                </Container>
                <Footer></Footer>
            </Fragment>
        );
    }
}
