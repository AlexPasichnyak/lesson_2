import React, {Component} from 'react';

export default class TableBio extends Component {
	constructor(props) {
		super(props)
		
		this.state = {
			chronology: [
					{year: 1993, eventOfLife: "Народился в с.Дмитровка Знаменского р-на Кировоградской обл."},
					{year: 1999, eventOfLife: "Пошел в учиться в школу"},
					{year: 2010, eventOfLife: "Закончил школу"},
					{year: 2010, eventOfLife: "Поступил в Кировоградский государственный педуниверситет им. В.Винниченка"},
					{year: 2018, eventOfLife: "Начал изучать веб-программирование"}
			]
		}
	}

	toggleSortByYear = () => {
		const arrChronology = [...this.state.chronology];
		const isSorted = this.state.toggleSortByYear
		if (isSorted) {
			arrChronology.sort((a, b) => ((a.year) - (b.year)))
		} else {
			arrChronology.reverse()
		}
		
		this.setState({
			chronology: arrChronology,
			toggleSortByYear: !isSorted
		})
	}

	sortByEvent = () => {
		const chronology = this.state.chronology.concat()
		let left = 0
		let right = chronology.length - 1
		let temp
		do {
			for (let i = left; i < right; i++) {
	            if (chronology[i].eventOfLife > chronology[i + 1].eventOfLife) {
	                temp = chronology[i]
	                chronology[i] = chronology[i + 1]
	                chronology[i + 1] = temp
	            }
	        }
	        right--;
	        for (let i = right; left < i; i--) {
	        	if (chronology[i].eventOfLife < chronology[i - 1].eventOfLife) {
	        		temp = chronology[i]
	        		chronology[i] = chronology[i - 1]
	        		chronology[i - 1] = temp
	        	}
	        }
	        left++;
	    } while (left < right);

	    this.setState({chronology})
	}	

	onAddEventHandler = event => {
  		event.preventDefault();
  		const { chronology } = this.state;
  		const data = new FormData(event.target);
  		this.setState({
  			chronology: [...chronology, {year: +data.get('year'), eventOfLife:data.get('eventOfLife')}]
  		});
	    // console.log(chronology);
	}

	onDelete = () => {
		const chronology = this.state.chronology.concat()
		chronology.splice(-1, 1)
		this.setState({chronology})
	}

	render() {

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
			       				{this.state.chronology.map((chrono, index) => {
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
			</section> 
		)
	}

} 