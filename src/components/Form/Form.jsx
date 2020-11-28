import React, { useState } from 'react';
import { AutoComplete, Table } from 'antd';
import 'antd/dist/antd.css';
import { dataSource } from '../constants/constant';
import './Form.css';


const Form = () => {
    const columns = [
        {
            title: 'Project Name',
            dataIndex: 'projectName',
            key: 'projectName',
        },
        {
            title: 'Contractot Name',
            dataIndex: 'contractorName',
            key: 'contractorName',
        },
        {
            title: 'Task Number',
            dataIndex: 'taskNumber',
            key: 'taskNumber',
        },
        {
            title: 'Assigned To',
            dataIndex: 'assignedTo',
            key: 'assignedTo',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
        },
    ];

    const mockVal = (str, repeat = 1) => {
        return {
            value: str.repeat(repeat),
        };
    };
    const onSearch = (searchText) => {
        setOptions(
            !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)],
        );
    };

    const onSelect = (data) => {
        console.log('onSelect', data);
    };
    const [options, setOptions] = useState([]);


    return (
        <div className='main_container_search'>
            <div>
                <AutoComplete
                    options={options}
                    style={{
                        width: 200,
                    }}
                    onSelect={onSelect}
                    onSearch={onSearch}
                    placeholder="Search..."
                />
            </div>
            <div className='table_container'>
                <Table dataSource={dataSource} columns={columns} />
            </div>
        </div>
    )
}
export default Form;