import { MailOutlined } from '@ant-design/icons'
import { Button, Flex, Form, TextInput } from '@cube-dev/ui-kit'

export function Subscribe() {
  return (
    <Form>
      <Flex gap="0.75rem">
        <TextInput
          prefix={<MailOutlined />}
          placeholder="Subscribe via email"
          radius="0.5rem"
          width="300px"
        />
        <Button radius="0.5rem" type="primary">
          Subscribe
        </Button>
      </Flex>
    </Form>
  )
}
