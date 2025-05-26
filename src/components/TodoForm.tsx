import { Button, Input, Form, message } from 'antd';
import styled from 'styled-components';

type Props = {
  onAdd: (content: string) => void;
};

export const TodoForm = ({ onAdd }: Props) => {
  const [form] = Form.useForm();

  const onFinish = (values: { content: string }) => {
    if (!values.content.trim()) {
      message.error('Digite uma tarefa válida');
      return;
    }
    onAdd(values.content.trim());
    form.resetFields();
  };

  return (
    <FormContainer>
      <Form form={form} layout="inline" onFinish={onFinish}>
        <Form.Item
          name="content"
          rules={[{ required: true, message: 'Enter a task' }]}
        >
          <Input placeholder="Create new Task" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Create
          </Button>
        </Form.Item>
      </Form>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  margin-bottom: 16px;
`;