import { ArrowRightOutlined } from '@ant-design/icons'
import { Button, Card, Col, Row, Space, Statistic, Typography } from 'antd'
import { useNavigate } from 'react-router-dom'

/** 页面组件：只做拼装与轻量展示，复杂逻辑放在 features。 */
export function HomePage() {
  const navigate = useNavigate()

  return (
    <Space direction="vertical" size={16} style={{ width: '100%' }}>
      <div>
        <Typography.Title level={3} style={{ marginBottom: 8 }}>
          欢迎使用管理后台
        </Typography.Title>
        <Typography.Paragraph type="secondary" style={{ marginBottom: 0 }}>
          基于 Vite、React、TypeScript 和 Ant Design 搭建的标准后台页面骨架。
        </Typography.Paragraph>
      </div>

      <Row gutter={16}>
        <Col xs={24} md={8}>
          <Card>
            <Statistic title="今日访问" value={1280} />
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card>
            <Statistic title="新增用户" value={56} />
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card>
            <Statistic title="待处理工单" value={12} />
          </Card>
        </Col>
      </Row>

      <Card>
        <Button type="primary" icon={<ArrowRightOutlined />} onClick={() => navigate('/users')}>
          进入用户管理
        </Button>
      </Card>
    </Space>
  )
}
