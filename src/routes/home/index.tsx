import { Flex } from '@chakra-ui/react';
import React, { KeyboardEvent, useEffect, useState } from 'react';
import { dataTableData } from './data';
import useDebounce from '../../customHooks/debounce';
import { Table } from './components/table';
import { InputFilter } from './components/inputFilter';
import { Header } from './components/header';

function Home() {
	const [data, setData] = useState(dataTableData)
	const [loading, setLoading] = useState(false)
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [_, setInputValue] = useState('')

	const debouncedValue = useDebounce(data, 1000)

	const handleSearch = (e: KeyboardEvent) => {
		setLoading(true)
		const inputValue = ((e.target as HTMLButtonElement).value.toLowerCase());
		setInputValue(inputValue)

		if (inputValue.length === 0) {
			setLoading(false)
			setData(dataTableData)
		} else {
			const searchResult = dataTableData.filter((item) => 
					item.firstName.toLowerCase().includes(inputValue) || item.lastName.toLowerCase().includes(inputValue) || item.birthday.toLowerCase().includes(inputValue) ||
					item.gender.toLowerCase().includes(inputValue) || item.cellphone.toLowerCase().includes(inputValue) || item.addressHome.toLowerCase().includes(inputValue) ||
					item.profession.toLowerCase().includes(inputValue) || item.incomes.toLowerCase().includes(inputValue)
			)

			searchResult.length > 0 ? setData(searchResult) : setData([])
		}
	}

	useEffect(() => {
		setLoading(false)
	}, [debouncedValue])

	return (
		<Flex direction={'column'} height={'100vh'}>
			<Flex flex={1} bg={'#055EA9'} pl={5} pr={5} pt={5} pb={5}>
				<Header />
			</Flex>
			<Flex flex={14} bg={'#eee'} direction={'column'}>
				<InputFilter loading={loading} handleSearch={handleSearch}/>
				<Table debouncedValue={debouncedValue} />
			</Flex>
		</Flex>
	);
	}

export default Home;
