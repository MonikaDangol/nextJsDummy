'use client';
import { Select } from '@mui/base/Select';
import { Option } from '@mui/base/Option';


import React from 'react'

function page() {
    return (

        <form onSubmit={handleSubmit}>
            <Label htmlFor="named-select">
                With the <code>name</code> prop set to <code>&quot;demo-select&quot;</code>
            </Label>
            <Select defaultValue={10} id="named-select" name="demo-select">
                <Option value=''>Please Select a level</Option>
                <Option value={10}>Ten</Option>
                <Option value={20}>Twenty</Option>
                <Option value={30}>Thirty</Option>
            </Select>
            <Label htmlFor="named-select">
                With the <code>name</code> prop set to <code>&quot;demo-select&quot;</code>
            </Label>
            <Select defaultValue={10} id="named-select" name="demo-select">
                <Option value=''>Please Select a level</Option>
                <Option value={10}>Ten</Option>
                <Option value={20}>Twenty</Option>
                <Option value={30}>Thirty</Option>
            </Select>
            <SubmitButton sx={{ ml: 1 }} type="submit">
                Submit
            </SubmitButton>
        </form>

    )
}

export default page