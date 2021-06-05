import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { connectAuth } from '../../../Redux/connects';
import styles from '../../../Screens/Reservation/styles';

function HeaderTitle({logout}) {
    return (
        <TouchableOpacity onPress={() => logout('Resetpass') } > 
            <Text>Cancel</Text>
        </TouchableOpacity>
    );
    
}


export default connectAuth(HeaderTitle);
