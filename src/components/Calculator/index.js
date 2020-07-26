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
        fetching: false,
        showResult: true,
    };
  }

  buttonClickHandle = (e) => {
    e.preventDefault();
    this.setState({showResult: false});
  }

  render(){
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
                <option> 1 </option>
                <option> 2 </option>
                <option> 3 </option>
                <option> 4 </option>
                <option> 5 </option>
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
        {!(this.state.showResult) &&
          <Results>
            <ResultSubTitle> Результаты: </ResultSubTitle>
            {this.state.fetching ? <div> Загрузка... </div> :
              <div>
                <ResultItem>
                  <div className='room'>
                    <b className='roomSpec'>Одноместный стандарт</b>
                    <div>Тип питания: завтраки</div>
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

                <ResultItem>
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
                </ResultItem>
              </div>
            }
          </Results>
        }
      </MainContainer>
    )
  }
}

export default Calculator;