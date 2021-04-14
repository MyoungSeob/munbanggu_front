import React, { useState, useEffect } from "react";
import axios from "axios";

import styled from "styled-components";
import Card from "./Card";

const CardList = (props) => {
    console.log(props);
    return (
        <ListBody>
            <ItemList>
                <Card />
            </ItemList>
        </ListBody>
    );
};

const ListBody = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0;
`;

const ItemList = styled.ul`
    float: left;
    padding: 0;
    margin: 0;
    width: 100%;
`;

export default CardList;
