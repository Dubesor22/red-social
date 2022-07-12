import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Modal, Form, Input } from "antd";
import { update } from "../../../../features/posts/PostsSlice";

const EditModal = ({ visible, setVisible }) => {
  const { post } = useSelector((state) => state.posts);
  const [form] = Form.useForm();

  useEffect(() => {
    const postToEdit = {
      title: post.title,
      body: post.body,
    };
    form.setFieldsValue(postToEdit);
  }, [post]);

  const handleCancel = () => {
    setVisible(false);
  };

  const dispatch = useDispatch();

  const onFinish = (values) => {
    const postWithId = { ...values, _id: post._id };
    dispatch(update(postWithId));
    setVisible(false);
  };

  return (
    <Modal
      title="Edit post"
      onCancel={handleCancel}
      visible={visible}
      footer={[]}
    >
      <Form onFinish={onFinish} form={form}>
        <Form.Item label="post Name" name="title">
          <Input placeholder="post title" />
        </Form.Item>
        <Form.Item label="post Body" name="body">
          <Input.TextArea placeholder="post body" />
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

export default EditModal;
