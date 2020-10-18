import React from 'react';
import styled from 'styled-components';
import { lighten, darken } from 'polished';
import { MdClear } from 'react-icons/md';
import {
  useChartDispatch,
  useChartState,
} from './Provider/ChartProvider.component';

const ModalTemplete = styled.div`
  background: rgba(0, 0, 0, 0.25);
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Content = styled.div`
  background: white;
  padding: 1rem;
  width: 600px;
  height: 400px;
`;
const ButtonBlock = styled.div`
  width: 632px;
  height: auto;
  display: flex;
  justify-content: flex-end;
`;

const ExitButton = styled.button`
  background: none;
  color: #555555;
  &:hover {
    color: ${lighten(0.1, '#000000')};
  }
  &:active {
    color: ${darken(0.1, '#000000')};
  }
  cursor: pointer;
  width: 40px;
  height: 40px;
  font-size: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  outline: none;
  border: none;
`;

function MusicModal() {
  const dispatch = useChartDispatch();
  const { search } = useChartState();
  const handleCloseMusic = () => dispatch({ type: 'CLOSE_MODAL' });
  return (
    <ModalTemplete>
      <ButtonBlock>
        <ExitButton onClick={handleCloseMusic}>
          <MdClear />
        </ExitButton>
      </ButtonBlock>
      <Content>
        <h1>모달 테스트</h1>
        <div>노래 틀어지는 공간</div>
        <div>노래: {search.name}</div>
      </Content>
    </ModalTemplete>
  );
}

export default MusicModal;
