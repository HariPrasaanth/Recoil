// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styled from 'styled-components';
import TodoList from './components/TodoList';
import NxWelcome from './nx-welcome';

const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
`

const MainContainer = styled.div`
`

export function App() {
  return (
    <AppContainer>
      <MainContainer>
        <TodoList />
      </MainContainer>
    </AppContainer>
  );
}

export default App;
