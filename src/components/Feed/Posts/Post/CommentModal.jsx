
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Modal, Form, Input } from "antd";
import { update } from "../../../../features/posts/PostsSlice";

const CommentModal = ({ visible, setVisible }) => {
  const { post } = useSelector((state) => state.posts);
  const [form] = Form.useForm();

  useEffect(() => {
    const postToEdit = {
      body: post.body,
    };
    form.setFieldsValue(postToEdit);
  }, []);

  const handleCancel = () => {
    setVisible(false);
  };

  const dispatch = useDispatch();

  const onFinish = (values) => {
    const postWithId = { ...values, _id: post._id };
    console.log(postWithId);
    dispatch(update(postWithId));
    setVisible(false);
  };

  return (
    <Modal
      title="Edit comment"
      onCancel={handleCancel}
      visible={visible}
      footer={[]}
    >
      <Form onFinish={onFinish} form={form}>
        <Form.Item label="comment Body" name="body">
          <Input.TextArea placeholder="comment body" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CommentModal;