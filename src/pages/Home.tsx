import { TodoForm } from '../components/TodoForm';
import { TodoList } from '../components/TodoList';
import { useTodos } from '../hooks/useTodos';
import { Layout, Typography, Tag, Space } from 'antd';
import styled from 'styled-components';

const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography;

export const Home = () => {
  const { todos, loading, addTodo, removeTodo, toggleTodo, editTodo } = useTodos();

  const total = todos.length;
  const completed = todos.filter(todo => todo.checked).length;
  const pending = total - completed;

  return (
    <StyledLayout>
      <StyledHeader>
        <StyledTitle>
          My To-Do List
        </StyledTitle>
      </StyledHeader>

      <StyledTopBar>
        <Space size="large" style={{ marginBottom: 16 }}>
          <Tag color="blue">Total: {total}</Tag>
          <Tag color="green">Completed: {completed}</Tag>
          <Tag color="orange">Pending: {pending}</Tag>
        </Space>

        <TodoForm onAdd={addTodo} />
      </StyledTopBar>

      <StyledContent>
        <Container>
          <TodoList
            todos={todos}
            loading={loading}
            onToggle={toggleTodo}
            onRemove={removeTodo}
            onEdit={editTodo}
          />
        </Container>
      </StyledContent>

      <StyledFooter>
        <Text style={{ color: '#fff' }}>My To-Do List ©2025 Created by Cristhian Jacques</Text>
      </StyledFooter>
    </StyledLayout>
  );
};


const StyledLayout = styled(Layout)`
  height: 100vh;
`;

const StyledTitle = styled(Title)`
  color: #fff !important;
  margin: 0 !important;
  font-size: 24px !important;
`;

const StyledHeader = styled(Header)`
  color: #fff;
  position: fixed;
  width: 100%;
  z-index: 100;
  top: 0;
  display: flex;
  align-items: center;
  padding: 0 24px;
`;

const StyledFooter = styled(Footer)`
  background: #001529;
  color: #fff;
  text-align: center;
  position: fixed;
  width: 100%;
  bottom: 0;
`;

const StyledTopBar = styled.div`
  background: #fff;
  position: fixed;
  top: 64px;
  width: 100%;
  z-index: 90;
  padding: 16px 24px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledContent = styled(Content)`
  margin-top: 180px; /* Header (64) + TopBar (~116) */
  margin-bottom: 64px; /* Footer */
  overflow-y: auto;
  height: calc(100vh - 180px - 64px);
`;

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 16px;
`;