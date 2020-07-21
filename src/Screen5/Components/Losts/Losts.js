import React from 'react';
import { DatePicker, Form, Input, Button, Select } from 'antd';
import './Losts.css'





const { TextArea } = Input;
const { Option } = Select;

function Losts() {

    const onFinish = values => {
        console.log(values);

        // props.onFinishLosts();

        function onChange(value) {
            console.log(`selected ${value}`);
        }

        function onBlur() {
            console.log('blur');
        }

        function onFocus() {
            console.log('focus');
        }

        function onSearch(val) {
            console.log('search:', val);
        }
    };



    return (
        <Form name="control-hooks" onFinish={onFinish}>
            <Form.Item name="lost details" label="פרטי האבידה" rules={[{ required: true }]}>
                <TextArea rows={4} />

            </Form.Item>


            <Form.Item name="who lost" label="למי אבד" rules={[{ required: true }]}>
                <TextArea rows={4} />

            </Form.Item>

            <Form.Item>


                );
            </Form.Item>

            <Form.Item>

                <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Select a person"
                    optionFilterProp="children"
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSearch={onSearch}
                    filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="tom">Tom</Option>
                </Select>

            </Form.Item>


            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
               </Button>

            </Form.Item>

        </Form>
    )
}
export default Losts;