import React, { useEffect, useState } from "react";
import App from '../../../App';
import "./Homestation.css";
import { Form, Input, Button, Select } from 'antd';
import axios from "axios"





    
 const  HomeStation = () => {
 const [StudentStation, setStudentStation] = useState([]);
 const { Option } = Select;
 const [form] = Form.useForm();

      
        // useEffect(() => {

        //     axios
        //       .get(
        //         "http://ec2-18-220-138-139.us-east-2.compute.amazonaws.com/students/family/2"
        //       )
        //       .then(function (response) {
        //         console.log(response.data);
        //         setStudentStation(response.data);
        //       });
        //   }, []);
          const layout = {
            labelCol: { span: 8 },
            wrapperCol: { span: 16 },
          };
          const tailLayout = {
            wrapperCol: { offset: 8, span: 16 },
          };
        
      
        const onFinish = values => {
          console.log(values);
        };
     const onStationChange = (value)=>console.log(value);
      
  return (
      <div className="stations">

    <div className="data">
     <h1> עזור לנו למצוא את הנתוניים הרלוונטים עבורך</h1>
     <br></br>
     <br></br>
     <h3> מה תחנת הבית שלכם? </h3>

    </div>
    <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}  className="select">
      
          
      
      <Select
          placeholder="בחר תחנה"
          onChange={onStationChange}
          allowClear
        >
          {StudentStation&& StudentStation.map((station) => (<Option value={station}>{station}</Option>))}
        </Select>


  
      

      <Form.Item
        noStyle
        shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender} >
        {({ getFieldValue }) => {
          return getFieldValue('station') === 'other' ? (
            <Form.Item name="customizeStation" label="Customize Station" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          ) : null;
        }}
      </Form.Item>
      <div className="dontWorry">
          <h3>  
           אל דאגה, תוכל להגדיר עבור כל ילד גם בהמשך
          </h3>
      </div>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" color="gray">
         הבא
        </Button>
      </Form.Item>
    </Form>
  );

    </div>
  );
};



export default HomeStation;