import React, { Component } from 'react';
import Form from '../../../elements/Form/Form';
import TableChrono from './components/TableChrono';
import Wrapper from './components/Wrapper';
import TableUsers from './components/TableUsers';
import WrapSection from './components/WrapSection';
import picture from '../../../../images/picture_load.png';
import ImgLoad from '../../../elements/ImgLoad/ImgLoad';
import '../../../../scss/layouts/Pages/Tables.scss';

export default class Tables extends Component {
  	constructor(props) {
    	super(props);

	    this.state = {
	      chronology: {
	        0: { 
	        	year: 1993, eventOfLife: 'Народился в с.Дмитровка Знаменского р-на Кировоградской обл.' 
	        },
	        1: { year: 1999, eventOfLife: 'Пошел в учиться в школу' },
	        2: { year: 2010, eventOfLife: 'Закончил школу' },
	        3: { year: 2010, eventOfLife: 'Поступил в Кировоградский государственный педуниверситет им. В.Винниченка' },
	        4: { year: 2018, eventOfLife: 'Начал изучать веб-программирование' },
	      },
	      dataUsers: {},
	      isFocus: '',
	      currIndex: ''
	    };
  	}

  	componentDidMount() {
	    const url = 'https://jsonplaceholder.typicode.com/users';
	    try {
	      fetch(url)
	  		  .then((response) => response.json())
	  		  .then((data) => {
	  		  	this.setState({ dataUsers: data });
	  		 });	
	    } catch (e) {
	      console.log(e);
	    }

	    document.addEventListener('keydown', this.keyDown);
  	}
	
	toggleSortByYear = () => {
	  const { chronology } = this.state;
	  const isSorted = this.state.toggleSortByYear;
	  const arrObj = Object.values(chronology);
	  if (isSorted) {
	    arrObj.sort((a, b) => ((a.year) - (b.year)));
	  } else {
	    arrObj.reverse();
	  }
	  this.setState({
	    chronology: { ...arrObj },
	    toggleSortByYear: !isSorted
	  });
	}

	sortByEvent = () => {
	  const { chronology } = this.state;
	  const arrChronology = Object.values(chronology);
	  let left = 0;
	  let right = arrChronology.length - 1;
	  let temp;
	  do {
	    for (let i = left; i < right; i++) {
	      	if (arrChronology[i].eventOfLife > arrChronology[i + 1].eventOfLife) {
	                temp = arrChronology[i];
	                arrChronology[i] = arrChronology[i + 1];
	                arrChronology[i + 1] = temp;
	            }
	        }
	        right--;
	        for (let i = right; left < i; i--) {
	        	if (arrChronology[i].eventOfLife < arrChronology[i - 1].eventOfLife) {
	        		temp = arrChronology[i];
	        		arrChronology[i] = arrChronology[i - 1];
	        		arrChronology[i - 1] = temp;
	        	}
	        }
	        left++;
	    } while (left < right);
	    this.setState({ chronology: { ...arrChronology } });
	}	

	onAddEventHandler = (event) => {
  		event.preventDefault();
  		const { chronology } = this.state;
  		const data = new FormData(event.target);
  		const lengthObj = Object.entries(chronology).length;
  		this.setState({
  			chronology: { 
  				...chronology,
	      [lengthObj]: { 
  					year: data.get('year'), eventOfLife: data.get('eventOfLife') 
  				} 
  			}
  		});
	}

	onDelete = () => {
		const { chronology } = this.state;
		const arrChronology = Object.entries(chronology);
		arrChronology.pop();
		const res = Object.fromEntries(arrChronology);
		// console.log(chronology[Object.keys(chronology).splice(-1,1)])
		this.setState({ chronology: { ...res } });
	}

	keyDown = (e) => {
		const table = document.getElementById('table_users');
		const arrRows = table.childNodes;
		const { isFocus } = this.state;
		let elem = -1;
		if (isFocus) {
			for (let i = 0; i < arrRows.length; i++) {
				if (arrRows[i].classList.value === 'bg-clicked') {
					elem = i;
				}
			}
		}

		const { currIndex } = this.state;
		if (currIndex && currIndex + 1 === arrRows.length) {
		elem = 0;
		}
		if (currIndex && currIndex - 1 === -1) {
		elem = arrRows.length;
		}
		if (e.key === 'ArrowDown') {
		elem++;
		if (isFocus) {
		  this.setState({ 
		  	isFocus: this.state.isFocus.classList.remove('bg-clicked') 
		  });
		}
		this.setState({
		  isFocus: arrRows[elem],
		  currIndex: elem
		});
		arrRows[elem].classList.add('bg-clicked');
		}

		if (e.key === 'ArrowUp') {
		elem--;

		if (isFocus) {
		  // if (elem === -1) {
		  // 	return false
		  // }
		  this.setState({ isFocus: this.state.isFocus.classList.remove('bg-clicked') });
		}			
		this.setState({
		  isFocus: arrRows[elem],
		  currIndex: elem
		});

		arrRows[elem].classList.add('bg-clicked');			
		}
	}

	dragStart = (e) => {
	  const { target } = e;
	  e.dataTransfer.setData('row_id', target.id);
	  setTimeout(() => {
		  target.style.display = 'none';
	  }, 0);
	}

	dropHandler = (e) => {
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
	  const { isFocus } = this.state;
	  if (e.target.parentNode.classList.value === 'bg-clicked' && isFocus) {
	    e.target.parentNode.classList.remove('bg-clicked');
	    this.setState({ isFocus: '' });
	  } else if (!isFocus) {
	    this.setState({ isFocus: e.target.parentNode });
	    e.target.parentNode.classList.add('bg-clicked');
	  } else {
	    this.setState({ 
	    	isFocus: this.state.isFocus.classList.remove('bg-clicked') 
	    });
	    this.setState({ isFocus: e.target.parentNode });
	    e.target.parentNode.classList.add('bg-clicked');
	  }
	}

	imgLoader = () => {
	  alert('App loaded!');
	}

	imgErr = () => {
	  alert('Something went wrong! Checking this image!');
	}

	chronologyView = () => {
	  const { chronology } = this.state;
	  const rows = Object.entries(chronology).map(([index, chrono]) => {
	        return (
  <tr key={index}>
    <td>{chrono.year}</td>
    <td>{chrono.eventOfLife}</td>
  </tr>
	        ); 
	    });
	    return rows;				   
	}

	dataUsersView = () => {
	  const { dataUsers } = this.state;
	  const rows = Object.entries(dataUsers).map(([id, item]) => {
	        return (
  <tr
    key={id}
    draggable="true" 
    onDragStart={this.dragStart} 
    id={`row-${id}`} 
    onClick={this.isActiveClass}
  >
    <td>{item.name}</td>
    <td>{item.email}</td>
    <td>{item.company.name}</td>
  </tr>
	        ); 
	    });
	    return rows; 
	}


	render() {
	  	return (
  <WrapSection>
    <Wrapper title="Биография">
      <TableChrono 
        view={this.chronologyView()} 
        toggleSortByYear={this.toggleSortByYear} 
        sortByEvent={this.sortByEvent}
      />
      <Form 
        onAddEvent={this.onAddEventHandler} 
        onDelete={this.onDelete}
      />
    </Wrapper>
    <Wrapper title="Рандомные данные о пользователях">
      <TableUsers 
        dragOver={this.dragOver} 
        dropHandler={this.dropHandler} 
        view={this.dataUsersView()}
      />
    </Wrapper>
    <ImgLoad img={picture} loadImg={this.imgLoader} errImg={this.imgErr} />
  </WrapSection>	
	  );
	}
} 
