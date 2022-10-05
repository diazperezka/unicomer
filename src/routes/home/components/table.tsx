import { Flex } from '@chakra-ui/react'
import React from 'react'
import DataTable from 'react-data-table-component'
import { columns } from '../data'

interface ITable {
    debouncedValue: unknown[]
}

export const Table = ({ debouncedValue }: ITable) => {
    return (
        <Flex>
            <DataTable
                columns={columns}
                data={debouncedValue}
            />
        </Flex>
    )
}