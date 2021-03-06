import React, { useEffect } from 'react';
import {Spin, Modal, Button, Form, Input, InputNumber} from 'antd';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };  


const FeedbackForm = (props) => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({
        introduction: props.text,
    })
  })

  const onFinish = (val) => {
    fetch('api/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'name': Object.assign(val.adults, val.kids),
        'phone': val.phones,
        'passport': Object.assign(val.passports, val.kidspassports),
        'email': val.email,
        'introduction': val.introduction,
      })
    });
    props.doloadingform();
    props.formtimeout();
  }

  var adultslist = [];
  var kidslist = [];

  for (var i = 1; i <= props.kids; i++) {
    kidslist.push(i);
  }

  for (var i = 1; i <= props.adults; i++) {
    adultslist.push(i);
  }

  return(
    <Form {...layout} form={form} onFinish={onFinish}>
      <Form.List name='adults'>
        {(fields) => (
          <div>
          {adultslist.map(adult => (
              <Form.Item {...adult}
                name={`name${adult}`}
                label={`ФИО Взрослого ${adult}`}
                rules={[
                {
                    required: true,
                    message: 'Обязательно к заполнению'
                },
                ]}
              >
                <Input placeholder='Фамилия Имя Отчество' />
              </Form.Item>
          ))}
          </div>
      )}
      </Form.List> 
      <Form.List name='passports'>
        {(fields) => (
          <div>
          {adultslist.map(adult => (
              <Form.Item {...adult}
                name={`passport${adult}`}
                label={`Серия номер паспорта человека ${adult}`}
                rules={[
                {
                    required: true,
                    message: 'Обязательно к заполнению'
                },
                ]}
              >
                <Input placeholder='хххх хххххх' />
              </Form.Item>
          ))}
          </div>
      )}
      </Form.List>
      <Form.List name='phones'>
        {(fields) => (
          <div>
          {adultslist.map(adult => (
              <Form.Item {...adult}
                name={`phone${adult}`}
                label={`Телефон ${adult}`}
                rules={[
                {
                    required: false,
                },
                ]}
              >
                <Input placeholder='+79xxxxxxxxx' />
              </Form.Item>
          ))}
          </div>
      )}
      </Form.List>
      <Form.List name='kids'>
        {(fields) => (
          <div>
          {kidslist.map(kid => (
              <Form.Item {...kid}
                name={`kidname${kid}`}
                label={`ФИО Ребенка ${kid}`}
                rules={[
                {
                    required: true,
                    message: 'Обязательно к заполнению'
                },
                ]}
              >
                <Input placeholder='Фамилия Имя Отчество' />
              </Form.Item>
          ))}
          </div>
      )}
      </Form.List>
      <Form.List name='kidspassports'>
        {(fields) => (
          <div>
          {kidslist.map(kid => (
              <Form.Item {...kid}
                name={`kidpassport${kid}`}
                label={`Свидетельство о рождении ${kid}`}
                rules={[
                {
                    required: true,
                    message: 'Обязательно к заполнению'
                },
                ]}
              >
                <Input placeholder='VII-МЮ 123456' />
              </Form.Item>
          ))}
          </div>
      )}
      </Form.List>           

    <Form.Item
        name={'email'}
        label="Email"
        rules={[
        {
            type: 'email',
        },
        ]}
    >
        <Input />
    </Form.Item>

    <Form.Item 
        name='introduction' 
        label="Описание"
        >
        <Input.TextArea
        autoSize={{ minRows: 6, maxRows: 40 }}>
        </Input.TextArea> 
    </Form.Item>

    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
        Отправить данные
        </Button>
    </Form.Item>
    </Form>
  );
};

export default FeedbackForm