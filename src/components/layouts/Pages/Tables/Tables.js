import React, { useState, useEffect } from 'react';
import Form from '../../../elements/Form/Form';
import TableChrono from './components/TableChrono';
import Wrapper from './components/Wrapper';
import TableUsers from './components/TableUsers';
import WrapSection from './components/WrapSection';
import picture from '../../../../images/picture_load.png';
import ImgLoad from '../../../elements/ImgLoad/ImgLoad';
import '../../../../scss/layouts/Pages/Tables.scss';

const Tables = () => {
  const [chronology, setChronology] = useState({
    0: {
      year: 1993,
      eventOfLife:
        'Народился в с.Дмитровка Знаменского р-на Кировоградской обл.'
    },
    1: { year: 1999, eventOfLife: 'Пошел в учиться в школу' },
    2: { year: 2010, eventOfLife: 'Закончил школу' },
    3: {
      year: 2010,
      eventOfLife:
        'Поступил в Кировоградский государственный педуниверситет им. В.Винниченка'
    },
    4: { year: 2018, eventOfLife: 'Начал изучать веб-программирование' }
  });

  const [dataUsers, setDataUsers] = useState({});
  const [isFocus, setFocus] = useState('');
  const [currIndex, setCurrIndex] = useState('');
  const [isSorted, setSorted] = useState(false);

  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    try {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          if (data) {
            setDataUsers(data);
          }
        });
    } catch (e) {
      // console.log(e);
    }
  }, []);

  const toggleSortByYear = () => {
    const chronoArr = { ...chronology };
    const isSortedArr = isSorted;
    const arrObj = Object.values(chronoArr);
    if (!isSortedArr) {
      arrObj.sort((a, b) => a.year - b.year);
    } else {
      arrObj.reverse();
    }
    setChronology({ ...arrObj });
    setSorted(!isSortedArr);
  };

  const sortByEvent = () => {
    const chronoArr = { ...chronology };
    const arrChronology = Object.values(chronoArr);
    let left = 0;
    let right = arrChronology.length - 1;
    let temp;
    do {
      for (let i = left; i < right; i += 1) {
        if (arrChronology[i].eventOfLife > arrChronology[i + 1].eventOfLife) {
          temp = arrChronology[i];
          arrChronology[i] = arrChronology[i + 1];
          arrChronology[i + 1] = temp;
        }
      }
      right -= 1;
      for (let i = right; left < i; i -= 1) {
        if (arrChronology[i].eventOfLife < arrChronology[i - 1].eventOfLife) {
          temp = arrChronology[i];
          arrChronology[i] = arrChronology[i - 1];
          arrChronology[i - 1] = temp;
        }
      }
      left += 1;
    } while (left < right);
    setChronology({ ...arrChronology });
  };

  const onAddEventHandler = (event) => {
    event.preventDefault();
    const chronoArr = { ...chronology };
    const data = new FormData(event.target);
    const lengthObj = Object.entries(chronoArr).length;
    setChronology(
      {
        ...chronoArr,
        [lengthObj]: {
          year: data.get('year'),
          eventOfLife: data.get('eventOfLife')
        }
      }
    );
  };

  const onDelete = () => {
    const chronoArr = { ...chronology };
    const arrChronology = Object.entries(chronoArr);
    arrChronology.pop();
    const res = Object.fromEntries(arrChronology);
    // chronology[Object.keys(chronology).splice(-1,1)]
    setChronology({ ...res });
  };

  const keyDown = (e) => {
    const table = document.getElementById('table_users');
    const arrRows = table.childNodes;
    const focus = isFocus;
    let elem = -1;
    if (focus) {
      for (let i = 0; i < arrRows.length; i += 1) {
        if (arrRows[i].classList.value === 'bg-clicked') {
          elem = i;
        }
      }
    }

    const currentIndex = currIndex;
    if (currentIndex && currentIndex + 1 === arrRows.length) {
      elem = 0;
    }
    if (currentIndex && currentIndex - 1 === -1) {
      elem = arrRows.length;
    }
    if (e.key === 'ArrowDown') {
      elem += 1;
      if (focus) {
        setFocus(focus.classList.remove('bg-clicked'));
      }
      setFocus(arrRows[elem]);
      setCurrIndex(elem);
     
      arrRows[elem].classList.add('bg-clicked');
    }

    if (e.key === 'ArrowUp') {
      elem -= 1;

      if (focus) {
        setFocus(focus.classList.remove('bg-clicked'));
      }
      setFocus(arrRows[elem]);
      setCurrIndex(elem);

      arrRows[elem].classList.add('bg-clicked');
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', keyDown);

    return () => {
      document.removeEventListener('keydown', keyDown);
    };
  });

  const dragStart = (e) => {
    const { target } = e;
    e.dataTransfer.setData('row_id', target.id);
    setTimeout(() => {
      target.style.display = 'none';
    }, 0);
  };

  const dropHandler = (e) => {
    e.preventDefault();
    const rowId = e.dataTransfer.getData('row_id');

    const row = document.getElementById(rowId);
    row.style.display = 'table-row';
    e.target.parentNode.after(row);
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  const isActiveClass = (e) => {
    // e.target.parentNode.classList.toggle('bg-clicked');
    const focus = isFocus;
    if (e.target.parentNode.classList.value === 'bg-clicked' && focus) {
      e.target.parentNode.classList.remove('bg-clicked');
      setFocus('');
    } else if (!focus) {
      setFocus(e.target.parentNode);
      e.target.parentNode.classList.add('bg-clicked');
    } else {
      setFocus(focus.classList.remove('bg-clicked'));
      setFocus(e.target.parentNode);
      e.target.parentNode.classList.add('bg-clicked');
    }
  };

  const imgLoader = () => {
    // alert('App loaded!');
  };

  const imgErr = () => {
    // alert('Something went wrong! Checking this image!');
  };

  return (
    <WrapSection>
      <Wrapper title="Биография">
        <TableChrono
          view={chronology}
          toggleSortByYear={toggleSortByYear}
          sortByEvent={sortByEvent}
        />
        <Form onAddEvent={onAddEventHandler} onDelete={onDelete} />
      </Wrapper>
      <Wrapper title="Рандомные данные о пользователях">
        <TableUsers
          dragOver={dragOver}
          dropHandler={dropHandler}
          view={dataUsers}
          dragStart={dragStart}
          isActiveClass={isActiveClass}
        />
      </Wrapper>
      <ImgLoad img={picture} loadImg={imgLoader} errImg={imgErr} />
    </WrapSection>
  );
};

export default Tables;
