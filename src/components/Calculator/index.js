import React from 'react';
import {Container, InputContainer, MainContainer, Results, ResultItem} from './styles.js';
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
          <h1> Забронировать номер </h1>
        <form className='form-box'>
          <Container>
            <InputContainer>
              <label>
                Дата заезда
              </label>
              <input className='form-control' type='date' id='date'></input>
            </InputContainer>
            <InputContainer>
              <label>
                Количество ночей
              </label>
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
              <label> Взрослые </label>
              <select className='form-control' id='adults'>
                <option> 1 </option>
                <option> 2 </option>
                <option> 3 </option>
                <option> 4 </option>
              </select>
            </InputContainer>
            <InputContainer>
              <label> Дети </label>
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
            <h3> Результаты: </h3>
            {this.state.fetching ? <div> Загрузка... </div> :
              <div>
                <ResultItem>
                  <div className='room'>
                    <b className='roomSpec'>Одноместный стандарт</b>
                    <div class="deal-food">Тип питания: завтраки</div>
                    <div class="deal-dates">
                      <strong class="deal-InOutDate">27.07.2020 — 03.08.2020</strong>
                      <span class="deal-Night">(7 ночей)</span>
                    </div>
                  </div>
                  <div className='perPrice'>
                    <label>Цена за ночь</label>
                    <div className='price'>2000 руб.</div>
                  </div>
                  <div className='perPrice'>
                    <label>Общая цена</label>
                    <div className='price'>10000 руб.</div>
                  </div>
                  <div className='reserve'>
                    <button>Забронировать</button>
                  </div>
                </ResultItem>

                <ResultItem>
                  <div className='room'>
                    <b className='roomSpec'>2-ух местный стандарт с 2 кроватями</b>
                    <div class="deal-food">Тип питания: завтраки</div>
                    <div class="deal-dates">
                      <strong class="deal-InOutDate">27.07.2020 — 03.08.2020</strong>
                      <span class="deal-Night">(7 ночей)</span>
                    </div>
                  </div>
                  <div className='perPrice'>
                    <label>Цена за ночь</label>
                    <div className='price'>3000 руб.</div>
                  </div>
                  <div className='perPrice'>
                    <label>Общая цена</label>
                    <div className='price'>15000 руб.</div>
                  </div>
                  <div className='reserve'>
                    <button>Забронировать</button>
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

export default Calculator