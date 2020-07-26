import React from 'react'
import { Form, Input, InputNumber, Button, Select,DatePicker,  } from 'antd';
import 'moment/locale/ru';
const { Option } = Select;
import {Container,ItemButton} from './styles'

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not validate email!',
    number: '${label} is not a validate number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

class FormLanding extends React.Component {

  render() {
    const onFinish = values => {
      console.log(values);
    };
    return( 
      <Container>
      <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
        <Form.Item
          name={['user', 'name']}
          label="ФИО"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={['user', 'email']}
          label="Почта"
          rules={[
            {
              type: 'email',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="gender"
          label="Номер"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            placeholder="Выберите номер"
            allowClear
          >
            <Option value="Одноместный стандарт">Одноместный стандарт</Option>
            <Option value="2-ух местный стандарт с 2 кроватями">2-ух местный стандарт с 2 кроватями</Option>
            <Option value="2-х местный стандарт с 1 кроватью">2-х местный стандарт с 1 кроватью</Option>
            <Option value="2-х местный стандарт с 1 кроватью + доп. место">2-х местный стандарт с 1 кроватью + доп. место</Option>
            <Option value="2-х местный стандарт с 2 кроватями + доп. место">2-х местный стандарт с 2 кроватями + доп. место</Option>
            <Option value="Люкс 2х-комнтантый">Люкс 2х-комнтантый</Option>
            <Option value="Люкс 3х-комнтантый супериор">Люкс 3х-комнтантый супериор</Option>
            <Option value="Номер МГН (маломобильные группы населения)">Номер МГН (маломобильные группы населения)</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Серия и номер паспота">
          <Input />
        </Form.Item>
        <Form.Item
          name={['user', 'age']}
          label="Сколько персон"
          rules={[
            {
              type: 'number',
              min: 0,
              max: 99,
            },
          ]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item label="Выберите дату">
          <DatePicker picker="Заезд" />
        </Form.Item>

        <Form.Item name={['user', 'introduction']} label="Комментарий">
          <Input.TextArea />
        </Form.Item>
        {/* <Form.Item>
        <Button type="primary" htmlType="submit">
            Отправить
          </Button>
        </Form.Item> */}
      </Form>
      <ItemButton size="large" type="primary" htmlType="submit">
            Отправить
          </ItemButton>
    </Container>
    )
  }
}

export default FormLanding;
