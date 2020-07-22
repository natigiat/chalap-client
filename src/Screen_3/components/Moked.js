
import App from "./../../App";
import './Moked.css';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import React, { useState } from "react";
import { Form, Input, Button, Radio, Select, DatePicker, Checkbox } from "antd";
import {
    PhoneOutlined,
    WhatsAppOutlined,
  } from '@ant-design/icons';


function Moked(props) {
  const { TextArea } = Input;
  

  const [date, setDate] = useState();

    
  const [name, setname] = useState();
  function handleChange(value, name) {
    setname(name.children);
    console.log("hi", name.children);
  }

  const onFinish = (values) => {
    const dataReport = {
      Messege: values["messege"],
      StudentId: name,
      Date: date,
      
    };
   
  };
 
    
  return (
    <Form className="body" name="control-hooks" onFinish={onFinish}>
               
      <div className="contactMoked">
          <Avatar size= {64} shape= "circle" icon={<UserOutlined />} className="avatar" ></Avatar>
          <h3> פניה למוקד הסעות</h3>
        <a href="tel:0542068714" className="phoneLink"><PhoneOutlined  /></a>  
        <a href="https://api.whatsapp.com/send?phone=+972587433249" className="whatsappLink"><WhatsAppOutlined/> </a>
      
       </div>
        <br></br>
        <br></br>
    <div className="messsage">         
     <h3> השארת פניה</h3>
    <Form.Item name="complaint details" label=" " rules={[{required:true}]}>
    <TextArea rows={6} placeholder="הודעתך כאן" />
     </Form.Item>

    <Form.Item>
        <Button className="button" type="primary" htmlType="submit">
          שליחה
        </Button>
      </Form.Item>

</div>

</Form>
  );
}


export default Moked;