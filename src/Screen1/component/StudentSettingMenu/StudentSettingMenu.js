import React from "react";
import { Input, Form, Checkbox, Button } from "antd";
import "./StudentSettingMenu.css";

const StudentSettingMenu = () => {
  const layout = {
    labelCol: { span: 0 },
    wrapperCol: { span: 25 },
  };
  const tailLayout = {
    wrapperCol: { offset: 0, span: 0 },
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    
      

      <Form.Item {...tailLayout} className ='SettingContainer'> 
        {/* <span className="textx">X</span>
      <span className="text1">בואו לדייק את ההסעות של ילדכם</span>
      <span className="text2">תוכל להגדיר מחדש גם בהמשך</span> */}
      <button className = 'x'>X</button>
      <h3 className = 'studentSettingHeader'>בואו<br></br> לדייק <br></br>את<br></br> ההסעות <br></br>של ילדכם</h3>
      <h5 className = 'studentSettingText'>תוכל להגדיר מחדש גם בהמשך</h5>
        <Button type="primary" name="jhg" className="btnSet">
          הגדר
        </Button>
        <br></br>
        <Button type="primary" name="jhg" className="btnFence">
          אחר כך
        </Button>
      
        
      </Form.Item>
    
  );
};

export default StudentSettingMenu;
