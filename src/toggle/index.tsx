import { FilterPropsType11 } from '../filter/Types';
import * as S from './Toggle_style';

export default function Toggle(props: FilterPropsType11) {
  const { changeCounseling, toggleState } = props;

  return (
    <S.CheckBoxWrapper>
      <S.CheckBox
        id="filterToggle"
        type="checkbox"
        onChange={changeCounseling}
        checked={toggleState}
      />
      <S.CheckBoxLabel htmlFor="filterToggle" />
    </S.CheckBoxWrapper>
  );
}

// const [counselingState, setCounselingState] = useState([]);
// const [counselingState1, setCounselingState1] = useState([{}]);
// const [toggleState, setToggleState] = useState(false);

// const changeCounseling = () => {
//   setToggleState(!toggleState);
//   const data: dataType[] = [...counselingState];

//   if (toggleState === true) {
//     setCounselingState1([
//       data[data.map(list => list.status).indexOf('상담중')],
//     ]);
//   }
// };

// useEffect(() => {
//   getData();
// }, []);

// const getData = async () => {
//   axios
//     .get('http://localhost:9000/requests')
//     .then(res => {
//       setCounselingState(res.data);
//     })
//     .catch(error => console.log(error));
// };
