import React, { Component } from 'react';

export class Autocomplete extends Component {
    constructor() {
        super();

        this.state = {
            arrayName: [
                'Подопригора Павел',
                'Белоусов Дмитрий',
                'Миниев Руслан',
                'Старикова Александра',
                'Исаев Роман',
                'Белоконь Андрей',
                'Викулин Артем',
                'Заусалин Алексей',
                'Кумпалов Ярослав',
                'Гошко Дмитрий',
                'Марчак Алесей',
                'Капелюшко Анна',
                'Колотилина Юлия',
                'Ятин Андрей',
                'Комаровский Дмитрий',
                'Колесник Виктория',
                'Кметь Екатерина',
                'Кулик Антон',
                'Бегарь Ярослав',
                'Петрова Татьяна',
                'Первый Андрей',
                'Копач Галина',
                'Щетинин Иван',
                'Хомич Анна',
                'Федоров Святослав',
                'Танасиенко Денис',
                'Замковой Максим',
                'Бармина Екатерина',
                'Губко Марина',
                'Валенюк Евгения',
                'Дригола Марк',
                'Кутенко Олег'
            ],
            newArr: [],
            nameClicked: '',
            valueInputs: ''
        };
    }

    onChangeInput(event) {
        let valueInput = event.target.value.toLowerCase();

        if(valueInput !== '' && valueInput !== ' ') {
            let newArrName = this.state.arrayName.filter((elem, i) => {
                return elem.toLowerCase().indexOf(valueInput) !== -1;
            });

            this.setState({
                nameClicked: event.target.value,
                newArr: newArrName
            })
        } else {
            this.setState({
                nameClicked: '',
                newArr: []
            })
        }

        event.preventDefault();
    }

    clickCompleteValue(name) {
        this.setState({
            nameClicked: name,
            newArr: []
        })

    }

    render() {
        return(
            <div>
                <div className="auto-complete">
                    <input
                        type="text"
                        className="form-control"
                        value={ this.state.nameClicked }
                        onChange={ (event) => this.onChangeInput(event) }
                    />
                </div>
                <ul className="list-group">
                    {
                        this.state.newArr.map((el,i) => {
                            return <li
                                className="list-group-item"
                                key={i}
                                onClick={ () => this.clickCompleteValue(el) }
                            >{ el }</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}