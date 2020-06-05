import React from 'react';
import './Formulario.css';
import { Form, Input, Button, Cascader, Avatar, DatePicker, Select } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import styled from 'styled-components';


const { Option } = Select;

const options = [
    {
      value: 'zhejiang',
      label: 'El Salvador',
      children: [
        {
          value: 'hangzhou',
          label: 'San Salvador',
          children: [
            {
              value: 'xihu',
              label: 'Mejicanos',
            },
            {
              value: 'xihu',
              label: 'San Salvador',
            },
          ],
        },
            {
              value: 'hangzhou',
              label: 'Santa Ana',
              children: [
                {
                  value: 'xihu',
                  label: 'Mejicanos',
                },
                {
                  value: 'xihu',
                  label: 'San Salvador',
                },
              ],
            },
            {
                value: 'hangzhou',
                label: 'La libertad',
                children: [
                  {
                    value: 'xihu',
                    label: 'Mejicanos',
                  },
                  {
                    value: 'xihu',
                    label: 'San Salvador',
                  },
                ],
              },
              {
                value: 'hangzhou',
                label: 'Ahuachapan',
                children: [
                  {
                    value: 'xihu',
                    label: 'Mejicanos',
                  },
                  {
                    value: 'xihu',
                    label: 'San Salvador',
                  },
                ],
              },
              {
                value: 'hangzhou',
                label: 'Sonsonate',
                children: [
                  {
                    value: 'xihu',
                    label: 'Mejicanos',
                  },
                  {
                    value: 'xihu',
                    label: 'San Salvador',
                  },
                ],
              },
      ],
    }
];

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Formulario = () => {

  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Desg>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            >
                
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <label>Primer Nombre: </label>
                    <Form.Item
                        name="Primer Nombre"
                        rules={[{ required: true, message: 'Por favor ingrese su primer nombre!' }]}
                    >
                        <Input />
                    </Form.Item>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <label>Segundo Nombre: </label>
                    <Form.Item
                        name="Segundo Nombre"
                        rules={[{ required: true, message: 'Por favor ingrese su segundo nombre!' }]}
                    >
                        <Input />
                    </Form.Item>
                </div> 
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <label>Primer Apellido: </label>   
                    <Form.Item
                        name="Primer Apellido"
                        rules={[{ required: true, message: 'Por favor ingrese su primer apellido!' }]}
                    >
                        <Input />
                    </Form.Item>
                </div>  
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <label>Segundo Apellido: </label>
                    <Form.Item
                        name="Segundo Apellido"
                        rules={[{ required: true, message: 'Por favor ingrese su segundo apellido!' }]}
                    >
                        <Input />
                    </Form.Item>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <Form.Item>
                        <Avatar className="avatar" size="large" icon={<UserOutlined />} />
                    </Form.Item>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Form.Item>
                        <Select defaultValue="Estado Civil" className="select">
                            <Option value="soltero">Soltero</Option>
                            <Option value="casado">Casado</Option>
                            <Option value="divorciado">Divorciado</Option>
                        </Select>
                </Form.Item>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <Form.Item>
                        <DatePicker />
                    </Form.Item>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <Form.Item>
                        <Cascader options={options} placeholder="Please select" />
                    </Form.Item>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <Button className="boton" htmlType="submit">
                        Enviar
                    </Button>
                    <Button className="boton2" htmlType="submit">
                        Cancelar
                    </Button>  
                </div>

            
                
            
            </Form>
        </div>
    </Desg>    
    );
};

const Desg = styled.div`
.container{
    display: flex;
    alig-items: center;
}
`;

export default Formulario;