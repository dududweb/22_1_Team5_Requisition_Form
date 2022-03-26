import Nav from './nav/Nav';
import CardList from 'cardList/CardList';
import * as S from 'Main_Style';
import { Filter } from './filter';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { dataType } from './toggle/type';

export default function Main() {
  const [counselingState, setCounselingState] = useState([]);
  const [counselingStateFilter, setCounselingStateFilter] = useState([{}]);
  const [toggleState, setToggleState] = useState(false);
  const [firestFilterValue, setFirestFilterValue] = useState<string>('');
  const [secondFilterValue, setSecondFilterValue] = useState<string[]>([
    '재료',
  ]);

  const changeCounseling = () => {
    setToggleState(!toggleState);
    const data: dataType[] = [...counselingState];

    setCounselingStateFilter([
      data[data.map(list => list.status).indexOf('상담중')],
    ]);
  };
  console.log('counselingStateFilter', counselingStateFilter);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    axios
      .get('./data.json')
      .then(res => {
        setCounselingState(res.data.requests);
      })
      .catch(error => setCounselingState(error));
  };

  return (
    <>
      <Nav />
      <S.ContentsWrap>
        <Filter
          changeCounseling={changeCounseling}
          toggleState={toggleState}
          firestFilterValue={firestFilterValue}
          setFirestFilterValue={setFirestFilterValue}
          secondFilterValue={secondFilterValue}
          setSecondFilterValue={setSecondFilterValue}
        />
        <S.Container>
          <CardList
            counselingState={counselingState}
            counselingStateFilter={counselingStateFilter}
            toggleState={toggleState}
            firestFilterValue={firestFilterValue}
            secondFilterValue={secondFilterValue}
          />
        </S.Container>
      </S.ContentsWrap>
    </>
  );
}
