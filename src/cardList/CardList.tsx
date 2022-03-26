import Cardbox from 'cardbox/Cardbox';
import * as S from './CardList_Style';
import { Data } from '../interfaces';

interface CardListPropsType {
  counselingState: Data[];
  counselingStateFilter: {}[];
  toggleState: boolean;
  firestFilterValue: string;
  secondFilterValue: string[];
}

export default function CardList(props: CardListPropsType) {
  const {
    counselingState,
    counselingStateFilter,
    toggleState,
    firestFilterValue,
  } = props;

  const 첫번째선택필터 = counselingState?.filter(it => it.method);

  const 두번째필터 = 첫번째선택필터?.filter(it => it.method);

  console.log('firestFilteringCounselingState', 첫번째선택필터);
  console.log('두번째필터', 두번째필터);
  console.log('counselingStateFilter', counselingStateFilter);

  return (
    <div>
      {toggleState ? (
        <div>
          {firestFilterValue === '가공방식' ? (
            <S.Container>
              {counselingStateFilter?.map((List, index) => {
                return <Cardbox key={index} List={List} />;
              })}
            </S.Container>
          ) : (
            <S.Container>
              {두번째필터?.map((List, index) => {
                return <Cardbox key={index} List={List} />;
              })}
            </S.Container>
          )}
        </div>
      ) : (
        <div>
          {firestFilterValue === '가공방식' ? (
            <S.Container>
              {counselingState?.map((List, index) => {
                return <Cardbox key={index} List={List} />;
              })}
            </S.Container>
          ) : (
            <S.Container>
              {첫번째선택필터?.map((List, index) => {
                return <Cardbox key={index} List={List} />;
              })}
            </S.Container>
          )}
        </div>
      )}
    </div>
  );
}
