import React from 'react';
import {Spin, Modal, Button, Form, Input, InputNumber} from 'antd';

import {
Container,
InputContainer,
MainContainer,
Results,
ResultItem,
Title,
ResultSubTitle,
Label,
BookingButton,
} from './styles.js';


import "./style.css"

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
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

class Calculator extends React.Component{
  //formRef = React.createRef(); // ref to feedback form to manipulate data in it
  constructor(props){
    super(props)
    this.state = {
      fetching: true, // is app fetching the biblio globus
      showResult: true, // biblioglobus response result
      visible: false, // for modal window with feedback form
      keys: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], // for mapping with id of biblioglobus result
      id: 0, // default id for result to manipulate in modal window
      loadingform: true, // is modal window with form loading in moment
      kidsValue: 0,
      adultsValue: 1,
      nightsValue: 1,
      dateValue: 0,
    };
    this.formRef = React.createRef();
  }

  // onFinish with form in modal window
  onFinish = (val) => {
    console.log(val)
    var feedbackFormData = this.formRef.current.getFieldsValue();
    console.log(feedbackFormData.name);
    fetch('api/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'name': feedbackFormData.name,
        'phone': feedbackFormData.phone,
        'passport': feedbackFormData.passport,
        'email': feedbackFormData.email,
        'introduction': feedbackFormData.introduction,
      })
    })

    this.setState({
      loadingform: true,
      id: 0,
    });
    setTimeout(() => {
      this.setState({ loadingform: false, visible: false });
    }, 2000);
    this.formRef.current.resetFields();
  }
  
  // func to set state loadingform to false and fill form with needed data
  stoploadingform = () => {
    this.setState({
      loadingform: false,
    });
  }

  // Runs when user clicks button 'Забронировать'
  showModal = (e) => {
    e.preventDefault()
    this.setState({
      visible: true, // draw the modal form
    });
    this.state.id = e.target.id; // take id of target bookingbutton
    this.stoploadingform();
  };
  
  // login in biblioglobus to get cookies through SSR proxy
  componentDidMount() {
    const auth_url = '/api/login' // endpoint that proxy req to biblioglobus login page
    fetch(auth_url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept-Encoding': 'gzip, deflate, br',
      },
      body:'login=ruslan888&pwd=mfUbb.1aR_(Z35',
    })
  }

  // func to fetch data from biblioglobus. Runs when user clicks button 'Поиск номеров'
  fetchData = () => {
    var nightsValue = String(this.state.nightsValue);
    var kidsValue = this.state.kidsValue;
    var adultsValue = this.state.adultsValue;
    var dateValue = this.state.dateValue.split('-');
    var year = dateValue[0];
    var month = dateValue[1];
    var day = dateValue[2];
    var persons = (('0030719840.'.repeat(adultsValue)) + ('0030720150.'.repeat(kidsValue))).slice(0, -1);
    
    // Fetching data through ssr proxy endpoint with needed parameters to show correct result
    fetch(`/api/bgreq?action=price&tid=211&id_price=-1&flt=100410000050&F4=102610084348&data=${day}.${month}.${year}&f7=${nightsValue}&p=${persons}&xml=11`, {
      headers: {
        'Accept-Encoding': 'gzip, deflate, br',
      },
    })
      .then(response => response.json())
      // options state is options of accomodation to operate with
      .then(data => this.setState({options: data.entries}))
      // stop fetching biblioglobus
      .then(() => this.setState({fetching: false}))
  }

  // Runs when user clicks 'Поиск номеров'
  buttonClickHandle = (e) => {
    e.preventDefault();
    this.setState({
      showResult: false,
      fetching: true,
    });
    this.fetchData();
    //this.formRef = React.createRef();
  }

  // happens when user clicks outside modal window
  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
      id: 0,
    });
    this.formRef.current.resetFields();
  };
  
  render(){
    const {fetching, showResult, options, keys, id, kidsValue, adultsValue} = this.state;
    return(
      <MainContainer>
          <Title> Забронировать номер </Title>
        <form className='form-box'>
          <Container>
            <InputContainer>
              <Label>
                Дата заезда
              </Label>
              <input className='form-control' type='date' id='date' onChange={(e) => {this.setState({dateValue: e.target.value})}}></input>
            </InputContainer>
            <InputContainer>
              <Label>
                Количество ночей
              </Label>
              <select className='form-control' id='nights' onChange={(e) => {this.setState({nightsValue: e.target.value})}}>
                <option value='1'> 1 </option>
                <option value='2'> 2 </option>
                <option value='3'> 3 </option>
                <option value='4'> 4 </option>
                <option value='5'> 5 </option>
                <option value='6'> 6 </option>
                <option value='7'> 7 </option>
                <option value='8'> 8 </option>
                <option value='9'> 9 </option>
                <option value='10'> 10 </option>
                <option value='11'> 11 </option>
                <option value='12'> 12 </option>
                <option value='13'> 13 </option>
                <option value='14'> 14 </option>
                <option value='15'> 15 </option>
                <option value='16'> 16 </option>
                <option value='17'> 17 </option>
                <option value='18'> 18 </option>
                <option value='19'> 19 </option>
                <option value='20'> 20 </option>
                <option value='21'> 21 </option>
                <option value='22'> 22 </option>
                <option value='23'> 23 </option>
                <option value='24'> 24 </option>
                <option value='25'> 25 </option>
                <option value='26'> 26 </option>
                <option value='27'> 27 </option>
                <option value='28'> 28 </option>
              </select>
            </InputContainer>
          </Container>
          <Container>
            <InputContainer>
              <Label> Взрослые </Label>
              <select className='form-control' id='adults' onChange={(e) => {this.setState({adultsValue: e.target.value})}}>
                <option> 1 </option>
                <option> 2 </option>
                <option> 3 </option>
                <option> 4 </option>
                <option> 5 </option>
                <option> 6 </option>
                <option> 7 </option>
                <option> 8 </option>
                <option> 9 </option>
                <option> 10 </option>
              </select>
            </InputContainer>
            <InputContainer>
              <Label> Дети </Label>
              <select className='form-control' id='kids' onChange={(e) => {this.setState({kidsValue: e.target.value})}}>
                <option> 0 </option>
                <option> 1 </option>
                <option> 2 </option>
                <option> 3 </option>
                <option> 4 </option>
                <option> 5 </option>
                <option> 6 </option>
                <option> 7 </option>
                <option> 8 </option>
                <option> 9 </option>
                <option> 10 </option>
              </select>
            </InputContainer>
          </Container>
          <Container>
            <div className='buttonContainer'>
              <button className='searchButton' onClick={this.buttonClickHandle}>Поиск номеров</button>
            </div>
          </Container>
        </form>
        {!(showResult) &&
          <Results>
            <ResultSubTitle> Результаты: </ResultSubTitle>
            {this.state.fetching ? <Spin> </Spin> :
              <div className='resultItems'>
                {options.map((option, keys) => (
                  <ResultItem>
                    <div className='room'>
                      <b className='roomSpec'>{option.room}</b>
                      <div></div>
                      <div>
                        <strong>{option.dt}</strong>
                        <span>({option.duration} ночей)</span>
                      </div>
                    </div>
                    <div className='perPrice'>
                      <Label>Цена за ночь</Label>
                      <div className='price'>{Math.trunc(option.prices[0].amount / option.duration)} руб.</div>
                    </div>
                    <div className='perPrice'>
                      <Label>Общая цена</Label>
                      <div className='price'>{option.prices[0].amount} руб.</div>
                    </div>
                    <div className='reserve'>
                      <BookingButton onClick={this.showModal} id={keys}>Забронировать</BookingButton>
                    </div>
                    <Modal
                      title="Забронировать"
                      visible={this.state.visible}
                      onCancel={this.handleCancel}
                      footer={null}
                    >
                    {this.state.loadingform ? <Spin>Отправка</Spin> :
                      <Form {...layout} ref={this.formRef} name="nest-messages" validateMessages={validateMessages} onFinish={this.onFinish}>

                        <Form.Item
                          name={'name'}
                          label="ФИО"
                          rules={[
                            {
                              required: true,
                            },
                          ]}
                        >
                          <Input placeholder='Фамилия Имя Отчество' />
                        </Form.Item>

                        <Form.Item
                          name='phone'
                          label='Ваш телефон'
                          rules = {[
                            {
                              required: true,                             
                            }
                          ]}
                        >                         
                          <Input placeholder='+79xxxxxxxxx' />
                        </Form.Item>

                        <Form.Item
                          name='passport'
                          label='Серия номер паспорта'
                          rules = {[
                            {
                              required: true,                             
                            }
                          ]}
                        >
                        <Input placeholder='xxxx xxxxxx' />
                        </Form.Item>

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
                          initialValue={`КОМНАТА: ${options[this.state.id].room}\nДАТА ЗАЕЗДА: ${options[this.state.id].dt}\nКОЛИЧЕСТВО ВЗРОСЛЫХ: ${adultsValue}\nКОЛИЧЕСТВО ДЕТЕЙ: ${kidsValue}\nКОЛИЧЕСТВО НОЧЕЙ: ${options[this.state.id].duration}\nЦЕНА ЗА НОЧЬ: ${Math.trunc(options[this.state.id].prices[0].amount / options[this.state.id].duration)} руб.\nОБЩАЯ ЦЕНА: ${options[this.state.id].prices[0].amount} руб.\n------------------------------------\nОставьте комментарии и пожелания:\n`}
                          >
                          <Input.TextArea
                            autoSize={{ minRows: 6, maxRows: 40 }}>
                          </Input.TextArea> 
                        </Form.Item>

                        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                          <Button type="primary" htmlType="submit" onClick={this.sendForm}>
                            Отправить данные
                          </Button>
                        </Form.Item>
                      </Form>
                    }
                    </Modal>
                  </ResultItem>
                ))}
              </div>
            }
          </Results>
        }
      </MainContainer>
    )
  }
}

export default Calculator;