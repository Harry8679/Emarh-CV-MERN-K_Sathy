import React from 'react';
import { Button, Form, Input, message } from 'antd';
import '../resources/authentication.css';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Register = () => {
  const onFinish = async (values) => {
    // console.log('Success:', values);
    try {
      await axios('/api/v1/users/register', values);
      message.success('Registration successful');
    } catch(error) {
      message.error('Registration failed');
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className='auth-parent'>
      <Form name="basic" labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <h1>Register</h1>
        <hr />
        <Form.Item name='username' label='Username'>
          <Input />
        </Form.Item>

        <Form.Item name='password' label='Password'>
          <Input />
        </Form.Item>

        <Form.Item name='cpassword' label='Confirm Password'>
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
        <div className="d-flex">
          Do you have already an account ? <Link to='/login'>Click here</Link>
        </div>
      </Form>
    </div>
  )
}

export default Register;
