import React, {useLayoutEffect} from 'react';
import Store from "../../store/store";

import './UserProjects.scss'
import Card from "../../components/Card";
import {Button, Container} from "@material-ui/core";



const UserProjects = () => {

    const store = new Store();

    useLayoutEffect(() => {
        async function getUserData(){
            const data = await store.checkAuth()
            console.log(data)
        }

        getUserData()
    }, [])

    return (
        <div className="user-projects">
            <Container className="user-projects__container">
                <div className="user-projects__inner">
                    <h1 className="user-projects__title">
                        Your projects:
                    </h1>
                    <div className="user-projects__projects">
                        <Card
                            cardTitle="Project name"
                            cardImageSrc='https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
                            cardImageTitle="Hahahah xd xd beka beka"

                        />

                    </div>
                </div>
            </Container>
        </div>
    );
};

export default UserProjects;