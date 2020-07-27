import React from 'react';


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
    const auth_url = 'https://login.bgoperator.ru/auth'
    fetch(auth_url, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
        'Accept-Encoding': 'gzip',
      },
      body: {
        'login': 'ruslan888',
        'pwd': 'mfUbb.1aR_(Z35',
      },
    })
      .then(response => console.log(response)) 
  }
  
  fetchData = (API_KEY) => {
    var select = document.getElementById("nights");
    var value = select.options[select.selectedIndex].value;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${API_KEY}&units=metric`
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({name: data.name, temp: data.main.temp,
                                   fetching: false, }))
      .catch(error => this.setState({ error, isLoading: false }));
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
                <option value='Moscow'> Moscow </option>
                <option value='Sochi'> Sochi </option>
                <option value='Krasnodar'> Krasnodar </option>
                <option value='London'> London </option>
                <option value='Paris'> Paris </option>
              </select>
            </InputContainer>
          </Container>
          <Container>
            <InputContainer>
              <Label> Взрослые </Label>
              <select className='form-control' id='adults'>
                <option> 1 </option>
                <option> 2 </option>
                <option> 3 </option>
                <option> 4 </option>
              </select>
            </InputContainer>
            <InputContainer>
              <Label> Дети </Label>
              <select className='form-control' id='kids'>
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