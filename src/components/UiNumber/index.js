import { Text } from '@chakra-ui/react';
import React from 'react'
import numeral from 'numeral'

const UiNumber = ({format, children}) => {
    return (
        <Text>
            R$ {numeral(children).format(format)}
        </Text>
    )
}

export default UiNumber;
