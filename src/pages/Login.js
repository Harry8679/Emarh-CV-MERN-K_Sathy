import React from 'react';
import { Button, Form, Input } from 'antd';
import '../resources/authentication.css';
import { Link } from 'react-router-dom';

const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const Login = () => {
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
        <h1>Login</h1>
        <hr />
        <Form.Item name='username' label='Username'>
          <Input />
        </Form.Item>

        <Form.Item name='password' label='Password'>
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
        <div className="d-flex">
          You don't have an account ? <Link to='/register'>Click here </Link> for register.
        </div>
      </Form>
    </div>
  )
}

export default Login;
