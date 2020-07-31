import React from 'react';
import cookieClient from 'react-cookie';


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
//import { Browser } from 'leaflet';

class Calculator extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      fetching: true,
      showResult: true,
    };
    this.API_KEY = "40ca59db933d3e413b91a1495629e17c";
  }
  
  componentDidMount() {
    const auth_url = '/api/login'
    fetch(auth_url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept-Encoding': 'gzip, deflate, br',
      },
      body:'login=ruslan888&pwd=mfUbb.1aR_(Z35',
    }).then(response => console.log(response))
  }
  
  fetchData = (API_KEY) => {
    var dateSelect = document.getElementById("date");
    var adultsSelect = document.getElementById("adults");
    var kidsSelect = document.getElementById("kids");
    var nightsSelect = document.getElementById("nights");
    var nightsValue = nightsSelect.options[nightsSelect.selectedIndex].value;
    var kidsValue = kidsSelect.value;
    var adultsValue = adultsSelect.value;
    var dateValue = dateSelect.value.split('-');
    var year = dateValue[0];
    var month = dateValue[1];
    var day = dateValue[2];
    var persons = (('0030719840.'.repeat(adultsValue)) + ('0030720150.'.repeat(kidsValue))).slice(0, -1);

    fetch(`/api/bgreq?action=price&tid=211&id_price=-1&flt=100410000050&F4=102610084348&data=${day}.${month}.${year}&f7=${nightsValue}&p=${persons}&xml=11`, {
      headers: {
        'Accept-Encoding': 'gzip, deflate, br',
      },
    })
      .then(response => response.json())
      .then(data => console.log(data))
  }

  buttonClickHandle = (e) => {
    e.preventDefault();
    this.setState({showResult: false});
    this.fetchData(this.API_KEY);
  }
  
  render(){
    const {fetching,showResult } = this.state;
    return(
      <MainContainer>
          <Title> Забронировать номер </Title>
        <form className='form-box'>
          <Container>
            <InputContainer>
              <Label>
                Дата заезда
              </Label>
              <input className='form-control' type='date' id='date'></input>
            </InputContainer>
            <InputContainer>
              <Label>
                Количество ночей
              </Label>
              <select className='form-control' id='nights'>
                <option value='1'> 1 </option>
                <option value='2'> 2 </option>
                <option value='3'> 3 </option>
                <option value='4'> 4 </option>
                <option value='6'> 6 </option>
                <option value='7'> 7 </option>
                <option value='8'> 8 </option>
                <option value='9'> 9 </option>
                <option value='10'> 10 </option>
                <option value='11'> 11 </option>
                <option value='12'> 12 </option>
                <option value='13'> 13 </option>
              </select>
            </InputContainer>
          </Container>
          <Container>
            <InputContainer>
              <Label> Взрослые </Label>
              <select className='form-control' id='adults'>
                <option> 0 </option>
                <option> 1 </option>
                <option> 2 </option>
                <option> 3 </option>
                <option> 4 </option>
              </select>
            </InputContainer>
            <InputContainer>
              <Label> Дети </Label>
              <select className='form-control' id='kids'>
                <option> 0 </option>
                <option> 1 </option>
                <option> 2 </option>
                <option> 3 </option>
                <option> 4 </option>
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
            {this.state.fetching ? <div> Загрузка... </div> :
              <div>
                <ResultItem>
                  <div className='room'>
                    <b className='roomSpec'>{this.state.name}</b>
                    <div>Температура: {this.state.temp}</div>
                    <div>
                      <strong>27.07.2020 — 03.08.2020</strong>
                      <span>(7 ночей)</span>
                    </div>
                  </div>
                  <div className='perPrice'>
                    <Label>Цена за ночь</Label>
                    <div className='price'>2000 руб.</div>
                  </div>
                  <div className='perPrice'>
                    <Label>Общая цена</Label>
                    <div className='price'>10000 руб.</div>
                  </div>
                  <div className='reserve'>
                    <BookingButton>Забронировать</BookingButton>
                  </div>
                </ResultItem>

                {/* <ResultItem>
                  <div className='room'>
                    <b className='roomSpec'>2-ух местный стандарт с 2 кроватями</b>
                    <div>Тип питания: завтраки</div>
                    <div >
                      <strong >27.07.2020 — 03.08.2020</strong>
                      <span >(7 ночей)</span>
                    </div>
                  </div>
                  <div className='perPrice'>
                    <Label>Цена за ночь</Label>
                    <div className='price'>3000 руб.</div>
                  </div>
                  <div className='perPrice'>
                    <Label>Общая цена</Label>
                    <div className='price'>15000 руб.</div>
                  </div>
                  <div className='reserve'>
                    <BookingButton>Забронировать</BookingButton>
                  </div>
                </ResultItem> */}
              </div>
            }
          </Results>
        }
      </MainContainer>
    )
  }
}

export default Calculator;