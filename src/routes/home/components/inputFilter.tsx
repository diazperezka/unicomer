import React, { KeyboardEventHandler } from 'react'
import { Flex, Spinner, Input } from '@chakra-ui/react'

interface IInputfilter {
    loading: boolean;
    handleSearch: KeyboardEventHandler<HTMLInputElement>;
}

export const InputFilter = ({ loading, handleSearch }: IInputfilter) => {
    return (
        <Flex justifyContent={'space-around'}>
            <Flex alignSelf={'center'} justifyContent={'center'} width={'5%'}>
                <Spinner display={loading ? 'block' : 'none'} />
            </Flex>
            <Flex width={'95%'}>
                <Input placeholder='Ingrese su búsqueda' onKeyUp={handleSearch} border={'none'} color={'black'}/>
            </Flex>
        </Flex>
    )
}