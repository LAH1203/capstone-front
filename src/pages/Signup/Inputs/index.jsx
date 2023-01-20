import * as S from './index.styles';

import Button from '@/components/Button';
import Input from '@/components/Input';
import ToggleButton from '@/components/ToggleButton';
import { RULE } from '@/constants/rule';
import useModal from '@/hooks/useModal';

const Inputs = ({
  nickname,
  changeNickname,
  work,
  toggleWork,
  field,
  income,
  changeIncome,
}) => {
  const { showFieldModal } = useModal();

  return (
    <S.Container>
      <S.InputContainer>
        <label>닉네임</label>
        <S.Wrapper>
          <Input
            type="text"
            value={nickname}
            onChange={changeNickname}
            required
          />
        </S.Wrapper>
        <S.Description>
          닉네임은 {RULE.NICKNAME.MIN}자 이상 {RULE.NICKNAME.MAX}자 이하여야
          합니다.
        </S.Description>
      </S.InputContainer>

      <S.InputContainer>
        <label>재직 유무</label>
        <ToggleButton checked={work} toggleChecked={toggleWork} />
      </S.InputContainer>

      <S.InputContainer>
        <label>희망 분야</label>
        <S.FieldWrapper>
          <p>{field}</p>
          <Button type="button" onClick={showFieldModal}>
            선택하기
          </Button>
        </S.FieldWrapper>
      </S.InputContainer>

      <S.InputContainer>
        <label>희망 연봉</label>
        <S.Wrapper>
          <p>
            <Input
              type="number"
              value={income ? income : ''}
              onChange={changeIncome}
              min={RULE.INCOME.MIN}
              step={RULE.INCOME.STEP}
            />
            만원
          </p>
        </S.Wrapper>
        <S.Description>
          희망 연봉은 {RULE.INCOME.MIN}만원 이상이며 {RULE.INCOME.STEP}만원
          단위여야 합니다.
        </S.Description>
      </S.InputContainer>
    </S.Container>
  );
};

export default Inputs;
