import { List, Spin } from 'antd';
import styled from 'styled-components';
import { TodoEntry } from '../types/todo';
import { TodoItem } from './TodoItem';

type Props = {
  todos: TodoEntry[];
  loading: boolean;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
  onEdit: (id: number, newContent: string) => void;
};

export const TodoList = ({ todos, loading, onToggle, onRemove, onEdit }: Props) => {
  if (loading) {
    return <Spin />;
  }

  const orderedTodos = [...todos].sort((a, b) => {
    if (a.checked === b.checked) {
      return  b.id - a.id;
    }
    return Number(a.checked) - Number(b.checked);
  });

  return (
    <StyledList
      bordered
      dataSource={orderedTodos}
      renderItem={(item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          content={item.content}
          checked={item.checked}
          onToggle={onToggle}
          onRemove={onRemove}
          onEdit={onEdit}
        />
      )}
    />
  );
};

const StyledList = styled(List<TodoEntry>)`
  background-color:#eafffc;
  border-radius: 8px;
  padding: 16px;

  .ant-list-item {
    background-color: #fff;
    margin-bottom: 8px;
    border-radius: 6px;
  }
`;