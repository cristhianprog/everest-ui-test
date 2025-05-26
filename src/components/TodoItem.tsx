import React, { useState, useRef, useEffect } from 'react';
import { Button, Checkbox, List, Modal } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import styled from 'styled-components';

type Props = {
  id: number;
  content: string;
  checked: boolean;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
  onEdit: (id: number, newContent: string) => void;
};

const { confirm } = Modal;

export const TodoItem = ({ id, content, checked, onToggle, onRemove, onEdit }: Props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(content);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing) {
      inputRef.current?.focus();
    }
  }, [isEditing]);

  function showDeleteConfirm() {
    confirm({
      title: 'Confirma exclusão',
      content: 'Tem certeza que deseja excluir essa tarefa?',
      okText: 'Sim',
      okType: 'danger',
      cancelText: 'Não',
      onOk() {
        onRemove(id);
      },
    });
  }

  function handleEditConfirm() {
    const trimmed = editValue.trim();
    if (trimmed && trimmed !== content) {
      onEdit(id, trimmed);
    }
    setIsEditing(false);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter') {
      handleEditConfirm();
    } else if (e.key === 'Escape') {
      setEditValue(content);
      setIsEditing(false);
    }
  }

  return (
    <List.Item
      style={{ display: 'flex', alignItems: 'center' }}
      actions={[
        <Button
          danger
          icon={<DeleteOutlined />}
          onClick={showDeleteConfirm}
          key="delete"
        />,
      ]}
    >
      <LeftGroup>
        <Checkbox checked={checked} onChange={() => onToggle(id)} />
        <IdBox>#{id}</IdBox>
      </LeftGroup>

      {isEditing ? (
        <input
          ref={inputRef}
          value={editValue}
          onChange={e => setEditValue(e.target.value)}
          onBlur={handleEditConfirm}
          onKeyDown={handleKeyDown}
          style={{
            marginLeft: 8,
            padding: '4px 8px',
            fontSize: '1em',
            width: '100%',
            boxSizing: 'border-box',
          }}
        />
      ) : (
        <Text checked={checked} style={{ marginLeft: 8 }} onClick={() => setIsEditing(true)}>
          {content}
        </Text>
      )}
    </List.Item>
  );
};

const LeftGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 80px;
`;

const IdBox = styled.div`
  width: 40px;
  min-width: 40px;
  flex-shrink: 0;
  font-weight: bold;
  color: #555;
  margin-left: 8px;
`;

const Text = styled.span<{ checked: boolean }>`
  text-decoration: ${({ checked }) => (checked ? 'line-through' : 'none')};
  color: ${({ checked }) => (checked ? '#aaa' : '#000')};
  cursor: pointer;
`;
