import React from 'react';
import { DatePicker, Form, Input, Button, Select } from 'antd';
import './Losts.css'





const { TextArea } = Input;
const { Option } = Select;

function Losts() {
    const onFinish = (values) => {
        console.log(values);
    };

    const { TextArea } = Input;

    return (
        <Form name="control-hooks" onFinish={onFinish}>
            <h1>אבידהד</h1>
            <Form.Item
                name="note"
                label="תודה על מילה טובה"
                rules={[{ required: true }]}
            >
                <TextArea rows={10} />
            </Form.Item>
        </Form>
    );
}


export default Losts;