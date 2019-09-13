import React, {Component} from 'react';
import picture from '../../../images/picture_load.png';

export default class TableBio extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			chronology: {
				0: {year: 1993, eventOfLife: "Народился в с.Дмитровка Знаменского р-на Кировоградской обл."},
				1: {year: 1999, eventOfLife: "Пошел в учиться в школу"},
				2: {year: 2010, eventOfLife: "Закончил школу"},
				3: {year: 2010, eventOfLife: "Поступил в Кировоградский государственный педуниверситет им. В.Винниченка"},
				4: {year: 2018, eventOfLife: "Начал изучать веб-программирование"},
			},
			dataUsers: {},
			isFocus: '',
			currIndex: ''
		}
		
	}

	
	toggleSortByYear = () => {
		const {chronology} = this.state;
		const isSorted = this.state.toggleSortByYear
		const arrObj=Object.values(chronology)
		if (isSorted) {
			arrObj.sort((a, b) => ((a.year) - (b.year)))
		} else {
			arrObj.reverse()
		}
		this.setState({
			chronology: {...arrObj},
			toggleSortByYear: !isSorted
		})
	}

	sortByEvent = () => {
		const {chronology} = this.state
		const arrChronology=Object.values(chronology)
		let left = 0
		let right = arrChronology.length - 1
		let temp
		do {
			for (let i = left; i < right; i++) {
				if (arrChronology[i].eventOfLife > arrChronology[i + 1].eventOfLife) {
	                temp = arrChronology[i]
	                arrChronology[i] = arrChronology[i + 1]
	                arrChronology[i + 1] = temp
	            }
	        }
	        right--;
	        for (let i = right; left < i; i--) {
	        	if (arrChronology[i].eventOfLife < arrChronology[i - 1].eventOfLife) {
	        		temp = arrChronology[i]
	        		arrChronology[i] = arrChronology[i - 1]
	        		arrChronology[i - 1] = temp
	        	}
	        }
	        left++;
	    } while (left < right);
	    this.setState({chronology: {...arrChronology}})
	}	

	onAddEventHandler = event => {
  		event.preventDefault();
  		const { chronology } = this.state;
  		const data = new FormData(event.target);
  		let lengthObj = Object.entries(chronology).length;
  		this.setState({
  			chronology: {...chronology, [lengthObj]:{year: +data.get('year'), eventOfLife:data.get('eventOfLife')}}
  		});
	}

	onDelete = () => {
		const {chronology} = this.state
		const arrChronology = Object.entries(chronology)
		arrChronology.pop()
		const res = Object.fromEntries(arrChronology)
		// console.log(chronology[Object.keys(chronology).splice(-1,1)])
		this.setState({chronology: {...res}})
	}

	componentDidMount(){
		const url = 'https://jsonplaceholder.typicode.com/users';
		try{
			fetch(url)
			  .then(response => response.json())
			  .then(data => {
			  	this.setState({dataUsers: data})
			 })	
		} catch(e) {
			console.log(e);
		}

		document.addEventListener('keydown', this.keyDown);
	}

	keyDown = e => {
		const table = document.getElementById('table_users');
		const arrRows = table.childNodes;
		let elem = -1;
		if (this.state.isFocus) {
			for (let i = 0; i < arrRows.length; i++) {
				if (arrRows[i].classList.value === 'bg-clicked') {
					elem = i;
				}
			}
		}

		const currentIndex = this.state.currIndex;
		if (currentIndex && currentIndex + 1 === arrRows.length) {
			elem = 0;
		}
		if (currentIndex && currentIndex - 1 === -1) {
			elem = arrRows.length;
		}
		if (e.key === 'ArrowDown') {
			elem++;
			if (this.state.isFocus) {
				this.setState({isFocus: this.state.isFocus.classList.remove('bg-clicked')});
			}
			this.setState({
				isFocus: arrRows[elem],
				currIndex: elem
			});
			arrRows[elem].classList.add('bg-clicked');
		}

		if (e.key === 'ArrowUp') {
			elem--;

			if (this.state.isFocus) {
				// if (elem === -1) {
				// 	return false
				// }
				this.setState({isFocus: this.state.isFocus.classList.remove('bg-clicked')});
			}			
			this.setState({
				isFocus: arrRows[elem],
				currIndex: elem
			});

			arrRows[elem].classList.add('bg-clicked');			
		}

	}

	dragStart = e => {
		const target = e.target;
		e.dataTransfer.setData('row_id', target.id);
		setTimeout(() => {
		  target.style.display = 'none';
		}, 0);
	}

	dropHandler = e => {
		e.preventDefault();
		const row_id = e.dataTransfer.getData('row_id');

		const row = document.getElementById(row_id);
		row.style.display = 'table-row';
		e.target.parentNode.after(row);
		
	}

	dragOver = (e) => {
		e.preventDefault();
	}

	isActiveClass = (e) => {
	// e.target.parentNode.classList.toggle('bg-clicked');
		const elem = this.state.isFocus;
		if (e.target.parentNode.classList.value === 'bg-clicked' && elem) {
			e.target.parentNode.classList.remove('bg-clicked');
			this.setState({isFocus: ''})
		} else if(!elem) {
			this.setState({isFocus: e.target.parentNode});
			e.target.parentNode.classList.add('bg-clicked');
		} else {
			this.setState({isFocus: this.state.isFocus.classList.remove('bg-clicked')})
			this.setState({isFocus: e.target.parentNode})
			e.target.parentNode.classList.add('bg-clicked')
		}
		
	}

	imgLoader = () => {
		alert('App loaded!')
	}

	imgErr = () => {
		alert('Something went wrong! Checking this image!');
	}

	render() {
		const { chronology } = this.state 
		const { dataUsers } = this.state 
		return (	
			<section className="b-b pt-4 pb-4">
				<div className="container">
          			<div className="row justify-content-center">
						<h2>Биография</h2>
						<table className="table table-striped table-dark">
						    <thead>
			                  <tr>
			                    <th scope="col">
			                    	Год<button className="btn btn-sm btn-secondary ml-2" type="button" onClick={this.toggleSortByYear}><i className="fa fa-sort-numeric-asc pr-1" aria-hidden="true"></i>Сортировать</button>
			                    </th>
			                    <th scope="col">Событие
			                    	<button className="btn btn-sm btn-secondary ml-2" type="button" onClick={this.sortByEvent}><i className="fa fa-sort-alpha-asc pr-1" aria-hidden="true"></i>Сортировать</button>
			                    </th>
			                  </tr>
			                </thead>
			                <tbody>
			       				{Object.entries(chronology).map(([index, chrono]) => {
							        return (
										<tr key={index}>
								            <td>{chrono.year}</td>
								            <td>{chrono.eventOfLife}</td>
								        </tr>
							        ) 
							      })
							   }
			                </tbody>
						</table>
							<form className="input-group-prepend" onSubmit={this.onAddEventHandler}>
								<button className="btn btn-success" type="submit"><i className="fa fa-plus-square pr-1" aria-hidden="true"></i>Добавить новое событие</button>
								 <input type="text" name="year" className="form-control" placeholder="Год" aria-label="" required/>
								<input type="text" name="eventOfLife" className="form-control mr-5" placeholder="Событие" required />								
								<button type="button" className="btn btn-danger ml-5" onClick={this.onDelete}><i className="fa fa-trash pr-1" aria-hidden="true"></i>Удалить Событие</button>
							</form>
					</div>
				</div>
				<hr/>
				<div className="container">
          			<div className="row justify-content-center">
						<h2>Рандомные данные о пользователях</h2>
						<table className="table table-striped table-dark" onDragOver={this.dragOver} onDrop={this.dropHandler}>
						    <thead>
			                  <tr>
			                    <th scope="col">Имя</th>
			                    <th scope="col">Email</th>
			                    <th scope="col">Компания</th>
			                  </tr>
			                </thead>
			                <tbody id="table_users">
			       				{Object.entries(dataUsers).map(([id, item]) => {
							        return (
										<tr key={id}
										 draggable="true" 
										 onDragStart={this.dragStart} 
										 id={`row-`+id} 
										 onClick={this.isActiveClass}>
								            <td>{item.name}</td>
								            <td>{item.email}</td>
								            <td>{item.company.name}</td>
								        </tr>
							        ) 
							      })
							   }
			                </tbody>
						</table>
						<img className="img-fluid" src={picture} alt='img' onLoad={this.imgLoader} onError={this.imgErr}/>
					</div>
				</div>
			</section> 
		)
	}

} 
