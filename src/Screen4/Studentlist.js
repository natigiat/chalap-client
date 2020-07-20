import React from "react";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

import "antd/dist/antd.css";

const StudentList = (props) => {
  // const [name, setName] = useState(props[0].name);
  // const id = props.id;

  const menuItems = (
    <Menu>
      {props.students.map((student) => (
        <Menu.Item
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.alipay.com/"
        >
          {student.name}
        </Menu.Item>
      ))}
    </Menu>
  );
  return (
    <Dropdown overlay={menuItems}>
      <a
        href="//"
        className="ant-dropdown-link"
        onClick={(e) => e.preventDefault()}
      >
        Hover me <DownOutlined />
      </a>
      , mountNode,
    </Dropdown>
  );
};

export default StudentList;
